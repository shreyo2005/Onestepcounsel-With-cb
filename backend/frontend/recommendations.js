// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.getElementById("recommendations");
//   const recommendations = JSON.parse(localStorage.getItem("recommendations")) || [];

//   if (recommendations.length > 0) {
//     recommendations.forEach(college => {
//       let p = document.createElement("p");
//       p.textContent = `${college.name} (${college.field}) - Rank ${college.rank}`;
//       container.appendChild(p);
//     });

//     // Initialize the map
//     const map = L.map("map").setView([33.9, 75.5], 7);

//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       attribution: "© OpenStreetMap contributors"
//     }).addTo(map);

//     // Add markers using recommendations data (comes from backend API)
//     recommendations.forEach(col => {
//       L.marker([col.lat, col.lon]).addTo(map)
//         .bindPopup(`<b>${col.name}</b><br>District: ${col.district}`);
//     });

//   } else {
//     container.innerHTML = "<p>No matching colleges found.</p>";
//   }
// });



document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("recommendations");
  const recommendations = JSON.parse(localStorage.getItem("recommendations")) || [];

  if (recommendations.length > 0) {
    // Show list
    recommendations.forEach(college => {
      const div = document.createElement("div");
      div.classList.add("college-card");
      div.innerHTML = `
        <b>${college.name}</b> (${college.field})<br>
        Rank: ${college.rank}<br>
        District: ${college.district}<br>
        Lat: ${college.lat || "N/A"}, Lon: ${college.lon || "N/A"}
      `;
      container.appendChild(div);
    });

    // Initialize Leaflet map
    const map = L.map('map').setView([34.0837, 74.7973], 8); // Kashmir center

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add markers
    recommendations.forEach(college => {
      if (college.lat && college.lon) {
        L.marker([college.lat, college.lon])
          .addTo(map)
          .bindPopup(`<b>${college.name}</b><br>${college.district}`);
      }
    });
  } else {
    container.innerHTML = "<p>No matching colleges found.</p>";
  }
});
