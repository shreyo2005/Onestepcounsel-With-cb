/* ===============================
     Simple In‑App Dataset (Demo)
     Extend these arrays with real data from AISHE/UGC/etc. for production.
  ================================*/
const STREAMS = [
  { id: "Science", label: "Science" },
  { id: "Commerce", label: "Commerce" },
  { id: "Arts", label: "Arts & Humanities" },
  { id: "Vocational", label: "Vocational / Skill" },
];

const COURSES = [
  {
    id: "btech",
    name: "B.Tech (Computer Science / EN / CE)",
    streams: ["Science"],
    duration: "4 years",
    level: "UG",
    after: ["12"],
    minMarks: 60,
    tags: ["Maths", "CS", "Coding", "Engineering"],
    desc: "Core engineering degree with specializations. Strong fit for Maths + CS interests.",
    careers: [
      "Software Engineer",
      "Data Analyst",
      "Government JE/AE",
      "Startup Founder",
    ],
    mats: [
      {
        title: "NPTEL: Programming in C",
        url: "https://nptel.ac.in/courses/106104128",
      },
      { title: "SWAYAM: Data Structures", url: "https://swayam.gov.in/" },
    ],
  },
  {
    id: "bsc_phy",
    name: "B.Sc. (Physics / Mathematics / Computer Science)",
    streams: ["Science"],
    duration: "3 years",
    level: "UG",
    after: ["12"],
    minMarks: 50,
    tags: ["Physics", "Maths", "Research"],
    desc: "Foundational science degree. Ideal for research/teaching paths and competitive exams.",
    careers: [
      "Research Assistant",
      "Data Scientist (PG required)",
      "School Teacher",
      "ISRO/DRDO exams",
    ],
    mats: [
      { title: "NPTEL: Classical Physics", url: "https://nptel.ac.in/" },
      { title: "UGC ePathshala", url: "https://epgp.inflibnet.ac.in/" },
    ],
  },
  {
    id: "mbbs",
    name: "MBBS",
    streams: ["Science"],
    duration: "5.5 years",
    level: "UG",
    after: ["12"],
    minMarks: 60,
    tags: ["Biology", "Medicine"],
    desc: "Undergraduate medical degree. Requires NEET eligibility.",
    careers: ["Doctor", "Public Health", "Medical Research"],
    mats: [
      { title: "NTA NEET Official", url: "https://nta.ac.in/" },
      { title: "SWAYAM: Anatomy Basics", url: "https://swayam.gov.in/" },
    ],
  },
  {
    id: "bcom",
    name: "B.Com / B.Com (Hons)",
    streams: ["Commerce"],
    duration: "3 years",
    level: "UG",
    after: ["12"],
    minMarks: 45,
    tags: ["Accounts", "Economics", "Business"],
    desc: "Commerce degree focusing on accounting, finance, taxation, business laws.",
    careers: ["Accountant", "Tax Consultant", "Bank PO", "CA/CS/CMA Pathway"],
    mats: [
      { title: "NPTEL: Accounting", url: "https://nptel.ac.in/" },
      { title: "IGNOU eGyanKosh", url: "https://egyankosh.ac.in/" },
    ],
  },
  {
    id: "bba",
    name: "BBA (Management)",
    streams: ["Commerce"],
    duration: "3 years",
    level: "UG",
    after: ["12"],
    minMarks: 50,
    tags: ["Business", "Management", "Entrepreneurship"],
    desc: "Undergraduate management program. Pathway to MBA and corporate roles.",
    careers: ["Business Analyst", "Operations", "Marketing", "Entrepreneur"],
    mats: [
      {
        title: "SWAYAM: Principles of Management",
        url: "https://swayam.gov.in/",
      },
    ],
  },
  {
    id: "ba_hum",
    name: "B.A. (History / Political Science / English / Psychology)",
    streams: ["Arts"],
    duration: "3 years",
    level: "UG",
    after: ["12"],
    minMarks: 45,
    tags: ["English", "History", "Geography", "Media", "CivilService"],
    desc: "Flexible humanities degree. Great for UPSC/State PSC, teaching, media, design.",
    careers: [
      "Journalist",
      "Content Strategist",
      "Teacher",
      "Civil Services (with prep)",
    ],
    mats: [
      { title: "ePathshala: Humanities", url: "https://epathshala.nic.in/" },
    ],
  },
  {
    id: "diploma_eng",
    name: "Polytechnic Diploma (Mechanical / Civil / Electrical / CS)",
    streams: ["Vocational", "Science"],
    duration: "3 years",
    level: "Diploma",
    after: ["10"],
    minMarks: 40,
    tags: ["HandsOn", "Engineering", "Maths"],
    desc: "Job-oriented technical diploma after 10th. Lateral entry to B.Tech possible.",
    careers: [
      "Technician",
      "Junior Engineer",
      "Apprentice",
      "Service Engineer",
    ],
    mats: [
      { title: "NSTI / DGT Craftsman Training", url: "https://dgt.gov.in/" },
    ],
  },
  {
    id: "iti",
    name: "ITI Trade (Electrician / Fitter / Welder / COPA)",
    streams: ["Vocational"],
    duration: "1–2 years",
    level: "Certificate",
    after: ["10"],
    minMarks: 0,
    tags: ["HandsOn", "SkilledTrade"],
    desc: "Industrial Training Institute trades for immediate employability.",
    careers: ["Skilled Technician", "Apprenticeship", "PSU Technician Exams"],
    mats: [{ title: "NCVT MIS", url: "https://ncvtmis.gov.in/" }],
  },
  {
    id: "bca",
    name: "BCA (Computer Applications)",
    streams: ["Science", "Commerce"],
    duration: "3 years",
    level: "UG",
    after: ["12"],
    minMarks: 50,
    tags: ["CS", "Coding", "Maths"],
    desc: "Application-focused computing degree. Good for software roles with projects.",
    careers: ["Software Developer", "QA Engineer", "Support Engineer"],
    mats: [{ title: "SWAYAM: Python", url: "https://swayam.gov.in/" }],
  },
  {
    id: "bsc_agri",
    name: "B.Sc. Agriculture",
    streams: ["Science"],
    duration: "4 years",
    level: "UG",
    after: ["12"],
    minMarks: 50,
    tags: ["Biology", "Environment", "HandsOn"],
    desc: "Agriscience with fieldwork. Pathway to government agri services.",
    careers: ["Agriculture Officer", "AgriTech", "Research", "Horticulture"],
    mats: [{ title: "ICAR eCourse", url: "https://ecourses.icar.gov.in/" }],
  },
];

const COLLEGES = [
  {
    id: "c1",
    name: "Govt Degree College, Andheri",
    city: "Mumbai",
    state: "MH",
    lat: 19.1197,
    lon: 72.8468,
    medium: "English",
    hostel: true,
    type: "Govt",
    courses: ["ba_hum", "bcom", "bsc_phy", "bca"],
  },
  {
    id: "c2",
    name: "Govt Science College, Fort",
    city: "Mumbai",
    state: "MH",
    lat: 18.9318,
    lon: 72.8331,
    medium: "English",
    hostel: false,
    type: "Govt",
    courses: ["bsc_phy", "btech", "bsc_agri"],
  },
  {
    id: "c3",
    name: "Govt Polytechnic, Pune",
    city: "Pune",
    state: "MH",
    lat: 18.5309,
    lon: 73.8478,
    medium: "English",
    hostel: true,
    type: "Govt",
    courses: ["diploma_eng", "bca"],
  },
  {
    id: "c4",
    name: "Govt College, Chembur",
    city: "Mumbai",
    state: "MH",
    lat: 19.0626,
    lon: 72.896,
    medium: "English",
    hostel: false,
    type: "Govt",
    courses: ["ba_hum", "bcom", "bca"],
  },
  {
    id: "c5",
    name: "Govt College of Arts, Delhi",
    city: "New Delhi",
    state: "DL",
    lat: 28.628,
    lon: 77.2167,
    medium: "Hindi/English",
    hostel: false,
    type: "Govt",
    courses: ["ba_hum"],
  },
  {
    id: "c6",
    name: "Govt Degree College, Rohini",
    city: "New Delhi",
    state: "DL",
    lat: 28.736,
    lon: 77.113,
    medium: "Hindi/English",
    hostel: true,
    type: "Govt",
    courses: ["bcom", "bsc_phy", "bca"],
  },
  {
    id: "c7",
    name: "Govt Medical College, Jaipur",
    city: "Jaipur",
    state: "RJ",
    lat: 26.9124,
    lon: 75.7873,
    medium: "English",
    hostel: true,
    type: "Govt",
    courses: ["mbbs", "bsc_phy"],
  },
  {
    id: "c8",
    name: "Govt Agriculture College, Jaipur",
    city: "Jaipur",
    state: "RJ",
    lat: 26.9221,
    lon: 75.7789,
    medium: "Hindi/English",
    hostel: true,
    type: "Govt",
    courses: ["bsc_agri"],
  },
  {
    id: "c9",
    name: "Govt Degree College, Lucknow",
    city: "Lucknow",
    state: "UP",
    lat: 26.8467,
    lon: 80.9462,
    medium: "Hindi/English",
    hostel: false,
    type: "Govt",
    courses: ["ba_hum", "bcom", "bsc_phy"],
  },
  {
    id: "c10",
    name: "Govt Polytechnic, Kanpur",
    city: "Kanpur",
    state: "UP",
    lat: 26.4499,
    lon: 80.3319,
    medium: "Hindi/English",
    hostel: true,
    type: "Govt",
    courses: ["diploma_eng", "iti"],
  },
  {
    id: "c11",
    name: "Govt Engineering College, Chennai",
    city: "Chennai",
    state: "TN",
    lat: 13.0827,
    lon: 80.2707,
    medium: "English",
    hostel: true,
    type: "Govt",
    courses: ["btech", "bca"],
  },
  {
    id: "c12",
    name: "Govt Degree College, Coimbatore",
    city: "Coimbatore",
    state: "TN",
    lat: 11.0168,
    lon: 76.9558,
    medium: "English/Tamil",
    hostel: false,
    type: "Govt",
    courses: ["bcom", "ba_hum", "bsc_phy"],
  },
];

const CITY_COORDS = {
  Mumbai: { lat: 19.076, lon: 72.8777 },
  "New Delhi": { lat: 28.6139, lon: 77.209 },
  Jaipur: { lat: 26.9124, lon: 75.7873 },
  Lucknow: { lat: 26.8467, lon: 80.9462 },
  Chennai: { lat: 13.0827, lon: 80.2707 },
  Coimbatore: { lat: 11.0168, lon: 76.9558 },
};

/* ===============================
     Helpers & Scoring
  ================================*/
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.style.display = "block";
  setTimeout(() => (t.style.display = "none"), 2200);
}

function kmDistance(a, b) {
  if (!a || !b) return Infinity;
  const R = 6371; // km
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLon = ((b.lon - a.lon) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}

function collectChips(name) {
  return $$(`.checklist[data-name="${name}"] .chip.active`).map(
    (x) => x.dataset.val
  );
}

function computeStreamScores(subjects, interests, style) {
  const score = { Science: 0, Commerce: 0, Arts: 0, Vocational: 0 };
  const has = (s) => subjects.includes(s);
  const likes = (i) => interests.includes(i);
  // Science
  if (has("Physics")) score.Science += 2;
  if (has("Chemistry")) score.Science += 2;
  if (has("Maths")) score.Science += 3;
  if (has("Biology")) score.Science += 3;
  if (has("CS") || likes("Coding")) score.Science += 3;
  if (likes("Research")) score.Science += 2;
  if (likes("Medicine")) score.Science += 3;

  // Commerce
  if (has("Accounts")) score.Commerce += 3;
  if (has("Economics")) score.Commerce += 3;
  if (has("Business") || likes("Business")) score.Commerce += 3;

  // Arts
  if (has("English") || has("History") || has("Geography")) score.Arts += 2;
  if (likes("Media") || likes("CivilService") || style.includes("Creative"))
    score.Arts += 2;

  // Vocational
  if (style.includes("HandsOn")) score.Vocational += 3;

  return Object.entries(score)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => ({ id: k, score: v }));
}

function recommendCourses(profile) {
  const { classLevel, marks, subjects, interests, topStreams } = profile;
  const eligible = COURSES.filter(
    (c) => c.after.includes(classLevel) && marks >= (c.minMarks || 0)
  );

  // Score by: stream match + tag overlap + interest match
  const topStreamIds = topStreams.slice(0, 2).map((s) => s.id);
  function scoreCourse(c) {
    let s = 0;
    if (c.streams.some((st) => topStreamIds.includes(st))) s += 5;
    if (c.tags.some((t) => subjects.includes(t))) s += 3;
    if (c.tags.some((t) => interests.includes(t))) s += 3;
    if (c.level === "Diploma" && classLevel === "10") s += 1; // bonus
    return s;
  }

  return eligible
    .map((c) => ({ course: c, score: scoreCourse(c) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((x) => x.course);
}

function findNearbyColleges(userLoc, courseIds, maxKm) {

  if (!userLoc) return [];
  const set = new Set(courseIds);
  return COLLEGES.filter((col) => col.courses.some((id) => set.has(id)))
    .map((col) => ({
      ...col,
      dist: kmDistance(userLoc, { lat: col.lat, lon: col.lon }),
    }))
    .filter((col) => col.dist <= maxKm)
    .sort((a, b) => a.dist - b.dist)
    .slice(0, 8);
    
}

function aggregateCareers(courses) {
  const list = [];
  courses.forEach((c) => (c.careers || []).forEach((cr) => list.push(cr)));
  return Array.from(new Set(list)).slice(0, 18);
}

function aggregateMaterials(courses) {
  const mats = [];
  courses.forEach((c) => (c.mats || []).forEach((m) => mats.push(m)));
  // De-dup by title
  const seen = new Set();
  return mats
    .filter((m) => (seen.has(m.title) ? false : (seen.add(m.title), true)))
    .slice(0, 14);
}

/* ===============================
     UI Wiring
  ================================*/
// Activate chip toggles
$$(".checklist .chip").forEach((chip) => {
  chip.addEventListener("click", () => chip.classList.toggle("active"));
});

// Restore from localStorage
(function restore() {
  const saved = JSON.parse(localStorage.getItem("eduguide_profile") || "null");
  if (!saved) return;
  $("#marks").value = saved.marks || "";
  $("#radius").value = saved.radius || 30;
  if (saved.classLevel) {
    const el = $(
      `.checklist[data-name="classLevel"] .chip[data-val="${saved.classLevel}"]`
    );
    el && el.classList.add("active");
  }
  (saved.subjects || []).forEach((v) => {
    const el = $(`.checklist[data-name="subjects"] .chip[data-val="${v}"]`);
    el && el.classList.add("active");
  });
  (saved.interests || []).forEach((v) => {
    const el = $(`.checklist[data-name="interests"] .chip[data-val="${v}"]`);
    el && el.classList.add("active");
  });
  (saved.style || []).forEach((v) => {
    const el = $(`.checklist[data-name="style"] .chip[data-val="${v}"]`);
    el && el.classList.add("active");
  });
  if (saved.city) $("#manualCity").value = saved.city;
  if (saved.userLoc) window.__userLoc = saved.userLoc;
})();

// Location button
$("#locBtn").addEventListener("click", async () => {
  if (!navigator.geolocation) {
    toast("Geolocation not supported. Enter city manually.");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      window.__userLoc = { lat: latitude, lon: longitude };
      toast("Location captured ✔");
    },
    (err) => {
      toast("Location denied. Type your city in the box.");
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
});

// Reset
$("#resetBtn").addEventListener("click", () => {
  localStorage.removeItem("eduguide_profile");
  location.reload();
});

// Main action
$("#goBtn").addEventListener("click", () => {
  const classChips = collectChips("classLevel");
  const classLevel = classChips[0] || null;
  const marks = parseFloat($("#marks").value || "0");
  const subjects = collectChips("subjects");
  const interests = collectChips("interests");
  const style = collectChips("style");
  const city = ($("#manualCity").value || "").trim();
  const radius = parseFloat($("#radius").value || "30");

  if (!classLevel) {
    toast("Select class (After 10th or 12th)");
    return;
  }
  if (Number.isNaN(marks) || marks < 0 || marks > 100) {
    toast("Enter valid marks (0–100)");
    return;
  }

  let userLoc = window.__userLoc || null;
  if (!userLoc && city && CITY_COORDS[city]) userLoc = CITY_COORDS[city];

  const topStreams = computeStreamScores(subjects, interests, style);
  const topStreamLabels = topStreams
    .filter((s) => s.score > 0)
    .slice(0, 3)
    .map((s) => s.id);

  const profile = {
    classLevel,
    marks,
    subjects,
    interests,
    style,
    radius,
    city,
    userLoc,
    topStreams,
  };
  localStorage.setItem("eduguide_profile", JSON.stringify(profile));

  // Courses
  const courses = recommendCourses(profile);
  const courseIds = courses.map((c) => c.id);

  // Colleges
  const colleges = findNearbyColleges(userLoc, courseIds, radius);

  // Careers & materials
  const careers = aggregateCareers(courses);
  const mats = aggregateMaterials(courses);

  renderSummary({ classLevel, marks, topStreamLabels, city, radius, userLoc });
  renderStreams(topStreams);
  renderCourses(courses);
  renderColleges(colleges);
  renderCareers(careers);
  renderMaterials(mats);

    if (userLoc && colleges.length) {
    initMap(userLoc.lat, userLoc.lon);
    addCollegeMarkers(colleges);
  }
  

  
  if (!userLoc) {
    $("#locNote").innerHTML =
      '<span style="color:var(--danger)">Tip:</span> Use the location button or type a known city (Mumbai, New Delhi, Jaipur, Lucknow, Chennai, Coimbatore) to get nearby colleges.';
  }
});

/* ===============================
     Renderers
  ================================*/
function renderSummary({
  classLevel,
  marks,
  topStreamLabels,
  city,
  radius,
  userLoc,
}) {
  const locTxt = userLoc
    ? `Your location is set (${city || "GPS"}). Searching within ${radius} km.`
    : `Location not set. Set it to see nearby colleges.`;
  $(
    "#summary"
  ).innerHTML = `You are planning <b>after ${classLevel}</b> with marks <b>${marks}%</b>. Top stream fit: <b>${
    topStreamLabels.join(", ") || "—"
  }</b>. <br><span class="muted">${locTxt}<\/span>`;
}

function renderStreams(streams) {
  const container = $("#streamBadges");
  container.innerHTML = "";
  if (!streams || !streams.length) {
    container.textContent = "—";
    return;
  }
  streams.slice(0, 3).forEach((s) => {
    const el = document.createElement("span");
    el.className = "badge";
    el.textContent = `${s.id} • ${s.score}`;
    container.appendChild(el);
  });
}

function renderCourses(courses) {
  const grid = $("#courseGrid");
  grid.innerHTML = "";
  if (!courses.length) {
    grid.innerHTML =
      '<div class="muted">No course suggestions found. Adjust your inputs.</div>';
    return;
  }
  courses.forEach((c) => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
        <div class="title">${c.name}</div>
        <div class="muted">${c.level} • ${
      c.duration
    } • Streams: ${c.streams.join(", ")}</div>
        <div class="desc">${c.desc}</div>
        <div class="muted">Careers: ${c.careers.slice(0, 4).join(", ")}</div>
        <div class="muted">Study materials: ${c.mats
          .map(
            (m) =>
              `<a target="_blank" rel="noopener" href="${m.url}">${m.title}<\/a>`
          )
          .join(" • ")}</div>
      `;
    grid.appendChild(card);
  });
}





function renderColleges(list) {
  const box = $("#collegeList");
  box.innerHTML = "";
  if (!list.length) {
    box.innerHTML =
      '<div class="muted">No nearby colleges found within your radius. Try increasing the km or set your location.</div>';
    return;
  }
  list.forEach((col) => {
    const div = document.createElement("div");
    div.className = "college";
    div.innerHTML = `
        <span class="dot"></span>
        <div>
          <div><b>${col.name}<\/b> — ${col.city}, ${col.state} • ${
      col.type
    } • ${col.medium} ${col.hostel ? "• Hostel" : ""}<\/div>
          <div class="muted">Offers: ${col.courses
            .map((id) => (COURSES.find((c) => c.id === id) || {}).name || id)
            .slice(0, 4)
            .join(", ")} <\/div>
        </div>
        <div style="margin-left:auto" class="muted">${col.dist.toFixed(
          1
        )} km</div>
      `;
    box.appendChild(div);
  });
}

function renderCareers(careers) {
  const box = $("#careerChips");
  box.innerHTML = "";
  if (!careers.length) {
    box.textContent = "—";
    return;
  }
  careers.forEach((c) => {
    const el = document.createElement("span");
    el.className = "badge";
    el.textContent = c;
    box.appendChild(el);
  });
}

function renderMaterials(mats) {
  const box = $("#materialsList");
  box.innerHTML = "";
  if (!mats.length) {
    box.textContent = "—";
    return;
  }
  mats.forEach((m) => {
    const row = document.createElement("div");
    row.className = "badge";
    row.innerHTML = `📚 <a target="_blank" rel="noopener" href="${m.url}">${m.title}<\/a>`;
    box.appendChild(row);
  });
}


let map = null;
let markersLayer = null;

function initMap(lat, lon) {
  // If a previous map exists, remove it first (clean reset)
  if (map) {
    try { map.remove(); } catch(e){ /* ignore */ }
    map = null;
    markersLayer = null;
  }

  // Create fresh map
  map = L.map('map').setView([lat, lon], 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Create marker layer group
  markersLayer = L.layerGroup().addTo(map);

  // Add a user location marker
  L.marker([lat, lon]).addTo(map).bindPopup('<b>You are here</b>');
}

function getCourseNames(ids) {
  return ids
    .map(id => (COURSES.find(c => c.id === id) || {}).name || id)
    .join(', ');
}

function addCollegeMarkers(colleges) {
  if (!map) return;                  // map must exist
  if (!markersLayer) markersLayer = L.layerGroup().addTo(map);

  markersLayer.clearLayers();        // clear old markers

  colleges.forEach(c => {
    // defensive coords check
    if (typeof c.lat !== 'number' || typeof c.lon !== 'number') return;

    const popup = `
      <b>${c.name}</b><br/>
      ${c.city} (${c.state})<br/>
      Courses: ${getCourseNames(c.courses)}<br/>
      Distance: ${c.dist ? c.dist.toFixed(1) + ' km' : '—'}
    `;

    const marker = L.marker([c.lat, c.lon]).bindPopup(popup);
    markersLayer.addLayer(marker);
  });

  // Fit bounds to markers (and user location if present)
  const allCoords = [];
  if (markersLayer.getLayers().length) {
    markersLayer.getLayers().forEach(m => allCoords.push(m.getLatLng()));
  }
  // include current center so bounds don't collapse to a single point
  if (map && map.getCenter) allCoords.push(map.getCenter());

  if (allCoords.length > 0) {
    const bounds = L.latLngBounds(allCoords);
    map.fitBounds(bounds.pad(0.2));
  }
}


