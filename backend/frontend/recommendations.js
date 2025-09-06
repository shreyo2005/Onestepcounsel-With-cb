document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("recommendations");
    const recommendations = JSON.parse(localStorage.getItem("recommendations")) || [];

    if (recommendations.length > 0) {
        recommendations.forEach(college => {
            let p = document.createElement("p");
            p.textContent = `${college.name} (${college.field}) - Rank ${college.rank}`;
            container.appendChild(p);
        });
    } else {
        container.innerHTML = "<p>No matching colleges found.</p>";
    }
});
