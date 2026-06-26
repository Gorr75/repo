/* Nordic Michelin starter list — parsed from embedded CSV. */

const NORDIC_MICHELIN_CSV = `Name,Stars,City,Country,Address,PostalCode,Phone,Website,BookingURL,Instagram,Notes
Frantzén,3,Stockholm,Sweden,Klara Norra Kyrkogata 26,111 22,+46 8 20 85 80,https://www.restaurantfrantzen.com/,,@restaurantfrantzen,Original request
Aira,2,Stockholm,Sweden,Biskopsvägen 9,115 21,+46 8 4800 4900,https://aira.se/,https://aira.se/reservations,@airasthlm,Original request
Brasserie Astoria,0,Stockholm,Sweden,Nybrogatan 15,114 39,+46 8 20 85 81,https://www.brasserieastoria.com/,https://www.brasserieastoria.se/en/,@brasserieastoria,Original request (not starred)
FZN Dubai,3,Dubai,United Arab Emirates,"Atlantis The Palm, Crescent Road, The Palm Jumeirah",,Contact via site,https://www.restaurantfzn.com/,https://www.restaurantfzn.com/,@restaurantfzn,Original request (Dubai)
Geranium,3,Copenhagen,Denmark,,,Contact via site,https://geranium.dk/,,@geraniumcph,3★
Jordnær,3,Gentofte,Denmark,,,Contact via site,https://jordnaer.dk/,,@jordnaer,3★
Kadeau Copenhagen,3,Copenhagen,Denmark,,,Contact via site,https://kadeau.dk/,,@kadeau,New promotion to 3★ 2026
a|o|c,2,Copenhagen,Denmark,,,Contact via site,https://aoc.dk/,,@aoc.dk,2★
Alchemist,2,Copenhagen,Denmark,,,Contact via site,https://alchemist.dk/,,@alchemistcph,2★
Frederikshøj,2,Aarhus,Denmark,,,Contact via site,https://frederikshoj.com/,,@frederikshoj,2★
Henne Kirkeby Kro,2,Henne,Denmark,,,Contact via site,https://hennekirkebykro.dk/,,@hennekirkebykro,2★
Koan,2,Copenhagen,Denmark,,,Contact via site,https://koan.dk/,,@koan.dk,2★
Kong Hans Kælder,2,Copenhagen,Denmark,,,Contact via site,https://konghans.dk/,,@konghans,2★
PAZ,2,Tórshavn,Faroe Islands,,,Contact via site,https://paz.fo/,,@paz.fo,2★ (Faroe Islands)
akmē,1,Copenhagen,Denmark,,,Contact via site,https://akme.dk/,,@akme.dk,New 1★ / promotion 2026
Alimentum,1,Aalborg,Denmark,,,Contact via site,https://alimentum.dk/,,@alimentum.dk,1★
Alouette,1,Copenhagen,Denmark,,,Contact via site,https://alouette.dk/,,@alouette.dk,1★
ARO,1,Odense,Denmark,,,Contact via site,https://aro.dk/,,@aro.dk,1★
Aure,1,Copenhagen,Denmark,,,Contact via site,https://aure.dk/,,@aure.dk,1★
Bach & Nurup,1,Aalborg,Denmark,,,Contact via site,https://bachnurup.dk/,,@bachnurup,New 1★ / promotion 2026
Domæne,1,Herning,Denmark,,,Contact via site,https://domaene.dk/,,@domaene.dk,1★
Domestic,1,Aarhus,Denmark,,,Contact via site,https://domestic.dk/,,@domestic.dk,1★
Dragsholm Slot Gourmet,1,Hørve,Denmark,,,Contact via site,https://dragsholmslot.dk/,,@dragsholmslot,1★
ESSE,1,Nordhavn,Denmark,,,Contact via site,https://esse.dk/,,@esse.dk,New 1★ 2026
formel B,1,Copenhagen,Denmark,,,Contact via site,https://formelb.dk/,,@formelb,1★
Frederiksminde,1,Præstø,Denmark,,,Contact via site,https://frederiksminde.dk/,,@frederiksminde,1★
Gastromé,1,Aarhus,Denmark,,,Contact via site,https://gastrome.dk/,,@gastrome.dk,1★
Jatak,1,Copenhagen,Denmark,,,Contact via site,https://jatak.dk/,,@jatak.dk,1★
Kadeau Bornholm,1,Åkirkeby,Denmark,,,Contact via site,https://kadeau.dk/,,@kadeau,1★
Lille Mølle,1,Copenhagen,Denmark,,,Contact via site,https://lillemolle.dk/,,@lillemolle,New 1★ 2026
LYST,1,Vejle,Denmark,,,Contact via site,https://lyst.dk/,,@lyst.dk,1★
Marchal,1,Copenhagen,Denmark,,,Contact via site,https://marchal.dk/,,@marchal.dk,1★
MOTA,1,Nykøbing Sjælland,Denmark,,,Contact via site,https://mota.dk/,,@mota.dk,1★
Okê,1,Skagen,Denmark,,,Contact via site,https://oke.dk/,,@oke.dk,New 1★ 2026
Parsley Salon,1,Hellerup,Denmark,,,Contact via site,https://parsleysalon.dk/,,@parsleysalon,1★
Pearl by Paul Proffitt,1,Kruså,Denmark,,,Contact via site,https://pearl.dk/,,@pearlbypaulproffitt,1★
Søllerød Kro,1,Copenhagen,Denmark,,,Contact via site,https://sollerodkro.dk/,,@sollerodkro,1★
Substans,1,Aarhus,Denmark,,,Contact via site,https://subtans.dk/,,@subtans,1★
Sushi Anaba,1,Copenhagen,Denmark,,,Contact via site,https://sushianaba.dk/,,@sushianaba,1★
Syttende,1,Sønderborg,Denmark,,,Contact via site,https://syttende.dk/,,@syttende.dk,1★
texture,1,Copenhagen,Denmark,,,Contact via site,https://texture.dk/,,@texture.dk,1★
The Samuel,1,Copenhagen,Denmark,,,Contact via site,https://thesamuel.dk/,,@thesamuel.dk,1★
Ti Trin Ned,1,Fredericia,Denmark,,,Contact via site,https://titrinned.dk/,,@titrinned,1★
Tri,1,Agger,Denmark,,,Contact via site,https://tri.dk/,,@tri.dk,1★
Udtryk,1,Copenhagen,Denmark,,,Contact via site,https://udtryk.dk/,,@udtryk.dk,1★
Villa Vest,1,Lønstrup,Denmark,,,Contact via site,https://villavest.dk/,,@villavest.dk,1★
Maaemo,3,Oslo,Norway,,,Contact via site,https://maaemo.no/,,@maaemo,3★
RE-NAA,3,Stavanger,Norway,,,Contact via site,https://re-naa.no/,,@re_naa,3★
Gaptrast,2,Bergen,Norway,,,Contact via site,https://gaptrast.no/,,@gaptrast,New promotion to 2★ 2026
Kontrast,2,Oslo,Norway,,,Contact via site,https://kontrast.no/,,@kontrast.oslo,2★
Credo,1,Oslo,Norway,,,Contact via site,https://credo.no/,,@credo.no,New 1★ 2026
Kvitnes Gård,1,Kvitnes,Norway,,,Contact via site,https://kvitnes.no/,,@kvitnesgard,New 1★ 2026 (northernmost)
Mirabelle by Ørjan Johannessen,1,Bekkjarvik,Norway,,,Contact via site,https://mirabelle.no/,,@mirabelle.no,New 1★ 2026
Grön,2,Helsinki,Finland,,,Contact via site,https://gron.fi/,,@gronhelsinki,New promotion to 2★ 2026
Palace,2,Helsinki,Finland,,,Contact via site,https://palacehelsinki.fi/,,@palacehelsinki,2★
Boreal,1,Helsinki,Finland,,,Contact via site,https://boreal.fi/,,@boreal.fi,New 1★ 2026
Demo,1,Helsinki,Finland,,,Contact via site,https://restaurantdemo.fi/,,@restaurantdemo,1★
Finnjävel Salonki,1,Helsinki,Finland,,,Contact via site,https://finnjavel.fi/,,@finnjavel,1★
Kaskis,1,Turku,Finland,,,Contact via site,https://kaskis.fi/,,@kaskis.fi,1★
Olo,1,Helsinki,Finland,,,Contact via site,https://olo-ravintola.fi/,,@olo.ravintola,1★
DILL,1,Reykjavík,Iceland,,,Contact via site,https://dillrestaurant.is/,,@dillrestaurant,1★
Moss,1,Grindavík,Iceland,,,Contact via site,https://bluelagoon.com/restaurant/moss,,@bluelagoon,1★
ÓX,1,Reykjavík,Iceland,,,Contact via site,https://ox.is/,,@ox.is,1★
28+,1,Gothenburg,Sweden,,,Contact via site,https://28plus.se/,,@28plus.se,1★
Adam / Albin,1,Stockholm,Sweden,,,Contact via site,https://adamalbin.se/,,@adamalbin,1★
ÄNG,1,Tvååker,Sweden,,,Contact via site,https://angrestaurant.se/,,@angrestaurant,1★
Celeste,1,Stockholm,Sweden,,,Contact via site,https://celeste.se/,,@celeste.se,1★
Dashi,1,Stockholm,Sweden,,,Contact via site,https://dashi.se/,,@dashi.se,1★
Ekstedt,1,Stockholm,Sweden,,,Contact via site,https://ekstedt.nu/,,@ekstedt,1★
ergo.,1,Stockholm,Sweden,,,Contact via site,https://ergo.restaurant/,,@ergo.restaurant,1★
Etoile,1,Stockholm,Sweden,,,Contact via site,https://etoile.se/,,@etoile.se,1★
HOZE,1,Gothenburg,Sweden,,,Contact via site,https://hoze.se/,,@hoze.se,1★
Knystaforsen,1,Rydöbruk,Sweden,,,Contact via site,https://knystaforsen.se/,,@knystaforsen,1★
Koka,1,Gothenburg,Sweden,,,Contact via site,https://koka.se/,,@koka.se,1★
Nour,1,Stockholm,Sweden,,,Contact via site,https://nour.se/,,@nour.se,1★
Operakällaren,1,Stockholm,Sweden,,,Contact via site,https://operakallaren.se/,,@operakallaren,1★
PM & Vänner,1,Växjö,Sweden,,,Contact via site,https://pmvanner.se/,,@pmvanner,1★
Project,1,Gothenburg,Sweden,,,Contact via site,https://projectgothenburg.se/,,@projectgothenburg,1★
Seafood Gastro,1,Stockholm,Sweden,,,Contact via site,https://seafoodgastro.se/,,@seafoodgastro,1★
Signum,2,Mölnlycke,Sweden,,,Contact via site,https://signumrestaurant.se/,,@signumrestaurant,2★
SK Mat & Människor,1,Gothenburg,Sweden,,,Contact via site,https://skmat.se/,,@skmatmanniskor,1★
Sushi Sho,1,Stockholm,Sweden,,,Contact via site,https://sushisho.se/,,@sushisho,1★
Vollmers,1,Malmö,Sweden,,,Contact via site,https://vollmers.se/,,@vollmers,1★
VYN,1,Simrishamn,Sweden,,,Contact via site,https://vyn.se/,,@vyn.se,1★`;

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
      link: get("Website"),
      bookingUrl: get("BookingURL"),
      instagram: get("Instagram"),
      tags: starsToTags(stars),
      note: buildSeedNote(stars, get("Phone"), get("Notes")),
    };
  });
}

window.RESTAURANT_SEED_LIST = {
  id: "nordic-michelin-v3",
  restaurants: parseNordicMichelinSeeds(NORDIC_MICHELIN_CSV),
};
