import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "frontend"))); // serve frontend

// --- Mock College Data (J&K Government Colleges) ---
const JK_COLLEGES = [
  { name: "Government Degree College, Anantnag", district: "Anantnag", field: "Science", lat: 33.7315, lon: 75.1500 },
  { name: "Government Degree College, Kathua", district: "Kathua", field: "Arts", lat: 32.3776, lon: 75.5169 },
  { name: "Government Degree College, Ganderbal", district: "Ganderbal", field: "Commerce", lat: 34.2556, lon: 74.7760 },
  { name: "Government Degree College, Shopian", district: "Shopian", field: "Science", lat: 33.7159, lon: 74.7898 },
  { name: "Abdul Ahad Azad Memorial Degree College, Bemina", district: "Srinagar", field: "Arts", lat: 34.0918, lon: 74.8058 }
];

// --- Routes ---

// Home (index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    res.sendFile(path.join(__dirname, "frontend", "courses.html"));
  } else {
    res.send("<h3>Please enter correct credentials. <a href='/index.html'>Try again</a></h3>");
  }
});

// Recommendations API
app.post("/recommendations", (req, res) => {
  const { interests } = req.body;

  // Filter colleges based on field
  let results = JK_COLLEGES.filter(college =>
    interests.includes(college.field)
  );

  results.sort((a, b) => a.rank - b.rank);

  res.json({ recommendations: results });
});



// Example Class 10 page
app.get("/class10th", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "class10th.html"));
});

// Example Class 12 page
app.get("/class12th", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "class12th.html"));
});


// --- Start Server ---
const PORT = 5500;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
