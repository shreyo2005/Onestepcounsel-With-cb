// jk_scrape_geocode.js
import fetch from "node-fetch";
import * as cheerio from "cheerio";
import fs from "fs";

const URL = "https://www.jkhighereducation.nic.in/colleges.html";

async function geocode(name, district) {
  const q = encodeURIComponent(`${name}, ${district}, Jammu and Kashmir, India`);
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${q}&format=json&limit=1`,
    { headers: { "User-Agent": "SIH-JK-Colleges/1.0" } }
  );
  const data = await res.json();
  return data[0] ? { lat: +data[0].lat, lon: +data[0].lon } : {};
}

(async () => {
  const res = await fetch(URL);
  const html = await res.text();
  const $ = cheerio.load(html);

  const colleges = [];
  $("table tr").each((_, tr) => {
    const tds = $(tr).find("td");
    if (tds.length >= 3) {
      const name = $(tds[2]).text().trim();
      const district = $(tds[3]).text().trim();
      if (name && district) colleges.push({ name, district });
    }
  });

  for (let college of colleges) {
    const loc = await geocode(college.name, college.district);
    college.lat = loc.lat;
    college.lon = loc.lon;
    console.log(`Geocoded: ${college.name}`);
    await new Promise((r) => setTimeout(r, 1000)); // avoid API throttling
  }

  const jsContent = `export const JK_COLLEGES = ${JSON.stringify(colleges, null, 2)};\n`;
  fs.writeFileSync("jk_colleges.js", jsContent);
  console.log("Saved jk_colleges.js with", colleges.length, "colleges");
})();
