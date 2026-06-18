/* Restaurant CRM */

const APP_VERSION = "v16";
const APP_NAME = "Restaurant CRM";
const SWIPE_DELETE_WIDTH = 80;
const LANG_KEY = "restaurant-crm-lang";
const SORT_KEY = "restaurant-crm-sort";
const TAG_FILTER_KEY = "restaurant-crm-tag-filter";
const LIST_MODE_KEY = "restaurant-crm-list-mode";
const LAST_EXPORT_KEY = "restaurant-crm-last-export";
const LAST_AUTO_EXPORT_KEY = "restaurant-crm-last-auto-export";
const BACKUP_REMINDER_DISMISSED_KEY = "restaurant-crm-backup-dismissed";
const AUTO_BACKUP_KEY = "restaurant-crm-auto-backup";
const MAX_VISITS = 50;
const BACKUP_REMINDER_DAYS = 30;

const TAG_PRESETS = [
  { id: "good-wine", en: "Good wine list", sv: "Bra vinlista", style: "wine" },
  { id: "avoid", en: "Avoid", sv: "Undvik", style: "avoid" },
  { id: "fine-dining", en: "Fine dining", sv: "Fine dining", style: "dining" },
  { id: "star-1", en: "*", sv: "*", style: "stars" },
  { id: "star-2", en: "**", sv: "**", style: "stars" },
  { id: "star-3", en: "***", sv: "***", style: "stars" },
  { id: "favorite", en: "Favorite", sv: "Favorit", style: "favorite" },
  { id: "michelin", en: "Michelin", sv: "Michelin", style: "michelin" },
  { id: "casual", en: "Casual", sv: "Avslappnat", style: "default" },
  { id: "business-lunch", en: "Business lunch", sv: "Affärslunch", style: "default" },
  { id: "date-night", en: "Date night", sv: "Dejt", style: "default" },
  { id: "lunch-spot", en: "Lunch spot", sv: "Lunchställe", style: "default" },
  { id: "great-service", en: "Great service", sv: "Bra service", style: "default" },
  { id: "outdoor", en: "Outdoor seating", sv: "Uteservering", style: "default" },
  { id: "special-occasion", en: "Special occasion", sv: "Speciellt tillfälle", style: "default" },
  { id: "family-friendly", en: "Family friendly", sv: "Barnvänligt", style: "default" },
];

const I18N = {
  en: {
    addRestaurant: "Add restaurant",
    searchPlaceholder: "Search restaurants…",
    noRestaurants: "No restaurants yet",
    noMatches: "No matches",
    tapToAdd: "Tap + to add your first restaurant.",
    trySearch: "Try a different search.",
    swipeDeleteRestaurant: "Swipe left on a restaurant to delete",
    staffOne: "1 staff member",
    staffMany: "{n} staff members",
    sortName: "A–Z",
    sortRecent: "Recent",
    sortLabel: "Sort",
    neverVisited: "Never visited",
    visitedToday: "Today",
    visitedYesterday: "Yesterday",
    visitedDaysAgo: "{n} days ago",
    lastVisit: "Last visit",
    logVisit: "Visited today",
    visitHistory: "Visit history",
    noVisitsYet: "No visits logged yet",
    addPastVisit: "Add past visit",
    visitDate: "Date",
    addVisit: "Add",
    invalidVisitDate: "Pick a valid date.",
    futureVisitDate: "Date cannot be in the future.",
    back: "Back",
    details: "Details",
    address: "Address",
    noAddress: "No address",
    addressHint: "Tap for Maps or Uber →",
    note: "Note",
    noNote: "No note",
    editRestaurant: "Edit Restaurant",
    newRestaurant: "New Restaurant",
    staff: "Staff",
    addStaff: "+ Add Staff Member",
    noStaff: "No staff yet — tap the button above",
    swipeDeleteStaff: "Swipe left on staff to delete",
    editStaff: "Edit Staff",
    newStaff: "New Staff",
    edit: "Edit",
    delete: "Delete",
    cancel: "Cancel",
    save: "Save",
    photo: "Photo",
    addRestaurantPhoto: "Add restaurant photo",
    addStaffPhoto: "Add staff photo",
    choosePhoto: "Choose Photo",
    remove: "Remove",
    name: "Name",
    restaurantName: "Restaurant name",
    restaurantNotePlaceholder: "Table preferences, opening hours, etc.",
    streetCity: "Street, city",
    fullName: "Full name",
    phone: "Phone",
    email: "Email",
    role: "Role",
    customRole: "Or type a custom role",
    shortNote: "Short note",
    getDirections: "Get directions",
    openMaps: "Open in Apple Maps",
    openUber: "Open in Uber",
    findingLocation: "Finding location…",
    deleteRestaurantTitle: "Delete {name}?",
    deleteRestaurantMsg: "This removes the restaurant and all its staff.",
    deleteStaffTitle: "Delete {name}?",
    deleteStaffMsg: "This cannot be undone.",
    couldNotDelete: "Could not delete. Please try again.",
    couldNotLoadPhoto: "Could not load that photo. Try another image.",
    couldNotOpenUber: "Could not open Uber. Check the address and try again.",
    call: "Call",
    tags: "Tags",
    noTags: "No tags",
    addCustomTag: "Add custom tag",
    customTagPlaceholder: "e.g. Best terrace",
    filterByTag: "Filter",
    allTags: "All",
    backup: "Backup",
    backupHint: "Automatic iCloud sync is not available for web apps. Export a backup file to iCloud Drive, then import it on another device.",
    exportData: "Export to file",
    importData: "Import from file",
    importConfirmTitle: "Replace all data?",
    importConfirmMsg: "This replaces all restaurants and staff with the backup file. Export first if you need a copy of current data.",
    importConfirm: "Import",
    exportDone: "Backup file downloaded. Save it to iCloud Drive in the Files app.",
    importDone: "Backup imported successfully.",
    importFailed: "Could not import that file. Check that it is a valid backup.",
    pin: "Pin",
    unpin: "Unpin",
    pinned: "Pinned",
    searchStaff: "Search staff…",
    searchModeRestaurants: "Restaurants",
    searchModeStaff: "Staff",
    noStaffMatches: "No staff found",
    staffAt: "at {name}",
    backupReminderTitle: "Time for a backup?",
    backupReminderMsg: "You have not exported a backup in over {n} days. Save one to iCloud Drive to protect your data.",
    backupReminderExport: "Export now",
    backupReminderLater: "Remind me later",
    autoBackup: "Auto-backup",
    autoBackupOff: "Off",
    autoBackupWeekly: "Weekly",
    autoBackupVisit: "After each visit",
    autoBackupHint: "Weekly and visit modes download a backup file automatically. Save to iCloud Drive when prompted.",
    autoBackupDone: "Automatic backup downloaded.",
    link: "Website / Instagram",
    linkPlaceholder: "https://… or instagram.com/…",
    noLink: "No link",
    openLink: "Open link",
    clearTagFilters: "Clear filters",
  },
  sv: {
    addRestaurant: "Lägg till restaurang",
    searchPlaceholder: "Sök restauranger…",
    noRestaurants: "Inga restauranger ännu",
    noMatches: "Inga träffar",
    tapToAdd: "Tryck + för att lägga till din första restaurang.",
    trySearch: "Prova en annan sökning.",
    swipeDeleteRestaurant: "Svep vänster på en restaurang för att radera",
    staffOne: "1 personal",
    staffMany: "{n} personal",
    sortName: "A–Ö",
    sortRecent: "Senaste",
    sortLabel: "Sortera",
    neverVisited: "Aldrig besökt",
    visitedToday: "Idag",
    visitedYesterday: "Igår",
    visitedDaysAgo: "För {n} dagar sedan",
    lastVisit: "Senaste besök",
    logVisit: "Besökt idag",
    visitHistory: "Besökshistorik",
    noVisitsYet: "Inga besök registrerade",
    addPastVisit: "Lägg till tidigare besök",
    visitDate: "Datum",
    addVisit: "Lägg till",
    invalidVisitDate: "Välj ett giltigt datum.",
    futureVisitDate: "Datumet får inte ligga i framtiden.",
    back: "Tillbaka",
    details: "Detaljer",
    address: "Adress",
    noAddress: "Ingen adress",
    addressHint: "Tryck för Kartor eller Uber →",
    note: "Anteckning",
    noNote: "Ingen anteckning",
    editRestaurant: "Redigera restaurang",
    newRestaurant: "Ny restaurang",
    staff: "Personal",
    addStaff: "+ Lägg till personal",
    noStaff: "Ingen personal ännu — tryck på knappen ovan",
    swipeDeleteStaff: "Svep vänster på personal för att radera",
    editStaff: "Redigera personal",
    newStaff: "Ny personal",
    edit: "Redigera",
    delete: "Radera",
    cancel: "Avbryt",
    save: "Spara",
    photo: "Foto",
    addRestaurantPhoto: "Lägg till restaurangfoto",
    addStaffPhoto: "Lägg till personalfoto",
    choosePhoto: "Välj foto",
    remove: "Ta bort",
    name: "Namn",
    restaurantName: "Restaurangnamn",
    restaurantNotePlaceholder: "Bordsönskemål, öppettider, m.m.",
    streetCity: "Gata, stad",
    fullName: "Fullständigt namn",
    phone: "Telefon",
    email: "E-post",
    role: "Roll",
    customRole: "Eller skriv en egen roll",
    shortNote: "Kort anteckning",
    getDirections: "Hitta vägen",
    openMaps: "Öppna i Apple Maps",
    openUber: "Öppna i Uber",
    findingLocation: "Hittar plats…",
    deleteRestaurantTitle: "Radera {name}?",
    deleteRestaurantMsg: "Detta tar bort restaurangen och all personal.",
    deleteStaffTitle: "Radera {name}?",
    deleteStaffMsg: "Detta kan inte ångras.",
    couldNotDelete: "Kunde inte radera. Försök igen.",
    couldNotLoadPhoto: "Kunde inte ladda fotot. Prova en annan bild.",
    couldNotOpenUber: "Kunde inte öppna Uber. Kontrollera adressen och försök igen.",
    call: "Ring",
    tags: "Taggar",
    noTags: "Inga taggar",
    addCustomTag: "Lägg till egen tagg",
    customTagPlaceholder: "t.ex. Bästa terrassen",
    filterByTag: "Filter",
    allTags: "Alla",
    backup: "Säkerhetskopiera",
    backupHint: "Automatisk iCloud-synk finns inte för webbappar. Exportera en säkerhetskopia till iCloud Drive och importera den på en annan enhet.",
    exportData: "Exportera till fil",
    importData: "Importera från fil",
    importConfirmTitle: "Ersätt all data?",
    importConfirmMsg: "Detta ersätter alla restauranger och all personal med säkerhetskopian. Exportera först om du vill behålla nuvarande data.",
    importConfirm: "Importera",
    exportDone: "Säkerhetskopian har laddats ner. Spara den i iCloud Drive i appen Filer.",
    importDone: "Säkerhetskopian har importerats.",
    importFailed: "Kunde inte importera filen. Kontrollera att det är en giltig säkerhetskopia.",
    pin: "Fäst",
    unpin: "Ta bort fästning",
    pinned: "Fäst",
    searchStaff: "Sök personal…",
    searchModeRestaurants: "Restauranger",
    searchModeStaff: "Personal",
    noStaffMatches: "Ingen personal hittades",
    staffAt: "på {name}",
    backupReminderTitle: "Dags att säkerhetskopiera?",
    backupReminderMsg: "Du har inte exporterat en säkerhetskopia på över {n} dagar. Spara en i iCloud Drive för att skydda din data.",
    backupReminderExport: "Exportera nu",
    backupReminderLater: "Påminn mig senare",
    autoBackup: "Automatisk säkerhetskopia",
    autoBackupOff: "Av",
    autoBackupWeekly: "Varje vecka",
    autoBackupVisit: "Efter varje besök",
    autoBackupHint: "Vecko- och besöksläge laddar ner en säkerhetskopia automatiskt. Spara i iCloud Drive när du uppmanas.",
    autoBackupDone: "Automatisk säkerhetskopia har laddats ner.",
    link: "Webbplats / Instagram",
    linkPlaceholder: "https://… eller instagram.com/…",
    noLink: "Ingen länk",
    openLink: "Öppna länk",
    clearTagFilters: "Rensa filter",
  },
};

let lang = localStorage.getItem(LANG_KEY) || "en";
let listSort = localStorage.getItem(SORT_KEY) || "name";
let listMode = localStorage.getItem(LIST_MODE_KEY) || "restaurants";
let listTagFilters = loadTagFilters();
let listSearch = "";
let weeklyAutoExportDoneThisSession = false;

function loadTagFilters() {
  try {
    const raw = localStorage.getItem(TAG_FILTER_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : raw ? [raw] : [];
  } catch {
    const legacy = localStorage.getItem(TAG_FILTER_KEY);
    return legacy ? [legacy] : [];
  }
}

function saveTagFilters() {
  if (listTagFilters.length) {
    localStorage.setItem(TAG_FILTER_KEY, JSON.stringify(listTagFilters));
  } else {
    localStorage.removeItem(TAG_FILTER_KEY);
  }
}

function hapticLight() {
  try {
    if (navigator.vibrate) navigator.vibrate(12);
  } catch {
    /* unsupported */
  }
}

function t(key, params = {}) {
  let text = I18N[lang]?.[key] ?? I18N.en[key] ?? key;
  for (const [k, v] of Object.entries(params)) {
    text = text.replace(`{${k}}`, v);
  }
  return text;
}

function setLang(next) {
  lang = next;
  localStorage.setItem(LANG_KEY, next);
  document.documentElement.lang = next === "sv" ? "sv" : "en";
  render();
}

function setListSort(next) {
  listSort = next;
  localStorage.setItem(SORT_KEY, next);
  renderList();
}

function setListTagFilter(tag) {
  if (!tag) {
    listTagFilters = [];
  } else {
    const idx = listTagFilters.indexOf(tag);
    if (idx >= 0) listTagFilters.splice(idx, 1);
    else listTagFilters.push(tag);
  }
  saveTagFilters();
  renderList();
}

function clearListTagFilters() {
  listTagFilters = [];
  saveTagFilters();
  renderList();
}

function setListMode(next) {
  listMode = next;
  localStorage.setItem(LIST_MODE_KEY, next);
  renderList();
}

function restaurantMatchesTagFilters(r) {
  if (!listTagFilters.length) return true;
  const tags = r.tags || [];
  return listTagFilters.every((tag) => tags.includes(tag));
}

function tagLabel(tag) {
  if (tag.startsWith("custom:")) return tag.slice(7);
  const preset = TAG_PRESETS.find((p) => p.id === tag);
  if (preset) return lang === "sv" ? preset.sv : preset.en;
  return tag;
}

function tagStyleClass(tag) {
  const preset = TAG_PRESETS.find((p) => p.id === tag);
  return preset ? preset.style : "custom";
}

function customTagKey(label) {
  return `custom:${trim(label)}`;
}

function renderTagsHtml(tags, { compact = false } = {}) {
  if (!tags?.length) return "";
  return `<div class="tag-list ${compact ? "tag-list-compact" : ""}">${tags
    .map(
      (tag) =>
        `<span class="tag-chip tag-style-${tagStyleClass(tag)}">${escapeHtml(tagLabel(tag))}</span>`
    )
    .join("")}</div>`;
}

function tagPickerMarkup(selectedTags = []) {
  const selected = new Set(selectedTags);
  return `
    <div class="tag-picker" id="tag-picker">
      <div class="tag-presets">
        ${TAG_PRESETS.map((preset) => {
          const on = selected.has(preset.id);
          return `<button type="button" class="tag-preset-chip ${on ? "selected" : ""}" data-tag="${preset.id}">${escapeHtml(lang === "sv" ? preset.sv : preset.en)}</button>`;
        }).join("")}
      </div>
      <div class="tag-custom-row">
        <input type="text" id="custom-tag-input" placeholder="${escapeHtml(t("customTagPlaceholder"))}" maxlength="40" />
        <button type="button" class="btn btn-secondary tag-custom-add" id="add-custom-tag">${escapeHtml(t("addCustomTag"))}</button>
      </div>
      <div class="tag-selected" id="tag-selected"></div>
    </div>`;
}

function bindTagPicker({ initialTags = [] }) {
  const selected = new Set(initialTags);
  const picker = app.querySelector("#tag-picker");
  const selectedEl = app.querySelector("#tag-selected");
  const customInput = app.querySelector("#custom-tag-input");

  function renderSelected() {
    if (!selectedEl) return;
    if (selected.size === 0) {
      selectedEl.innerHTML = `<span class="tag-empty-hint">${escapeHtml(t("noTags"))}</span>`;
      return;
    }
    selectedEl.innerHTML = [...selected]
      .map(
        (tag) =>
          `<button type="button" class="tag-chip tag-style-${tagStyleClass(tag)} tag-removable" data-remove-tag="${encodeURIComponent(tag)}">${escapeHtml(tagLabel(tag))} ×</button>`
      )
      .join("");
    selectedEl.querySelectorAll("[data-remove-tag]").forEach((btn) => {
      btn.addEventListener("click", () => {
        selected.delete(decodeURIComponent(btn.dataset.removeTag));
        syncPresetChips();
        renderSelected();
      });
    });
  }

  function syncPresetChips() {
    picker?.querySelectorAll(".tag-preset-chip").forEach((chip) => {
      chip.classList.toggle("selected", selected.has(chip.dataset.tag));
    });
  }

  picker?.querySelectorAll(".tag-preset-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const tag = chip.dataset.tag;
      if (selected.has(tag)) selected.delete(tag);
      else selected.add(tag);
      syncPresetChips();
      renderSelected();
    });
  });

  function addCustomTag() {
    const label = trim(customInput?.value || "");
    if (!label) return;
    const key = customTagKey(label);
    selected.add(key);
    if (customInput) customInput.value = "";
    syncPresetChips();
    renderSelected();
  }

  app.querySelector("#add-custom-tag")?.addEventListener("click", addCustomTag);
  customInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addCustomTag();
    }
  });

  syncPresetChips();
  renderSelected();

  return {
    getTags() {
      return [...selected];
    },
  };
}

function collectUsedTags(restaurants) {
  const set = new Set();
  for (const r of restaurants) {
    for (const tag of r.tags || []) set.add(tag);
  }
  return [...set].sort((a, b) => tagLabel(a).localeCompare(tagLabel(b), undefined, { sensitivity: "base" }));
}

function restaurantMatchesSearch(r, query) {
  if (!query) return true;
  const q = query.toLowerCase();
  if (r.name.toLowerCase().includes(q)) return true;
  if ((r.address || "").toLowerCase().includes(q)) return true;
  if ((r.note || "").toLowerCase().includes(q)) return true;
  if ((r.link || "").toLowerCase().includes(q)) return true;
  if ((r.tags || []).some((tag) => tagLabel(tag).toLowerCase().includes(q))) return true;
  return false;
}

async function processImageFile(file) {
  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const maxSize = 480;
      let { width, height } = img;
      if (width > height) {
        if (width > maxSize) {
          height = (height * maxSize) / width;
          width = maxSize;
        }
      } else if (height > maxSize) {
        width = (width * maxSize) / height;
        height = maxSize;
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d").drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", 0.82));
    };
    img.src = dataUrl;
  });
}

function renderRestaurantThumb(image, sizeClass = "") {
  if (image) {
    return `<img class="restaurant-photo ${sizeClass}" src="${image}" alt="" />`;
  }
  return `<div class="restaurant-icon ${sizeClass}">🍽</div>`;
}

function renderStaffAvatar(s) {
  if (s.image) {
    return `<img class="contact-photo" src="${s.image}" alt="" />`;
  }
  return `<div class="contact-avatar">${escapeHtml(getInitials(s.name))}</div>`;
}

function photoPickerMarkup({ previewImage, placeholder, placeholderClass = "" }) {
  return `
    <div class="photo-picker">
      <div class="photo-preview ${placeholderClass}" id="photo-preview" data-placeholder="${escapeHtml(placeholder)}">
        ${
          previewImage
            ? `<img src="${previewImage}" alt="" />`
            : `<span class="photo-placeholder-text">${escapeHtml(placeholder)}</span>`
        }
      </div>
      <div class="photo-actions">
        <label class="btn btn-secondary photo-choose-btn">
          ${escapeHtml(t("choosePhoto"))}
          <input type="file" id="photo-input" accept="image/*" hidden />
        </label>
        <button type="button" class="btn-text danger" id="remove-photo" ${previewImage ? "" : "hidden"}>${escapeHtml(t("remove"))}</button>
      </div>
    </div>`;
}

function bindPhotoPicker({ initialImage }) {
  let imageData = initialImage || null;
  let imageRemoved = false;
  const preview = app.querySelector("#photo-preview");
  const fileInput = app.querySelector("#photo-input");
  const removeBtn = app.querySelector("#remove-photo");
  const placeholder = preview?.dataset.placeholder || "";

  function updatePreview(src) {
    if (!preview) return;
    if (src) {
      preview.innerHTML = `<img src="${src}" alt="" />`;
      if (removeBtn) removeBtn.hidden = false;
    } else {
      preview.innerHTML = `<span class="photo-placeholder-text">${placeholder}</span>`;
      if (removeBtn) removeBtn.hidden = true;
    }
  }

  fileInput?.addEventListener("change", async () => {
    const file = fileInput.files?.[0];
    if (!file) return;
    try {
      imageData = await processImageFile(file);
      imageRemoved = false;
      updatePreview(imageData);
    } catch (err) {
      alert(t("couldNotLoadPhoto"));
    }
    fileInput.value = "";
  });

  removeBtn?.addEventListener("click", () => {
    imageData = null;
    imageRemoved = true;
    updatePreview(null);
  });

  return {
    getImagePayload(existingImage = "") {
      if (imageRemoved) return "";
      if (imageData !== null) return imageData;
      return existingImage;
    },
  };
}

const ROLE_PRESETS = [
  { en: "Manager", sv: "Manager" },
  { en: "GM", sv: "GM" },
  { en: "Server", sv: "Servitör" },
  { en: "Chef", sv: "Kock" },
  { en: "Bartender", sv: "Bartender" },
  { en: "Host", sv: "Värd" },
  { en: "Sommelier", sv: "Sommelier" },
  { en: "Other", sv: "Annat" },
];

function roleLabel(role) {
  const preset = ROLE_PRESETS.find((p) => p.en === role);
  if (preset) return lang === "sv" ? preset.sv : preset.en;
  return role;
}

function rolePresetValues() {
  return ROLE_PRESETS.map((p) => p.en);
}

function formatExternalUrl(url) {
  const u = trim(url);
  if (!u) return "";
  if (/^https?:\/\//i.test(u)) return u;
  return `https://${u}`;
}

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

function normalizeRestaurant(r) {
  return {
    ...r,
    note: r.note || "",
    image: r.image || "",
    link: r.link || "",
    tags: Array.isArray(r.tags) ? r.tags : [],
    pinned: !!r.pinned,
    lastVisitedAt: r.lastVisitedAt || null,
    visits: Array.isArray(r.visits) ? r.visits : [],
  };
}

async function getAllRestaurants() {
  const db = await openDatabase();
  const restaurants = await dbRequest(db.transaction("restaurants").objectStore("restaurants").getAll());
  return restaurants.map(normalizeRestaurant);
}

function sortRestaurants(restaurants, sort) {
  const sortGroup = (group) => {
    const copy = [...group];
    if (sort === "recent") {
      return copy.sort((a, b) => {
        const aTime = a.lastVisitedAt || 0;
        const bTime = b.lastVisitedAt || 0;
        if (bTime !== aTime) return bTime - aTime;
        return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
      });
    }
    return copy.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
  };
  const pinned = restaurants.filter((r) => r.pinned);
  const unpinned = restaurants.filter((r) => !r.pinned);
  return [...sortGroup(pinned), ...sortGroup(unpinned)];
}

async function getRestaurant(id) {
  const db = await openDatabase();
  const restaurant = await dbRequest(db.transaction("restaurants").objectStore("restaurants").get(id));
  return restaurant ? normalizeRestaurant(restaurant) : null;
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
  const restaurant = normalizeRestaurant({
    id: createId(),
    name: data.name,
    address: data.address,
    note: data.note || "",
    image: data.image || "",
    link: data.link || "",
    tags: data.tags || [],
    pinned: !!data.pinned,
    createdAt: Date.now(),
    lastVisitedAt: null,
    visits: [],
  });
  await dbRequest(db.transaction("restaurants", "readwrite").objectStore("restaurants").add(restaurant));
  return restaurant;
}

async function toggleRestaurantPinned(id) {
  const restaurant = await getRestaurant(id);
  if (!restaurant) return;
  await saveRestaurant({ pinned: !restaurant.pinned }, id);
  hapticLight();
}

async function logVisit(id) {
  const restaurant = await getRestaurant(id);
  if (!restaurant) return null;
  const updated = await saveVisits(id, [...restaurant.visits, Date.now()]);
  hapticLight();
  await maybeAutoExport("visit");
  return updated;
}

function computeLastVisitedAt(visits) {
  if (!visits.length) return null;
  return Math.max(...visits);
}

function normalizeVisits(visits) {
  return [...visits].sort((a, b) => a - b).slice(-MAX_VISITS);
}

async function saveVisits(id, visits) {
  const restaurant = await getRestaurant(id);
  if (!restaurant) return null;
  const normalized = normalizeVisits(visits);
  const updated = { ...restaurant, visits: normalized, lastVisitedAt: computeLastVisitedAt(normalized) };
  const db = await openDatabase();
  await dbRequest(db.transaction("restaurants", "readwrite").objectStore("restaurants").put(updated));
  return updated;
}

function todayDateString() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function parseVisitDate(dateStr) {
  if (!trim(dateStr)) return { error: "empty" };
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr);
  if (!match) return { error: "invalid" };
  const [, y, m, d] = match.map(Number);
  const ts = new Date(y, m - 1, d, 12, 0, 0, 0).getTime();
  if (Number.isNaN(ts)) return { error: "invalid" };
  const endOfDay = new Date(y, m - 1, d, 23, 59, 59, 999).getTime();
  if (endOfDay > Date.now()) return { error: "future" };
  return { ts };
}

async function addVisitOnDate(id, dateStr) {
  const parsed = parseVisitDate(dateStr);
  if (parsed.error) return { error: parsed.error };
  const restaurant = await getRestaurant(id);
  if (!restaurant) return { error: "notfound" };
  const updated = await saveVisits(id, [...restaurant.visits, parsed.ts]);
  await maybeAutoExport("visit");
  return { restaurant: updated };
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

async function getAllStaff() {
  const db = await openDatabase();
  return dbRequest(db.transaction("staff").objectStore("staff").getAll());
}

async function exportAllData({ silent = false, auto = false } = {}) {
  const restaurants = await getAllRestaurants();
  const staff = await getAllStaff();
  const payload = {
    app: "restaurant-crm",
    version: 1,
    exportedAt: new Date().toISOString(),
    restaurants,
    staff,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `restaurant-crm-backup-${todayDateString()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  const now = Date.now();
  localStorage.setItem(LAST_EXPORT_KEY, String(now));
  if (auto) localStorage.setItem(LAST_AUTO_EXPORT_KEY, String(now));
  if (silent) {
    if (auto) alert(t("autoBackupDone"));
  } else {
    alert(t("exportDone"));
  }
}

async function maybeAutoExport(trigger) {
  const mode = localStorage.getItem(AUTO_BACKUP_KEY) || "off";
  if (trigger === "visit" && mode === "visit") {
    await exportAllData({ silent: true, auto: true });
  }
}

async function checkWeeklyAutoBackup() {
  const mode = localStorage.getItem(AUTO_BACKUP_KEY) || "off";
  if (mode !== "weekly" || weeklyAutoExportDoneThisSession) return;
  const last = parseInt(localStorage.getItem(LAST_AUTO_EXPORT_KEY) || "0", 10);
  if (Date.now() - last < 7 * 86400000) return;
  weeklyAutoExportDoneThisSession = true;
  await exportAllData({ silent: true, auto: true });
}

function shouldShowBackupReminder() {
  const dismissed = parseInt(localStorage.getItem(BACKUP_REMINDER_DISMISSED_KEY) || "0", 10);
  if (Date.now() - dismissed < 7 * 86400000) return false;
  const lastExport = parseInt(localStorage.getItem(LAST_EXPORT_KEY) || "0", 10);
  const threshold = BACKUP_REMINDER_DAYS * 86400000;
  if (lastExport) return Date.now() - lastExport >= threshold;
  const firstUse = parseInt(localStorage.getItem("restaurant-crm-first-use") || "0", 10);
  if (!firstUse) {
    localStorage.setItem("restaurant-crm-first-use", String(Date.now()));
    return false;
  }
  return Date.now() - firstUse >= threshold;
}

function showBackupReminder() {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <h2>${escapeHtml(t("backupReminderTitle"))}</h2>
      <p class="modal-text">${escapeHtml(t("backupReminderMsg", { n: BACKUP_REMINDER_DAYS }))}</p>
      <div class="modal-actions">
        <button class="btn btn-secondary modal-btn" id="reminder-later" type="button">${escapeHtml(t("backupReminderLater"))}</button>
        <button class="btn btn-primary modal-btn" id="reminder-export" type="button">${escapeHtml(t("backupReminderExport"))}</button>
      </div>
    </div>
  `;
  const modal = overlay.querySelector(".modal");
  const close = () => {
    overlay.remove();
    document.body.style.overflow = "";
  };
  document.body.style.overflow = "hidden";
  document.body.appendChild(overlay);
  modal.addEventListener("click", (e) => e.stopPropagation());
  overlay.querySelector("#reminder-later").addEventListener("click", () => {
    localStorage.setItem(BACKUP_REMINDER_DISMISSED_KEY, String(Date.now()));
    close();
  });
  overlay.querySelector("#reminder-export").addEventListener("click", async () => {
    localStorage.setItem(BACKUP_REMINDER_DISMISSED_KEY, String(Date.now()));
    await exportAllData();
    close();
  });
}

function setAutoBackup(mode) {
  localStorage.setItem(AUTO_BACKUP_KEY, mode);
  renderList();
}

async function searchStaffGlobally(query) {
  const q = query.toLowerCase();
  if (!q) return [];
  const [staff, restaurants] = await Promise.all([getAllStaff(), getAllRestaurants()]);
  const byId = Object.fromEntries(restaurants.map((r) => [r.id, r]));
  return staff
    .filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        (s.role || "").toLowerCase().includes(q) ||
        roleLabel(s.role).toLowerCase().includes(q) ||
        (s.note || "").toLowerCase().includes(q) ||
        (s.phone || "").toLowerCase().includes(q) ||
        (s.email || "").toLowerCase().includes(q)
    )
    .map((s) => ({ ...s, restaurant: byId[s.restaurantId] }))
    .filter((s) => s.restaurant)
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
}

async function importAllData(file) {
  const text = await file.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("invalid json");
  }
  if (!data || !Array.isArray(data.restaurants) || !Array.isArray(data.staff)) {
    throw new Error("invalid format");
  }

  const db = await openDatabase();
  await new Promise((resolve, reject) => {
    const tx = db.transaction(["restaurants", "staff"], "readwrite");
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
    tx.oncomplete = () => resolve();
    const restaurantStore = tx.objectStore("restaurants");
    const staffStore = tx.objectStore("staff");
    restaurantStore.clear();
    staffStore.clear();
    for (const r of data.restaurants) {
      restaurantStore.add(normalizeRestaurant(r));
    }
    for (const s of data.staff) {
      staffStore.add(s);
    }
  });
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
    image: data.image || "",
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
      <h2>${escapeHtml(t("getDirections"))}</h2>
      <p class="modal-text">${escapeHtml(destination)}</p>
      <div class="nav-actions">
        <button class="btn btn-primary full-width nav-btn" id="open-maps" type="button">${escapeHtml(t("openMaps"))}</button>
        <button class="btn btn-secondary full-width nav-btn uber-btn" id="open-uber" type="button">${escapeHtml(t("openUber"))}</button>
        <button class="btn btn-secondary full-width nav-btn" id="nav-cancel" type="button">${escapeHtml(t("cancel"))}</button>
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
    uberBtn.textContent = t("findingLocation");
    try {
      await openUber(destination, restaurant.name);
      close();
    } catch (err) {
      uberBtn.disabled = false;
      uberBtn.textContent = t("openUber");
      alert(t("couldNotOpenUber"));
    }
  });

  overlay.querySelector("#nav-cancel").addEventListener("click", close);
}

function versionBadge() {
  return `<span class="version-badge">${APP_VERSION}</span>`;
}

function langSelectMarkup() {
  return `
    <select class="lang-select" id="lang-select" aria-label="Language">
      <option value="en" ${lang === "en" ? "selected" : ""}>ENG</option>
      <option value="sv" ${lang === "sv" ? "selected" : ""}>SV</option>
    </select>`;
}

function headerMeta() {
  return `<span class="header-meta">${versionBadge()}${langSelectMarkup()}</span>`;
}

function bindLangSelect() {
  const select = app.querySelector("#lang-select");
  if (!select) return;
  select.addEventListener("change", () => setLang(select.value));
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

function formatRelativeVisit(ts) {
  if (!ts) return t("neverVisited");
  const days = Math.floor((Date.now() - ts) / 86400000);
  if (days <= 0) return t("visitedToday");
  if (days === 1) return t("visitedYesterday");
  return t("visitedDaysAgo", { n: days });
}

function formatVisitDate(ts) {
  const locale = lang === "sv" ? "sv-SE" : "en-GB";
  return new Date(ts).toLocaleDateString(locale, {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function staffLabel(count) {
  return count === 1 ? t("staffOne") : t("staffMany", { n: count });
}

function renderStaffCard(s) {
  const phone = s.phone ? trim(s.phone) : "";
  const email = s.email ? trim(s.email) : "";
  return `
    <div class="contact-card">
      ${renderStaffAvatar(s)}
      <div class="contact-body">
        <div class="contact-header">
          <span class="contact-name">${escapeHtml(s.name)}</span>
          <span class="role-badge ${getRoleBadgeClass(s.role)}">${escapeHtml(roleLabel(s.role))}</span>
          ${
            phone
              ? `<a class="call-btn" href="tel:${formatPhoneLink(phone)}" aria-label="${escapeHtml(t("call"))}" title="${escapeHtml(t("call"))}">📞</a>`
              : ""
          }
        </div>
        ${phone ? `<a class="contact-link" href="tel:${formatPhoneLink(phone)}">${escapeHtml(phone)}</a>` : ""}
        ${email ? `<a class="contact-link" href="mailto:${encodeURIComponent(email)}">${escapeHtml(email)}</a>` : ""}
        ${s.note ? `<p class="contact-note">${escapeHtml(s.note)}</p>` : ""}
        <div class="contact-actions">
          <button class="btn-text edit-staff-btn" type="button" data-id="${s.id}">${escapeHtml(t("edit"))}</button>
        </div>
      </div>
    </div>`;
}

function wrapSwipeRow(contentHtml) {
  return `
    <div class="swipe-row">
      <div class="swipe-behind">
        <button class="swipe-delete-btn" type="button">${escapeHtml(t("delete"))}</button>
      </div>
      <div class="swipe-front">${contentHtml}</div>
    </div>`;
}

let openSwipeRow = null;

function closeAllSwipes() {
  document.querySelectorAll(".swipe-row.open").forEach((row) => {
    row.classList.remove("open");
    const front = row.querySelector(".swipe-front");
    if (front) front.style.transform = "";
  });
  openSwipeRow = null;
}

function bindSwipeRow(row, { onTap, onDelete }) {
  const front = row.querySelector(".swipe-front");
  const deleteBtn = row.querySelector(".swipe-delete-btn");
  if (!front || !deleteBtn) return;

  let startX = 0;
  let baseOffset = 0;
  let dragging = false;

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeAllSwipes();
    hapticLight();
    onDelete();
  });

  front.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length !== 1) return;
      if (openSwipeRow && openSwipeRow !== row) closeAllSwipes();
      startX = e.touches[0].clientX;
      baseOffset = row.classList.contains("open") ? -SWIPE_DELETE_WIDTH : 0;
      dragging = true;
    },
    { passive: true }
  );

  front.addEventListener(
    "touchmove",
    (e) => {
      if (!dragging) return;
      const delta = e.touches[0].clientX - startX;
      let offset = baseOffset + delta;
      if (offset > 0) offset = 0;
      if (offset < -SWIPE_DELETE_WIDTH) offset = -SWIPE_DELETE_WIDTH;
      front.style.transform = `translateX(${offset}px)`;
    },
    { passive: true }
  );

  front.addEventListener("touchend", () => {
    if (!dragging) return;
    dragging = false;
    const match = front.style.transform.match(/-?\d+/);
    const offset = match ? parseInt(match[0], 10) : 0;

    if (offset < -SWIPE_DELETE_WIDTH / 2) {
      closeAllSwipes();
      row.classList.add("open");
      front.style.transform = `translateX(-${SWIPE_DELETE_WIDTH}px)`;
      openSwipeRow = row;
    } else {
      row.classList.remove("open");
      front.style.transform = "";
      if (openSwipeRow === row) openSwipeRow = null;
    }
  });

  front.addEventListener("click", (e) => {
    if (row.classList.contains("open")) {
      e.preventDefault();
      e.stopPropagation();
      closeAllSwipes();
      return;
    }
    if (e.target.closest("a, .edit-staff-btn, .contact-link, .call-btn, .pin-btn, .staff-search-card")) return;
    if (onTap) onTap(e);
  });
}

if (!window._swipeDocBound) {
  document.addEventListener("touchstart", (e) => {
    if (!openSwipeRow) return;
    if (!openSwipeRow.contains(e.target)) closeAllSwipes();
  });
  window._swipeDocBound = true;
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
  await checkWeeklyAutoBackup();

  const allRestaurants = await getAllRestaurants();
  const autoBackupMode = localStorage.getItem(AUTO_BACKUP_KEY) || "off";
  const isStaffMode = listMode === "staff";
  const query = listSearch.toLowerCase();

  let listBodyHtml = "";
  if (isStaffMode) {
    const staffResults = await searchStaffGlobally(listSearch);
    listBodyHtml =
      staffResults.length === 0
        ? `
        <div class="empty-state">
          <div class="icon">👤</div>
          <h2>${escapeHtml(t("noStaffMatches"))}</h2>
          <p>${escapeHtml(t("trySearch"))}</p>
        </div>`
        : `
        <ul class="list staff-search-list">
          ${staffResults
            .map(
              (s) => `
            <li>
              <button type="button" class="staff-search-card" data-restaurant-id="${s.restaurantId}">
                ${renderStaffAvatar(s)}
                <div class="info">
                  <div class="title">${escapeHtml(s.name)}</div>
                  <div class="subtitle">${escapeHtml(roleLabel(s.role))} · ${escapeHtml(t("staffAt", { name: s.restaurant.name }))}</div>
                </div>
                <span class="chevron">›</span>
              </button>
            </li>`
            )
            .join("")}
        </ul>`;
  } else {
    const restaurants = sortRestaurants(allRestaurants, listSort);
    let filtered = restaurants.filter((r) => restaurantMatchesSearch(r, query));
    filtered = filtered.filter((r) => restaurantMatchesTagFilters(r));
    const usedTags = collectUsedTags(allRestaurants);
    const counts = await Promise.all(filtered.map((r) => getStaffCount(r.id)));

    const tagFilterHtml = usedTags.length
      ? `
      <div class="tag-filter-row">
        <div class="tag-filter-header">
          <span class="sort-label">${escapeHtml(t("filterByTag"))}</span>
          ${listTagFilters.length ? `<button type="button" class="btn-text tag-clear-btn" id="clear-tag-filters">${escapeHtml(t("clearTagFilters"))}</button>` : ""}
        </div>
        <div class="tag-filter-scroll">
          ${usedTags
            .map(
              (tag) =>
                `<button type="button" class="tag-filter-chip tag-style-${tagStyleClass(tag)} ${listTagFilters.includes(tag) ? "selected" : ""}" data-tag-filter="${escapeHtml(tag)}">${escapeHtml(tagLabel(tag))}</button>`
            )
            .join("")}
        </div>
      </div>`
      : "";

    listBodyHtml =
      filtered.length === 0
        ? `
        <div class="empty-state">
          <div class="icon">🍽️</div>
          <h2>${allRestaurants.length === 0 ? escapeHtml(t("noRestaurants")) : escapeHtml(t("noMatches"))}</h2>
          <p>${allRestaurants.length === 0 ? escapeHtml(t("tapToAdd")) : escapeHtml(t("trySearch"))}</p>
        </div>`
        : `
        ${tagFilterHtml}
        <ul class="list">
          ${filtered
            .map(
              (r, i) => `
            <li>
              ${wrapSwipeRow(`
                <div class="restaurant-card ${r.pinned ? "is-pinned" : ""}" data-id="${r.id}">
                  ${renderRestaurantThumb(r.image)}
                  <div class="info">
                    <div class="title">${r.pinned ? '<span class="pin-indicator">★</span> ' : ""}${escapeHtml(r.name)}</div>
                    ${renderTagsHtml(r.tags, { compact: true })}
                    <div class="subtitle">${r.address ? escapeHtml(r.address) + " · " : ""}${staffLabel(counts[i])}${r.lastVisitedAt ? " · " + escapeHtml(formatRelativeVisit(r.lastVisitedAt)) : ""}</div>
                  </div>
                  <button type="button" class="pin-btn ${r.pinned ? "pinned" : ""}" data-pin-id="${r.id}" aria-label="${escapeHtml(r.pinned ? t("unpin") : t("pin"))}">★</button>
                  <span class="chevron">›</span>
                </div>
              `)}
            </li>`
            )
            .join("")}
        </ul>
        <p class="swipe-hint">${escapeHtml(t("swipeDeleteRestaurant"))}</p>`;
  }

  app.innerHTML = `
    <header class="header">
      <h1>${APP_NAME} ${headerMeta()}</h1>
      <button class="icon-btn" id="add-btn" type="button" aria-label="${escapeHtml(t("addRestaurant"))}">+</button>
    </header>
    <main class="content">
      <div class="search-mode-row">
        <button type="button" class="search-mode-chip ${listMode === "restaurants" ? "selected" : ""}" data-list-mode="restaurants">${escapeHtml(t("searchModeRestaurants"))}</button>
        <button type="button" class="search-mode-chip ${listMode === "staff" ? "selected" : ""}" data-list-mode="staff">${escapeHtml(t("searchModeStaff"))}</button>
      </div>
      <div class="search-box">
        <input id="search-input" type="search" placeholder="${escapeHtml(isStaffMode ? t("searchStaff") : t("searchPlaceholder"))}" value="${escapeHtml(listSearch)}" />
      </div>
      ${
        !isStaffMode
          ? `
      <div class="sort-row">
        <span class="sort-label">${escapeHtml(t("sortLabel"))}</span>
        <div class="sort-options">
          <button type="button" class="sort-chip ${listSort === "name" ? "selected" : ""}" data-sort="name">${escapeHtml(t("sortName"))}</button>
          <button type="button" class="sort-chip ${listSort === "recent" ? "selected" : ""}" data-sort="recent">${escapeHtml(t("sortRecent"))}</button>
        </div>
      </div>`
          : ""
      }
      ${listBodyHtml}

      <div class="section data-section">
        <div class="section-title">${escapeHtml(t("backup"))}</div>
        <p class="data-hint">${escapeHtml(t("backupHint"))}</p>
        <button class="btn btn-secondary full-width" id="export-btn" type="button">${escapeHtml(t("exportData"))}</button>
        <label class="btn btn-secondary full-width import-label">
          ${escapeHtml(t("importData"))}
          <input type="file" id="import-input" accept=".json,application/json" hidden />
        </label>
        <div class="auto-backup-block">
          <span class="sort-label">${escapeHtml(t("autoBackup"))}</span>
          <div class="sort-options auto-backup-options">
            <button type="button" class="sort-chip ${autoBackupMode === "off" ? "selected" : ""}" data-auto-backup="off">${escapeHtml(t("autoBackupOff"))}</button>
            <button type="button" class="sort-chip ${autoBackupMode === "weekly" ? "selected" : ""}" data-auto-backup="weekly">${escapeHtml(t("autoBackupWeekly"))}</button>
            <button type="button" class="sort-chip ${autoBackupMode === "visit" ? "selected" : ""}" data-auto-backup="visit">${escapeHtml(t("autoBackupVisit"))}</button>
          </div>
          <p class="data-hint auto-backup-hint">${escapeHtml(t("autoBackupHint"))}</p>
        </div>
      </div>
    </main>
  `;

  bindLangSelect();
  app.querySelector("#add-btn").addEventListener("click", () => navigate({ view: "add-restaurant" }));

  const searchInput = app.querySelector("#search-input");
  searchInput.addEventListener("input", () => {
    listSearch = searchInput.value;
    renderList();
  });

  app.querySelectorAll(".search-mode-chip").forEach((chip) => {
    chip.addEventListener("click", () => setListMode(chip.dataset.listMode));
  });

  app.querySelectorAll(".sort-chip[data-sort]").forEach((chip) => {
    chip.addEventListener("click", () => setListSort(chip.dataset.sort));
  });

  app.querySelectorAll(".tag-filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => setListTagFilter(chip.dataset.tagFilter));
  });

  app.querySelector("#clear-tag-filters")?.addEventListener("click", clearListTagFilters);

  app.querySelectorAll(".pin-btn").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      await toggleRestaurantPinned(btn.dataset.pinId);
      await renderList();
    });
  });

  app.querySelectorAll(".staff-search-card").forEach((card) => {
    card.addEventListener("click", () => navigate({ view: "detail", id: card.dataset.restaurantId }));
  });

  app.querySelectorAll("[data-auto-backup]").forEach((chip) => {
    chip.addEventListener("click", () => setAutoBackup(chip.dataset.autoBackup));
  });

  app.querySelector("#export-btn")?.addEventListener("click", () => exportAllData());

  const importInput = app.querySelector("#import-input");
  importInput?.addEventListener("change", async () => {
    const file = importInput.files?.[0];
    importInput.value = "";
    if (!file) return;
    confirmDelete(t("importConfirmTitle"), t("importConfirmMsg"), async () => {
      try {
        await importAllData(file);
        listSearch = "";
        listTagFilters = [];
        localStorage.removeItem(TAG_FILTER_KEY);
        alert(t("importDone"));
        await renderList();
      } catch (err) {
        alert(t("importFailed"));
        console.error(err);
      }
    }, t("importConfirm"));
  });

  if (!isStaffMode) {
    app.querySelectorAll(".list .swipe-row").forEach((row) => {
      const card = row.querySelector(".restaurant-card");
      if (!card) return;
      const id = card.dataset.id;
      bindSwipeRow(row, {
        onTap: () => navigate({ view: "detail", id }),
        onDelete: async () => {
          const restaurant = await getRestaurant(id);
          if (!restaurant) return;
          confirmDelete(
            t("deleteRestaurantTitle", { name: restaurant.name }),
            t("deleteRestaurantMsg"),
            async () => {
              await deleteRestaurant(restaurant.id);
              await renderList();
            }
          );
        },
      });
    });
  }

  if (shouldShowBackupReminder()) {
    showBackupReminder();
  }
}

async function renderDetail(id) {
  const restaurant = await getRestaurant(id);
  if (!restaurant) {
    navigate({ view: "list" });
    return;
  }

  const staff = await getStaffForRestaurant(id);
  const sortedVisits = [...restaurant.visits].sort((a, b) => b - a);

  app.innerHTML = `
    <header class="header header-minimal">
      <button class="back-btn" id="back-btn" type="button" aria-label="${escapeHtml(t("back"))}">‹</button>
      <h1>${headerMeta()}</h1>
    </header>
    <main class="content">
      <div class="detail-hero">
        ${renderRestaurantThumb(restaurant.image, "detail-photo")}
        <h2 class="detail-title">${escapeHtml(restaurant.name)}</h2>
        ${renderTagsHtml(restaurant.tags)}
        <button type="button" class="pin-btn pin-btn-large ${restaurant.pinned ? "pinned" : ""}" id="toggle-pin-btn" aria-label="${escapeHtml(restaurant.pinned ? t("unpin") : t("pin"))}">
          ★ ${escapeHtml(restaurant.pinned ? t("pinned") : t("pin"))}
        </button>
      </div>

      <div class="section">
        <div class="section-title">${escapeHtml(t("details"))}</div>
        <div class="card">
          ${
            restaurant.address
              ? `
          <button class="address-btn" id="address-nav" type="button">
            <span class="label">${escapeHtml(t("address"))}</span>
            <span class="address-value">${escapeHtml(restaurant.address)}</span>
            <span class="address-hint">${escapeHtml(t("addressHint"))}</span>
          </button>`
              : `
          <div class="card-row">
            <span class="label">${escapeHtml(t("address"))}</span>
            <span class="value muted">${escapeHtml(t("noAddress"))}</span>
          </div>`
          }
          ${
            restaurant.note
              ? `
          <div class="note-block">
            <span class="label">${escapeHtml(t("note"))}</span>
            <p class="restaurant-note">${escapeHtml(restaurant.note)}</p>
          </div>`
              : `
          <div class="card-row">
            <span class="label">${escapeHtml(t("note"))}</span>
            <span class="value muted">${escapeHtml(t("noNote"))}</span>
          </div>`
          }
          ${
            restaurant.link
              ? `
          <a class="link-row" href="${escapeHtml(formatExternalUrl(restaurant.link))}" target="_blank" rel="noopener noreferrer">
            <span class="label">${escapeHtml(t("link"))}</span>
            <span class="link-value">${escapeHtml(restaurant.link)}</span>
          </a>`
              : `
          <div class="card-row">
            <span class="label">${escapeHtml(t("link"))}</span>
            <span class="value muted">${escapeHtml(t("noLink"))}</span>
          </div>`
          }
        </div>
        <button class="btn btn-secondary full-width" id="edit-restaurant-btn" type="button">${escapeHtml(t("editRestaurant"))}</button>
      </div>

      <div class="section">
        <div class="section-title">${escapeHtml(t("staff"))}</div>
        <button class="btn btn-primary full-width" id="add-staff-btn" type="button">${escapeHtml(t("addStaff"))}</button>
        ${
          staff.length === 0
            ? `<div class="empty-card">${escapeHtml(t("noStaff"))}</div>`
            : `<div class="staff-list">${staff
                .map((s) => wrapSwipeRow(renderStaffCard(s)))
                .join("")}</div>
               <p class="swipe-hint">${escapeHtml(t("swipeDeleteStaff"))}</p>`
        }
      </div>

      <div class="section">
        <div class="section-title">${escapeHtml(t("lastVisit"))}</div>
        <div class="card visit-card">
          <div class="visit-summary">
            <span class="visit-when">${escapeHtml(formatRelativeVisit(restaurant.lastVisitedAt))}</span>
          </div>
          <button class="btn btn-primary full-width" id="log-visit-btn" type="button">${escapeHtml(t("logVisit"))}</button>
          <div class="visit-add-past">
            <div class="visit-add-label">${escapeHtml(t("addPastVisit"))}</div>
            <div class="visit-add-row">
              <input type="date" id="visit-date-input" max="${todayDateString()}" aria-label="${escapeHtml(t("visitDate"))}" />
              <button class="btn btn-secondary visit-add-btn" id="add-visit-date-btn" type="button">${escapeHtml(t("addVisit"))}</button>
            </div>
          </div>
          ${
            sortedVisits.length
              ? `
          <div class="visit-history">
            <div class="visit-history-title">${escapeHtml(t("visitHistory"))}</div>
            <ul class="visit-list">
              ${sortedVisits.map((ts) => `<li>${escapeHtml(formatVisitDate(ts))}</li>`).join("")}
            </ul>
          </div>`
              : `<p class="visit-empty">${escapeHtml(t("noVisitsYet"))}</p>`
          }
        </div>
      </div>
    </main>
  `;

  bindLangSelect();
  app.querySelector("#back-btn").addEventListener("click", () => navigate({ view: "list" }));
  app.querySelector("#toggle-pin-btn")?.addEventListener("click", async () => {
    await toggleRestaurantPinned(id);
    await renderDetail(id);
  });
  app.querySelector("#edit-restaurant-btn").addEventListener("click", () => navigate({ view: "edit-restaurant", id }));
  app.querySelector("#add-staff-btn").addEventListener("click", () => navigate({ view: "add-staff", restaurantId: id }));
  app.querySelector("#log-visit-btn").addEventListener("click", async () => {
    await logVisit(id);
    await renderDetail(id);
  });

  app.querySelector("#add-visit-date-btn").addEventListener("click", async () => {
    const dateInput = app.querySelector("#visit-date-input");
    const result = await addVisitOnDate(id, dateInput?.value || "");
    if (result.error === "future") {
      alert(t("futureVisitDate"));
      return;
    }
    if (result.error === "empty" || result.error === "invalid") {
      alert(t("invalidVisitDate"));
      return;
    }
    if (result.error) return;
    await renderDetail(id);
  });

  const addressNav = app.querySelector("#address-nav");
  if (addressNav) {
    addressNav.addEventListener("click", () => showNavigationPicker(restaurant));
  }

  app.querySelectorAll(".staff-list .swipe-row").forEach((row) => {
    const staffId = row.querySelector(".edit-staff-btn")?.dataset.id;
    if (!staffId) return;
    bindSwipeRow(row, {
      onDelete: () => {
        const member = staff.find((s) => s.id === staffId);
        confirmDelete(
          t("deleteStaffTitle", { name: member ? member.name : "staff" }),
          t("deleteStaffMsg"),
          async () => {
            await deleteStaff(staffId);
            await renderDetail(id);
          }
        );
      },
    });
  });

  app.querySelectorAll(".edit-staff-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigate({ view: "edit-staff", restaurantId: id, staffId: btn.dataset.id });
    });
  });
}

async function renderRestaurantForm(editId) {
  const isEdit = !!editId;
  let name = "";
  let address = "";
  let note = "";
  let image = "";
  let link = "";
  let tags = [];

  if (editId) {
    const restaurant = await getRestaurant(editId);
    if (!restaurant) {
      navigate({ view: "list" });
      return;
    }
    name = restaurant.name;
    address = restaurant.address;
    note = restaurant.note || "";
    image = restaurant.image || "";
    link = restaurant.link || "";
    tags = restaurant.tags || [];
  }

  app.innerHTML = `
    <header class="header">
      <button class="back-btn" id="cancel-btn" type="button" aria-label="${escapeHtml(t("cancel"))}">‹</button>
      <h1>${isEdit ? escapeHtml(t("editRestaurant")) : escapeHtml(t("newRestaurant"))} ${headerMeta()}</h1>
    </header>
    <main class="content">
      <form class="form" id="restaurant-form">
        <div class="field">
          <label>${escapeHtml(t("photo"))}</label>
          ${photoPickerMarkup({
            previewImage: image,
            placeholder: t("addRestaurantPhoto"),
            placeholderClass: "restaurant-photo-preview",
          })}
        </div>
        <div class="field">
          <label for="name">${escapeHtml(t("name"))}</label>
          <input id="name" type="text" value="${escapeHtml(name)}" placeholder="${escapeHtml(t("restaurantName"))}" required />
        </div>
        <div class="field">
          <label for="address">${escapeHtml(t("address"))}</label>
          <textarea id="address" placeholder="${escapeHtml(t("streetCity"))}">${escapeHtml(address)}</textarea>
        </div>
        <div class="field">
          <label for="link">${escapeHtml(t("link"))}</label>
          <input id="link" type="url" inputmode="url" value="${escapeHtml(link)}" placeholder="${escapeHtml(t("linkPlaceholder"))}" />
        </div>
        <div class="field">
          <label for="note">${escapeHtml(t("note"))}</label>
          <textarea id="note" placeholder="${escapeHtml(t("restaurantNotePlaceholder"))}">${escapeHtml(note)}</textarea>
        </div>
        <div class="field">
          <label>${escapeHtml(t("tags"))}</label>
          ${tagPickerMarkup(tags)}
        </div>
        <div class="form-actions">
          <button type="button" class="btn btn-secondary" id="cancel-form">${escapeHtml(t("cancel"))}</button>
          <button type="submit" class="btn btn-primary" id="save-btn" disabled>${escapeHtml(t("save"))}</button>
        </div>
      </form>
    </main>
  `;

  bindLangSelect();
  const nameInput = app.querySelector("#name");
  const addressInput = app.querySelector("#address");
  const linkInput = app.querySelector("#link");
  const noteInput = app.querySelector("#note");
  const saveBtn = app.querySelector("#save-btn");
  const photoPicker = bindPhotoPicker({ initialImage: image });
  const tagPicker = bindTagPicker({ initialTags: tags });

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
      {
        name: trim(nameInput.value),
        address: trim(addressInput.value),
        link: trim(linkInput.value),
        note: trim(noteInput.value),
        image: photoPicker.getImagePayload(image),
        tags: tagPicker.getTags(),
      },
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
  let image = "";

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
    image = member.image || "";
  }

  app.innerHTML = `
    <header class="header">
      <button class="back-btn" id="cancel-btn" type="button" aria-label="${escapeHtml(t("cancel"))}">‹</button>
      <h1>${isEdit ? escapeHtml(t("editStaff")) : escapeHtml(t("newStaff"))} ${headerMeta()}</h1>
    </header>
    <main class="content">
      <form class="form" id="staff-form">
        <div class="field">
          <label>${escapeHtml(t("photo"))}</label>
          ${photoPickerMarkup({
            previewImage: image,
            placeholder: t("addStaffPhoto"),
            placeholderClass: "staff-photo-preview",
          })}
        </div>
        <div class="form-section">
          <div class="field">
            <label for="name">${escapeHtml(t("name"))}</label>
            <input id="name" type="text" value="${escapeHtml(name)}" placeholder="${escapeHtml(t("fullName"))}" required />
          </div>
          <div class="field">
            <label for="phone">${escapeHtml(t("phone"))}</label>
            <input id="phone" type="tel" value="${escapeHtml(phone)}" placeholder="+46 70 123 45 67" />
          </div>
          <div class="field">
            <label for="email">${escapeHtml(t("email"))}</label>
            <input id="email" type="email" value="${escapeHtml(email)}" placeholder="name@example.com" />
          </div>
        </div>
        <div class="field">
          <label for="role">${escapeHtml(t("role"))}</label>
          <div class="role-presets" id="role-presets">
            ${ROLE_PRESETS.map(
              (preset) =>
                `<button type="button" class="preset-chip" data-role="${preset.en}">${escapeHtml(lang === "sv" ? preset.sv : preset.en)}</button>`
            ).join("")}
          </div>
          <input id="role" type="text" value="${escapeHtml(role)}" placeholder="${escapeHtml(t("customRole"))}" required />
        </div>
        <div class="field">
          <label for="note">${escapeHtml(t("note"))}</label>
          <textarea id="note" placeholder="${escapeHtml(t("shortNote"))}">${escapeHtml(note)}</textarea>
        </div>
        <div class="form-actions">
          <button type="button" class="btn btn-secondary" id="cancel-form">${escapeHtml(t("cancel"))}</button>
          <button type="submit" class="btn btn-primary" id="save-btn" disabled>${escapeHtml(t("save"))}</button>
        </div>
      </form>
    </main>
  `;

  bindLangSelect();
  const nameInput = app.querySelector("#name");
  const roleInput = app.querySelector("#role");
  const noteInput = app.querySelector("#note");
  const phoneInput = app.querySelector("#phone");
  const emailInput = app.querySelector("#email");
  const saveBtn = app.querySelector("#save-btn");
  const photoPicker = bindPhotoPicker({ initialImage: image });

  function updatePresetHighlight() {
    const current = trim(roleInput.value);
    const presetValues = rolePresetValues();
    app.querySelectorAll(".preset-chip").forEach((chip) => {
      const preset = chip.dataset.role;
      const isMatch =
        preset === "Other"
          ? current !== "" && !presetValues.slice(0, -1).includes(current)
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
        image: photoPicker.getImagePayload(image),
      },
      editStaffId
    );
    navigate({ view: "detail", id: restaurantId });
  });
}

function confirmDelete(title, message, onConfirm, confirmLabel) {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <h2>${escapeHtml(title)}</h2>
      <p class="modal-text">${escapeHtml(message)}</p>
      <div class="modal-actions">
        <button class="btn btn-secondary modal-btn" id="modal-cancel" type="button">${escapeHtml(t("cancel"))}</button>
        <button class="btn btn-delete modal-btn" id="modal-confirm" type="button">${escapeHtml(confirmLabel || t("delete"))}</button>
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
      alert(t("couldNotDelete"));
      console.error(err);
    }
  }

  document.body.style.overflow = "hidden";
  document.body.appendChild(overlay);

  modal.addEventListener("click", (e) => e.stopPropagation());

  overlay.querySelector("#modal-cancel").addEventListener("click", close);
  overlay.querySelector("#modal-confirm").addEventListener("click", runDelete);
}

document.documentElement.lang = lang === "sv" ? "sv" : "en";
render();
