document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("recommendations");
  const recommendations = JSON.parse(localStorage.getItem("recommendations")) || [];

  if (recommendations.length > 0) {
    recommendations.forEach(college => {
      let p = document.createElement("p");
      p.textContent = `${college.name} (${college.field}) - Rank ${college.rank}`;
      container.appendChild(p);
    });

    // Initialize the map
    const map = L.map("map").setView([33.9, 75.5], 7);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors"
    }).addTo(map);

    // Add markers using recommendations data (comes from backend API)
    recommendations.forEach(col => {
      L.marker([col.lat, col.lon]).addTo(map)
        .bindPopup(`<b>${col.name}</b><br>District: ${col.district}`);
    });

  } else {
    container.innerHTML = "<p>No matching colleges found.</p>";
  }
});
