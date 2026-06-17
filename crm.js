/* Restaurant CRM v9 */

const APP_VERSION = "v9";

const ROLE_PRESETS = ["Manager", "GM", "Server", "Chef", "Bartender", "Host", "Sommelier", "Other"];

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
  return new Promise((resolve, reject) => {
    const tx = db.transaction(["restaurants", "staff"], "readwrite");
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
    tx.oncomplete = () => resolve();
    const staffStore = tx.objectStore("staff");
    const restaurantStore = tx.objectStore("restaurants");
    for (const member of staff) {
      staffStore.delete(member.id);
    }
    restaurantStore.delete(id);
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
    phone: data.phone || "",
    email: data.email || "",
    createdAt: Date.now(),
  };
  await dbRequest(db.transaction("staff", "readwrite").objectStore("staff").add(staff));
  return staff;
}

async function deleteStaff(id) {
  const db = await openDatabase();
  await dbRequest(db.transaction("staff", "readwrite").objectStore("staff").delete(id));
}

let route = { view: "list" };
let listSearch = "";
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

function destinationQuery(restaurant) {
  if (restaurant.address) {
    return `${restaurant.name}, ${restaurant.address}`;
  }
  return restaurant.name;
}

function appleMapsUrl(destination) {
  return `https://maps.apple.com/?daddr=${encodeURIComponent(destination)}`;
}

function uberUrl(destination, nickname, coords) {
  let url = "https://m.uber.com/ul/?action=setPickup&pickup=my_location";
  url += `&dropoff[nickname]=${encodeURIComponent(nickname || destination)}`;
  url += `&dropoff[formatted_address]=${encodeURIComponent(destination)}`;
  if (coords) {
    url += `&dropoff[latitude]=${coords.lat}&dropoff[longitude]=${coords.lng}`;
  }
  return url;
}

async function geocodeAddress(query) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`,
      { headers: { Accept: "application/json" } }
    );
    if (response.ok) {
      const results = await response.json();
      if (results.length) {
        return { lat: parseFloat(results[0].lat), lng: parseFloat(results[0].lon) };
      }
    }
  } catch (err) {
    console.warn("Nominatim geocoding failed", err);
  }

  try {
    const response = await fetch(
      `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=1`
    );
    if (response.ok) {
      const data = await response.json();
      if (data.features && data.features.length) {
        const [lng, lat] = data.features[0].geometry.coordinates;
        return { lat, lng };
      }
    }
  } catch (err) {
    console.warn("Photon geocoding failed", err);
  }

  return null;
}

function openNavigation(url) {
  window.location.href = url;
}

async function openUber(destination, nickname) {
  let coords = null;
  try {
    coords = await geocodeAddress(destination);
  } catch (err) {
    console.warn("Geocoding failed", err);
  }
  openNavigation(uberUrl(destination, nickname, coords));
}

function showNavigationPicker(restaurant) {
  const destination = destinationQuery(restaurant);
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <h2>Get directions</h2>
      <p class="modal-text">${escapeHtml(destination)}</p>
      <div class="nav-actions">
        <button class="btn btn-primary full-width nav-btn" id="open-maps" type="button">Open in Apple Maps</button>
        <button class="btn btn-secondary full-width nav-btn uber-btn" id="open-uber" type="button">Open in Uber</button>
        <button class="btn btn-secondary full-width nav-btn" id="nav-cancel" type="button">Cancel</button>
      </div>
    </div>
  `;

  const modal = overlay.querySelector(".modal");
  const uberBtn = overlay.querySelector("#open-uber");

  const close = () => {
    overlay.remove();
    document.body.style.overflow = "";
  };

  document.body.style.overflow = "hidden";
  document.body.appendChild(overlay);
  modal.addEventListener("click", (e) => e.stopPropagation());

  overlay.querySelector("#open-maps").addEventListener("click", () => {
    openNavigation(appleMapsUrl(destination));
    close();
  });

  uberBtn.addEventListener("click", async () => {
    uberBtn.disabled = true;
    uberBtn.textContent = "Finding location…";
    try {
      await openUber(destination, restaurant.name);
      close();
    } catch (err) {
      uberBtn.disabled = false;
      uberBtn.textContent = "Open in Uber";
      alert("Could not open Uber. Check the address and try again.");
    }
  });

  overlay.querySelector("#nav-cancel").addEventListener("click", close);
}

function versionBadge() {
  return `<span class="version-badge">${APP_VERSION}</span>`;
}

function getInitials(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function getRoleBadgeClass(role) {
  const r = role.toLowerCase();
  if (r === "manager" || r === "gm") return "badge-manager";
  if (r === "server" || r === "host") return "badge-server";
  if (r === "chef" || r === "sommelier") return "badge-chef";
  if (r === "bartender") return "badge-bartender";
  return "badge-default";
}

function formatPhoneLink(phone) {
  return phone.replace(/[^\d+]/g, "");
}

function renderStaffCard(s) {
  const phone = s.phone ? trim(s.phone) : "";
  const email = s.email ? trim(s.email) : "";
  return `
    <div class="contact-card">
      <div class="contact-avatar">${escapeHtml(getInitials(s.name))}</div>
      <div class="contact-body">
        <div class="contact-header">
          <span class="contact-name">${escapeHtml(s.name)}</span>
          <span class="role-badge ${getRoleBadgeClass(s.role)}">${escapeHtml(s.role)}</span>
        </div>
        ${phone ? `<a class="contact-link" href="tel:${formatPhoneLink(phone)}">${escapeHtml(phone)}</a>` : ""}
        ${email ? `<a class="contact-link" href="mailto:${encodeURIComponent(email)}">${escapeHtml(email)}</a>` : ""}
        ${s.note ? `<p class="contact-note">${escapeHtml(s.note)}</p>` : ""}
        <div class="contact-actions">
          <button class="btn-text edit-staff-btn" type="button" data-id="${s.id}">Edit</button>
          <button class="btn-text danger delete-staff-btn" type="button" data-id="${s.id}">Delete</button>
        </div>
      </div>
    </div>`;
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
  const query = listSearch.toLowerCase();
  const filtered = restaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(query) ||
      (r.address || "").toLowerCase().includes(query)
  );
  const counts = await Promise.all(filtered.map((r) => getStaffCount(r.id)));

  app.innerHTML = `
    <header class="header">
      <h1>Restaurants ${versionBadge()}</h1>
      <button class="icon-btn" id="add-btn" type="button" aria-label="Add restaurant">+</button>
    </header>
    <main class="content">
      <div class="search-box">
        <input id="search-input" type="search" placeholder="Search restaurants..." value="${escapeHtml(listSearch)}" />
      </div>
      ${
        filtered.length === 0
          ? `
        <div class="empty-state">
          <div class="icon">🍽️</div>
          <h2>${restaurants.length === 0 ? "No restaurants yet" : "No matches"}</h2>
          <p>${restaurants.length === 0 ? "Tap + to add your first restaurant." : "Try a different search."}</p>
        </div>`
          : `
        <ul class="list">
          ${filtered
            .map(
              (r, i) => `
            <li class="list-row">
              <button class="restaurant-card" type="button" data-id="${r.id}">
                <div class="restaurant-icon">🍽</div>
                <div class="info">
                  <div class="title">${escapeHtml(r.name)}</div>
                  <div class="subtitle">${r.address ? escapeHtml(r.address) + " · " : ""}${staffLabel(counts[i])}</div>
                </div>
                <span class="chevron">›</span>
              </button>
              <button class="delete-list-btn delete-restaurant-list" type="button" data-id="${r.id}" aria-label="Delete restaurant">✕</button>
            </li>`
            )
            .join("")}
        </ul>`
      }
    </main>
  `;

  app.querySelector("#add-btn").addEventListener("click", () => navigate({ view: "add-restaurant" }));

  const searchInput = app.querySelector("#search-input");
  searchInput.addEventListener("input", () => {
    listSearch = searchInput.value;
    renderList();
  });

  app.querySelectorAll(".restaurant-card").forEach((el) => {
    el.addEventListener("click", () => navigate({ view: "detail", id: el.dataset.id }));
  });

  app.querySelectorAll(".delete-restaurant-list").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const restaurant = await getRestaurant(btn.dataset.id);
      if (!restaurant) return;
      confirmDelete(
        `Delete ${restaurant.name}?`,
        "This removes the restaurant and all its staff.",
        async () => {
          await deleteRestaurant(restaurant.id);
          await renderList();
        }
      );
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

  app.innerHTML = `
    <header class="header">
      <button class="back-btn" id="back-btn" type="button" aria-label="Back">‹</button>
      <h1>${escapeHtml(restaurant.name)} ${versionBadge()}</h1>
    </header>
    <main class="content">
      <div class="section">
        <div class="section-title">Details</div>
        <div class="card">
          ${
            restaurant.address
              ? `
          <button class="address-btn" id="address-nav" type="button">
            <span class="label">Address</span>
            <span class="address-value">${escapeHtml(restaurant.address)}</span>
            <span class="address-hint">Tap for Maps or Uber →</span>
          </button>`
              : `
          <div class="card-row">
            <span class="label">Address</span>
            <span class="value" style="color: var(--text-muted)">No address</span>
          </div>`
          }
        </div>
        <button class="btn btn-secondary full-width" id="edit-restaurant-btn" type="button">Edit Restaurant</button>
      </div>

      <div class="section">
        <div class="section-title">Staff</div>
        <button class="btn btn-primary full-width" id="add-staff-btn" type="button">+ Add Staff Member</button>
        ${
          staff.length === 0
            ? `<div class="empty-card">No staff yet — tap the button above</div>`
            : `<div class="staff-list">${staff.map((s) => renderStaffCard(s)).join("")}</div>`
        }
      </div>

      <button class="btn btn-danger btn-danger-compact" id="delete-restaurant-btn" type="button">Delete Restaurant</button>
    </main>
  `;

  app.querySelector("#back-btn").addEventListener("click", () => navigate({ view: "list" }));
  app.querySelector("#edit-restaurant-btn").addEventListener("click", () => navigate({ view: "edit-restaurant", id }));
  app.querySelector("#add-staff-btn").addEventListener("click", () => navigate({ view: "add-staff", restaurantId: id }));

  const addressNav = app.querySelector("#address-nav");
  if (addressNav) {
    addressNav.addEventListener("click", () => showNavigationPicker(restaurant));
  }

  app.querySelector("#delete-restaurant-btn").addEventListener("click", () => {
    confirmDelete(
      `Delete ${restaurant.name}?`,
      "This removes the restaurant and all its staff.",
      async () => {
        await deleteRestaurant(id);
        navigate({ view: "list" });
      }
    );
  });

  app.querySelectorAll(".edit-staff-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      navigate({ view: "edit-staff", restaurantId: id, staffId: btn.dataset.id });
    });
  });

  app.querySelectorAll(".delete-staff-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const member = staff.find((s) => s.id === btn.dataset.id);
      confirmDelete(
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
      <button class="back-btn" id="cancel-btn" type="button" aria-label="Cancel">‹</button>
      <h1>${isEdit ? "Edit Restaurant" : "New Restaurant"} ${versionBadge()}</h1>
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
  let phone = "";
  let email = "";

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
    phone = member.phone || "";
    email = member.email || "";
  }

  app.innerHTML = `
    <header class="header">
      <button class="back-btn" id="cancel-btn" type="button" aria-label="Cancel">‹</button>
      <h1>${isEdit ? "Edit Staff" : "New Staff"} ${versionBadge()}</h1>
    </header>
    <main class="content">
      <form class="form" id="staff-form">
        <div class="form-section">
          <div class="field">
            <label for="name">Name</label>
            <input id="name" type="text" value="${escapeHtml(name)}" placeholder="Full name" required />
          </div>
          <div class="field">
            <label for="phone">Phone</label>
            <input id="phone" type="tel" value="${escapeHtml(phone)}" placeholder="+46 70 123 45 67" />
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" type="email" value="${escapeHtml(email)}" placeholder="name@example.com" />
          </div>
        </div>
        <div class="field">
          <label for="role">Role</label>
          <div class="role-presets" id="role-presets">
            ${ROLE_PRESETS.map(
              (preset) =>
                `<button type="button" class="preset-chip" data-role="${preset}">${preset}</button>`
            ).join("")}
          </div>
          <input id="role" type="text" value="${escapeHtml(role)}" placeholder="Or type a custom role" required />
        </div>
        <div class="field">
          <label for="note">Note</label>
          <textarea id="note" placeholder="Short note">${escapeHtml(note)}</textarea>
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
  const phoneInput = app.querySelector("#phone");
  const emailInput = app.querySelector("#email");
  const saveBtn = app.querySelector("#save-btn");

  function updatePresetHighlight() {
    const current = trim(roleInput.value);
    app.querySelectorAll(".preset-chip").forEach((chip) => {
      const preset = chip.dataset.role;
      const isMatch =
        preset === "Other"
          ? current !== "" && !ROLE_PRESETS.slice(0, -1).includes(current)
          : current === preset;
      chip.classList.toggle("selected", isMatch);
    });
  }

  function updateSave() {
    saveBtn.disabled = trim(nameInput.value) === "" || trim(roleInput.value) === "";
  }

  nameInput.addEventListener("input", updateSave);
  roleInput.addEventListener("input", () => {
    updateSave();
    updatePresetHighlight();
  });
  updateSave();
  updatePresetHighlight();

  app.querySelectorAll(".preset-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const preset = chip.dataset.role;
      if (preset === "Other") {
        roleInput.value = "";
        roleInput.focus();
      } else {
        roleInput.value = preset;
      }
      updateSave();
      updatePresetHighlight();
    });
  });

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
        phone: trim(phoneInput.value),
        email: trim(emailInput.value),
      },
      editStaffId
    );
    navigate({ view: "detail", id: restaurantId });
  });
}

function confirmDelete(title, message, onConfirm) {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <h2>${escapeHtml(title)}</h2>
      <p class="modal-text">${escapeHtml(message)}</p>
      <div class="modal-actions">
        <button class="btn btn-secondary modal-btn" id="modal-cancel" type="button">Cancel</button>
        <button class="btn btn-delete modal-btn" id="modal-confirm" type="button">Delete</button>
      </div>
    </div>
  `;

  const modal = overlay.querySelector(".modal");

  function close() {
    overlay.remove();
    document.body.style.overflow = "";
  }

  async function runDelete() {
    try {
      await onConfirm();
      close();
    } catch (err) {
      alert("Could not delete. Please try again.");
      console.error(err);
    }
  }

  document.body.style.overflow = "hidden";
  document.body.appendChild(overlay);

  modal.addEventListener("click", (e) => e.stopPropagation());

  overlay.querySelector("#modal-cancel").addEventListener("click", close);
  overlay.querySelector("#modal-confirm").addEventListener("click", runDelete);
}

function showConfirmDialog(title, message, onConfirm) {
  confirmDelete(title, message, onConfirm);
}

render();
