/* Nordic Michelin starter list — parsed from embedded CSV. */

const NORDIC_MICHELIN_CSV = `Name,Stars,City,Country,Address,PostalCode,Phone,Notes
Frantzén,3,Stockholm,Sweden,Klara Norra Kyrkogata 26,111 22,+46 8 20 85 80,Original request
Aira,2,Stockholm,Sweden,Biskopsvägen 9,115 21,+46 8 4800 4900,Original request
Brasserie Astoria,0,Stockholm,Sweden,Nybrogatan 15,114 39,+46 8 20 85 81,Original request (not starred)
FZN Dubai,3,Dubai,United Arab Emirates,"Atlantis The Palm, Crescent Road, The Palm Jumeirah",,Contact via restaurant site,Original request (Dubai)
Geranium,3,Copenhagen,Denmark,,,+45 contact via Michelin,3★
Jordnær,3,Gentofte,Denmark,,,+45 contact via Michelin,3★
Kadeau Copenhagen,3,Copenhagen,Denmark,,,+45 contact via Michelin,New promotion to 3★ 2026
a|o|c,2,Copenhagen,Denmark,,,+45 contact via Michelin,2★
Alchemist,2,Copenhagen,Denmark,,,+45 contact via Michelin,2★
Frederikshøj,2,Aarhus,Denmark,,,+45 contact via Michelin,2★
Henne Kirkeby Kro,2,Henne,Denmark,,,+45 contact via Michelin,2★
Koan,2,Copenhagen,Denmark,,,+45 contact via Michelin,2★
Kong Hans Kælder,2,Copenhagen,Denmark,,,+45 contact via Michelin,2★
PAZ,2,Tórshavn,Faroe Islands,,,+45 contact via Michelin,2★ (Faroe Islands)
akmē,1,Copenhagen,Denmark,,,+45 contact via Michelin,New 1★ / promotion 2026
Alimentum,1,Aalborg,Denmark,,,+45 contact via Michelin,1★
Alouette,1,Copenhagen,Denmark,,,+45 contact via Michelin,1★
ARO,1,Odense,Denmark,,,+45 contact via Michelin,1★
Aure,1,Copenhagen,Denmark,,,+45 contact via Michelin,1★
Bach & Nurup,1,Aalborg,Denmark,,,+45 contact via Michelin,New 1★ / promotion 2026
Domæne,1,Herning,Denmark,,,+45 contact via Michelin,1★
Domestic,1,Aarhus,Denmark,,,+45 contact via Michelin,1★
Dragsholm Slot Gourmet,1,Hørve,Denmark,,,+45 contact via Michelin,1★
ESSE,1,Nordhavn,Denmark,,,+45 contact via Michelin,New 1★ 2026
formel B,1,Copenhagen,Denmark,,,+45 contact via Michelin,1★
Frederiksminde,1,Præstø,Denmark,,,+45 contact via Michelin,1★
Gastromé,1,Aarhus,Denmark,,,+45 contact via Michelin,1★
Jatak,1,Copenhagen,Denmark,,,+45 contact via Michelin,1★
Kadeau Bornholm,1,Åkirkeby,Denmark,,,+45 contact via Michelin,1★
Lille Mølle,1,Copenhagen,Denmark,,,+45 contact via Michelin,New 1★ 2026
LYST,1,Vejle,Denmark,,,+45 contact via Michelin,1★
Marchal,1,Copenhagen,Denmark,,,+45 contact via Michelin,1★
MOTA,1,Nykøbing Sjælland,Denmark,,,+45 contact via Michelin,1★
Okê,1,Skagen,Denmark,,,+45 contact via Michelin,New 1★ 2026
Parsley Salon,1,Hellerup,Denmark,,,+45 contact via Michelin,1★
Pearl by Paul Proffitt,1,Kruså,Denmark,,,+45 contact via Michelin,1★
Søllerød Kro,1,Copenhagen,Denmark,,,+45 contact via Michelin,1★
Substans,1,Aarhus,Denmark,,,+45 contact via Michelin,1★
Sushi Anaba,1,Copenhagen,Denmark,,,+45 contact via Michelin,1★
Syttende,1,Sønderborg,Denmark,,,+45 contact via Michelin,1★
texture,1,Copenhagen,Denmark,,,+45 contact via Michelin,1★
The Samuel,1,Copenhagen,Denmark,,,+45 contact via Michelin,1★
Ti Trin Ned,1,Fredericia,Denmark,,,+45 contact via Michelin,1★
Tri,1,Agger,Denmark,,,+45 contact via Michelin,1★
Udtryk,1,Copenhagen,Denmark,,,+45 contact via Michelin,1★
Villa Vest,1,Lønstrup,Denmark,,,+45 contact via Michelin,1★
Maaemo,3,Oslo,Norway,,,+47 contact via Michelin,3★
RE-NAA,3,Stavanger,Norway,,,+47 contact via Michelin,3★
Gaptrast,2,Bergen,Norway,,,+47 contact via Michelin,New promotion to 2★ 2026
Kontrast,2,Oslo,Norway,,,+47 contact via Michelin,2★
Credo,1,Oslo,Norway,,,+47 contact via Michelin,New 1★ 2026
Kvitnes Gård,1,Kvitnes,Norway,,,+47 contact via Michelin,New 1★ 2026 (northernmost)
Mirabelle by Ørjan Johannessen,1,Bekkjarvik,Norway,,,+47 contact via Michelin,New 1★ 2026
Grön,2,Helsinki,Finland,,,+358 contact via Michelin,New promotion to 2★ 2026
Palace,2,Helsinki,Finland,,,+358 contact via Michelin,2★
Boreal,1,Helsinki,Finland,,,+358 contact via Michelin,New 1★ 2026
Demo,1,Helsinki,Finland,,,+358 contact via Michelin,1★
Finnjävel Salonki,1,Helsinki,Finland,,,+358 contact via Michelin,1★
Kaskis,1,Turku,Finland,,,+358 contact via Michelin,1★
Olo,1,Helsinki,Finland,,,+358 contact via Michelin,1★
DILL,1,Reykjavík,Iceland,,,+354 contact via Michelin,1★
Moss,1,Grindavík,Iceland,,,+354 contact via Michelin,1★
ÓX,1,Reykjavík,Iceland,,,+354 contact via Michelin,1★
28+,1,Gothenburg,Sweden,,,+46 contact via Michelin,1★
Adam / Albin,1,Stockholm,Sweden,,,+46 contact via Michelin,1★
ÄNG,1,Tvååker,Sweden,,,+46 contact via Michelin,1★
Celeste,1,Stockholm,Sweden,,,+46 contact via Michelin,1★
Dashi,1,Stockholm,Sweden,,,+46 contact via Michelin,1★
Ekstedt,1,Stockholm,Sweden,,,+46 contact via Michelin,1★
ergo.,1,Stockholm,Sweden,,,+46 contact via Michelin,1★
Etoile,1,Stockholm,Sweden,,,+46 contact via Michelin,1★
HOZE,1,Gothenburg,Sweden,,,+46 contact via Michelin,1★
Knystaforsen,1,Rydöbruk,Sweden,,,+46 contact via Michelin,1★
Koka,1,Gothenburg,Sweden,,,+46 contact via Michelin,1★
Nour,1,Stockholm,Sweden,,,+46 contact via Michelin,1★
Operakällaren,1,Stockholm,Sweden,,,+46 contact via Michelin,1★
PM & Vänner,1,Växjö,Sweden,,,+46 contact via Michelin,1★
Project,1,Gothenburg,Sweden,,,+46 contact via Michelin,1★
Seafood Gastro,1,Stockholm,Sweden,,,+46 contact via Michelin,1★
Signum,2,Mölnlycke,Sweden,,,+46 contact via Michelin,2★
SK Mat & Människor,1,Gothenburg,Sweden,,,+46 contact via Michelin,1★
Sushi Sho,1,Stockholm,Sweden,,,+46 contact via Michelin,1★
Vollmers,1,Malmö,Sweden,,,+46 contact via Michelin,1★
VYN,1,Simrishamn,Sweden,,,+46 contact via Michelin,1★`;

function parseCsvRows(csv) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < csv.length; i++) {
    const ch = csv[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (ch === "," && !inQuotes) {
      row.push(cell);
      cell = "";
      continue;
    }
    if ((ch === "\n" || ch === "\r") && !inQuotes) {
      if (ch === "\r" && csv[i + 1] === "\n") i++;
      row.push(cell);
      if (row.some((value) => value.trim() !== "")) rows.push(row);
      row = [];
      cell = "";
      continue;
    }
    cell += ch;
  }

  if (cell.length || row.length) {
    row.push(cell);
    if (row.some((value) => value.trim() !== "")) rows.push(row);
  }

  return rows;
}

function starsToTags(stars) {
  const tags = ["fine-dining", "michelin"];
  const n = parseInt(stars, 10);
  if (n === 1) tags.push("star-1");
  else if (n === 2) tags.push("star-2");
  else if (n >= 3) tags.push("star-3");
  return tags;
}

function buildSeedAddress({ street, postalCode, city, country }) {
  const parts = [];
  if (street) parts.push(street);
  if (postalCode && city) parts.push(`${postalCode} ${city}`);
  else if (postalCode) parts.push(postalCode);
  else if (city) parts.push(city);
  if (country) parts.push(country);
  return parts.join(", ");
}

function buildSeedNote(stars, phone, notes) {
  const parts = [];
  const n = parseInt(stars, 10);
  if (n > 0) parts.push(`${n} Michelin star${n > 1 ? "s" : ""}`);
  else parts.push("Michelin listed (not starred)");
  if (phone) parts.push(phone);
  if (notes) parts.push(notes);
  return parts.join(" · ");
}

function parseNordicMichelinSeeds(csv) {
  const rows = parseCsvRows(csv.trim());
  if (!rows.length) return [];

  const headers = rows[0].map((h) => h.trim());
  const index = Object.fromEntries(headers.map((h, i) => [h, i]));

  return rows.slice(1).map((row) => {
    const get = (key) => (row[index[key]] || "").trim();
    const stars = get("Stars");
    const city = get("City");
    const country = get("Country");
    const street = get("Address");
    const postalCode = get("PostalCode");

    return {
      name: get("Name"),
      city,
      country,
      address: buildSeedAddress({ street, postalCode, city, country }),
      tags: starsToTags(stars),
      note: buildSeedNote(stars, get("Phone"), get("Notes")),
    };
  });
}

window.RESTAURANT_SEED_LIST = {
  id: "nordic-michelin-v2",
  restaurants: parseNordicMichelinSeeds(NORDIC_MICHELIN_CSV),
};
