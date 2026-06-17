/* ── IndexedDB layer ── */

const DB_NAME = "restaurant-crm";
const DB_VERSION = 1;

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains("restaurants")) {
        const store = db.createObjectStore("restaurants", { keyPath: "id" });
        store.createIndex("by-name", "name");
      }
      if (!db.objectStoreNames.contains("staff")) {
        const store = db.createObjectStore("staff", { keyPath: "id" });
        store.createIndex("by-restaurant", "restaurantId");
        store.createIndex("by-name", "name");
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function dbRequest(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function createId() {
  return crypto.randomUUID();
}

async function getAllRestaurants() {
  const db = await openDatabase();
  const restaurants = await dbRequest(db.transaction("restaurants").objectStore("restaurants").getAll());
  return restaurants.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
}

async function getRestaurant(id) {
  const db = await openDatabase();
  return dbRequest(db.transaction("restaurants").objectStore("restaurants").get(id));
}

async function saveRestaurant(data, id) {
  const db = await openDatabase();
  if (id) {
    const existing = await getRestaurant(id);
    if (!existing) throw new Error("Restaurant not found");
    const updated = { ...existing, ...data };
    await dbRequest(db.transaction("restaurants", "readwrite").objectStore("restaurants").put(updated));
    return updated;
  }
  const restaurant = { id: createId(), name: data.name, address: data.address, createdAt: Date.now() };
  await dbRequest(db.transaction("restaurants", "readwrite").objectStore("restaurants").add(restaurant));
  return restaurant;
}

async function deleteRestaurant(id) {
  const db = await openDatabase();
  const staff = await getStaffForRestaurant(id);
  const tx = db.transaction(["restaurants", "staff"], "readwrite");
  const staffStore = tx.objectStore("staff");
  for (const member of staff) {
    staffStore.delete(member.id);
  }
  tx.objectStore("restaurants").delete(id);
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function getStaffForRestaurant(restaurantId) {
  const db = await openDatabase();
  const staff = await dbRequest(
    db.transaction("staff").objectStore("staff").index("by-restaurant").getAll(restaurantId)
  );
  return staff.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
}

async function getStaffCount(restaurantId) {
  const db = await openDatabase();
  return dbRequest(
    db.transaction("staff").objectStore("staff").index("by-restaurant").count(restaurantId)
  );
}

async function saveStaff(restaurantId, data, id) {
  const db = await openDatabase();
  if (id) {
    const existing = await dbRequest(db.transaction("staff").objectStore("staff").get(id));
    if (!existing) throw new Error("Staff not found");
    const updated = { ...existing, ...data };
    await dbRequest(db.transaction("staff", "readwrite").objectStore("staff").put(updated));
    return updated;
  }
  const staff = {
    id: createId(),
    restaurantId,
    name: data.name,
    role: data.role,
    note: data.note || "",
    createdAt: Date.now(),
  };
  await dbRequest(db.transaction("staff", "readwrite").objectStore("staff").add(staff));
  return staff;
}

async function deleteStaff(id) {
  const db = await openDatabase();
  await dbRequest(db.transaction("staff", "readwrite").objectStore("staff").delete(id));
}

/* ── App UI ── */

let route = { view: "list" };
const app = document.getElementById("app");

function navigate(next) {
  route = next;
  render();
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function trim(value) {
  return value.trim();
}

async function render() {
  switch (route.view) {
    case "list":
      await renderList();
      break;
    case "detail":
      await renderDetail(route.id);
      break;
    case "add-restaurant":
      renderRestaurantForm();
      break;
    case "edit-restaurant":
      await renderRestaurantForm(route.id);
      break;
    case "add-staff":
      renderStaffForm(route.restaurantId);
      break;
    case "edit-staff":
      await renderStaffForm(route.restaurantId, route.staffId);
      break;
  }
}

async function renderList() {
  const restaurants = await getAllRestaurants();
  const counts = await Promise.all(restaurants.map((r) => getStaffCount(r.id)));

  app.innerHTML = `
    <header class="header">
      <h1>Restaurants</h1>
      <button class="icon-btn" id="add-btn" aria-label="Add restaurant">+</button>
    </header>
    <main class="content">
      ${
        restaurants.length === 0
          ? `
        <div class="empty-state">
          <div class="icon">🍽️</div>
          <h2>No restaurants yet</h2>
          <p>Tap + to add your first restaurant.</p>
        </div>`
          : `
        <ul class="list">
          ${restaurants
            .map(
              (r, i) => `
            <li>
              <a class="list-item" href="#" data-id="${r.id}">
                <div class="info">
                  <div class="title">${escapeHtml(r.name)}</div>
                  <div class="subtitle">${staffLabel(counts[i])}</div>
                </div>
                <span class="chevron">›</span>
              </a>
            </li>`
            )
            .join("")}
        </ul>`
      }
    </main>
  `;

  app.querySelector("#add-btn").addEventListener("click", () => navigate({ view: "add-restaurant" }));

  app.querySelectorAll(".list-item").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      navigate({ view: "detail", id: el.dataset.id });
    });
  });
}

function staffLabel(count) {
  return count === 1 ? "1 staff member" : `${count} staff members`;
}

async function renderDetail(id) {
  const restaurant = await getRestaurant(id);
  if (!restaurant) {
    navigate({ view: "list" });
    return;
  }

  const staff = await getStaffForRestaurant(id);
  let menuOpen = false;

  function draw() {
    app.innerHTML = `
      <header class="header">
        <button class="back-btn" id="back-btn" aria-label="Back">‹</button>
        <h1>${escapeHtml(restaurant.name)}</h1>
        <button class="menu-btn" id="menu-btn" aria-label="Menu">⋯</button>
        ${
          menuOpen
            ? `
          <div class="menu-dropdown" id="menu">
            <button id="add-staff-btn">Add Staff</button>
            <button id="edit-restaurant-btn">Edit Restaurant</button>
            <div class="divider"></div>
            <button class="danger" id="delete-restaurant-btn">Delete Restaurant</button>
          </div>`
            : ""
        }
      </header>
      <main class="content">
        <div class="section">
          <div class="section-title">Details</div>
          <div class="card">
            <div class="card-row">
              <span class="label">Address</span>
              <span class="value" style="${restaurant.address ? "" : "color: var(--text-muted)"}">
                ${restaurant.address ? escapeHtml(restaurant.address) : "No address"}
              </span>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="section-header">
            <div class="section-title">Staff</div>
            <button class="add-staff-btn" id="add-staff-inline" type="button">+ Add Staff</button>
          </div>
          <div class="card">
            ${
              staff.length === 0
                ? `<div class="card-row"><span style="color: var(--text-muted)">No staff added yet</span></div>`
                : staff
                    .map(
                      (s) => `
              <div class="staff-item">
                <div class="info">
                  <div class="name">${escapeHtml(s.name)}</div>
                  <div class="role">${escapeHtml(s.role)}</div>
                  ${s.note ? `<div class="note">${escapeHtml(s.note)}</div>` : ""}
                </div>
                <div class="actions">
                  <button class="text-btn edit-staff-btn" data-id="${s.id}">Edit</button>
                  <button class="text-btn danger delete-staff-btn" data-id="${s.id}">Delete</button>
                </div>
              </div>`
                    )
                    .join("")
            }
          </div>
        </div>
      </main>
    `;

    bindDetailEvents();
  }

  function bindDetailEvents() {
    app.querySelector("#back-btn").addEventListener("click", () => navigate({ view: "list" }));

    app.querySelector("#add-staff-inline").addEventListener("click", () => {
      navigate({ view: "add-staff", restaurantId: id });
    });

    app.querySelector("#menu-btn").addEventListener("click", () => {
      menuOpen = !menuOpen;
      draw();
    });

    if (menuOpen) {
      app.querySelector("#add-staff-btn").addEventListener("click", () => {
        menuOpen = false;
        navigate({ view: "add-staff", restaurantId: id });
      });
      app.querySelector("#edit-restaurant-btn").addEventListener("click", () => {
        menuOpen = false;
        navigate({ view: "edit-restaurant", id });
      });
      app.querySelector("#delete-restaurant-btn").addEventListener("click", () => {
        menuOpen = false;
        showConfirmDialog(
          `Delete ${restaurant.name}?`,
          "This will also delete all staff at this restaurant.",
          async () => {
            await deleteRestaurant(id);
            navigate({ view: "list" });
          }
        );
      });

      document.addEventListener(
        "click",
        (e) => {
          const menu = app.querySelector("#menu");
          const menuBtn = app.querySelector("#menu-btn");
          if (menu && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
            menuOpen = false;
            draw();
          }
        },
        { once: true }
      );
    }

    app.querySelectorAll(".edit-staff-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        navigate({ view: "edit-staff", restaurantId: id, staffId: btn.dataset.id });
      });
    });

    app.querySelectorAll(".delete-staff-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const member = staff.find((s) => s.id === btn.dataset.id);
        showConfirmDialog(
          `Delete ${member ? member.name : "staff"}?`,
          "This cannot be undone.",
          async () => {
            await deleteStaff(btn.dataset.id);
            await renderDetail(id);
          }
        );
      });
    });
  }

  draw();
}

async function renderRestaurantForm(editId) {
  const isEdit = !!editId;
  let name = "";
  let address = "";

  if (editId) {
    const restaurant = await getRestaurant(editId);
    if (!restaurant) {
      navigate({ view: "list" });
      return;
    }
    name = restaurant.name;
    address = restaurant.address;
  }

  app.innerHTML = `
    <header class="header">
      <button class="back-btn" id="cancel-btn" aria-label="Cancel">‹</button>
      <h1>${isEdit ? "Edit Restaurant" : "New Restaurant"}</h1>
    </header>
    <main class="content">
      <form class="form" id="restaurant-form">
        <div class="field">
          <label for="name">Name</label>
          <input id="name" type="text" value="${escapeHtml(name)}" placeholder="Restaurant name" required />
        </div>
        <div class="field">
          <label for="address">Address</label>
          <textarea id="address" placeholder="Street, city">${escapeHtml(address)}</textarea>
        </div>
        <div class="form-actions">
          <button type="button" class="btn btn-secondary" id="cancel-form">Cancel</button>
          <button type="submit" class="btn btn-primary" id="save-btn" disabled>Save</button>
        </div>
      </form>
    </main>
  `;

  const nameInput = app.querySelector("#name");
  const addressInput = app.querySelector("#address");
  const saveBtn = app.querySelector("#save-btn");

  function updateSave() {
    saveBtn.disabled = trim(nameInput.value) === "";
  }

  nameInput.addEventListener("input", updateSave);
  updateSave();

  const cancel = () => navigate(isEdit ? { view: "detail", id: editId } : { view: "list" });

  app.querySelector("#cancel-btn").addEventListener("click", cancel);
  app.querySelector("#cancel-form").addEventListener("click", cancel);

  app.querySelector("#restaurant-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const saved = await saveRestaurant(
      { name: trim(nameInput.value), address: trim(addressInput.value) },
      editId
    );
    navigate(isEdit ? { view: "detail", id: saved.id } : { view: "list" });
  });
}

async function renderStaffForm(restaurantId, editStaffId) {
  const isEdit = !!editStaffId;
  let name = "";
  let role = "";
  let note = "";

  if (editStaffId) {
    const members = await getStaffForRestaurant(restaurantId);
    const member = members.find((s) => s.id === editStaffId);
    if (!member) {
      navigate({ view: "detail", id: restaurantId });
      return;
    }
    name = member.name;
    role = member.role;
    note = member.note || "";
  }

  app.innerHTML = `
    <header class="header">
      <button class="back-btn" id="cancel-btn" aria-label="Cancel">‹</button>
      <h1>${isEdit ? "Edit Staff" : "New Staff"}</h1>
    </header>
    <main class="content">
      <form class="form" id="staff-form">
        <div class="field">
          <label for="name">Name</label>
          <input id="name" type="text" value="${escapeHtml(name)}" placeholder="Staff name" required />
        </div>
        <div class="field">
          <label for="role">Role</label>
          <input id="role" type="text" value="${escapeHtml(role)}" placeholder="e.g. Manager, Server" required />
        </div>
        <div class="field">
          <label for="note">Note</label>
          <textarea id="note" placeholder="Short note (e.g. prefers window table, speaks Spanish)">${escapeHtml(note)}</textarea>
        </div>
        <div class="form-actions">
          <button type="button" class="btn btn-secondary" id="cancel-form">Cancel</button>
          <button type="submit" class="btn btn-primary" id="save-btn" disabled>Save</button>
        </div>
      </form>
    </main>
  `;

  const nameInput = app.querySelector("#name");
  const roleInput = app.querySelector("#role");
  const noteInput = app.querySelector("#note");
  const saveBtn = app.querySelector("#save-btn");

  function updateSave() {
    saveBtn.disabled = trim(nameInput.value) === "" || trim(roleInput.value) === "";
  }

  nameInput.addEventListener("input", updateSave);
  roleInput.addEventListener("input", updateSave);
  updateSave();

  const cancel = () => navigate({ view: "detail", id: restaurantId });

  app.querySelector("#cancel-btn").addEventListener("click", cancel);
  app.querySelector("#cancel-form").addEventListener("click", cancel);

  app.querySelector("#staff-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    await saveStaff(
      restaurantId,
      {
        name: trim(nameInput.value),
        role: trim(roleInput.value),
        note: trim(noteInput.value),
      },
      editStaffId
    );
    navigate({ view: "detail", id: restaurantId });
  });
}

function showConfirmDialog(title, message, onConfirm) {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal">
      <h2>${escapeHtml(title)}</h2>
      <p style="color: var(--text-muted); margin-bottom: 4px;">${escapeHtml(message)}</p>
      <div class="modal-actions">
        <button class="btn btn-secondary" id="modal-cancel">Cancel</button>
        <button class="btn btn-primary" id="modal-confirm" style="background: var(--danger)">Delete</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.querySelector("#modal-cancel").addEventListener("click", () => overlay.remove());
  overlay.querySelector("#modal-confirm").addEventListener("click", async () => {
    await onConfirm();
    overlay.remove();
  });
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.remove();
  });
}

render();
