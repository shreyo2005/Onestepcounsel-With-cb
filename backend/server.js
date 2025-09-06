const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");



const app = express();






// Middleware iska
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("frontend")); // thtml files aanbe

// Mock login credentials (for testing only)
// const mockUser = {
//   email: "test@example.com",
//   password: "123456"
// };

// Login page ke details lene
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  //if (email === mockUser.email && password === mockUser.password) {
    // Redirect krega to course selection page if the emmail and password is correct 
  if(email && password){
    res.sendFile(path.join(__dirname, "frontend", "courses.html"));
  } else {
    res.send("<h3>please enter correct credentials. <a href='/index.html'>Try again</a></h3>");
  }
});

//index.html browser ke pathaabe  
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html","recommendations.html"));
});



// eta colleges recommend korbe.

// Mock college data
const colleges = [
  { name: "IIT Bombay", field: "Mathematics", rank: 1 },
  { name: "NIT Trichy", field: "Mathematics", rank: 2 },
  { name: "DU", field: "Arts", rank: 3 },
  { name: "IIM Ahmedabad", field: "Mathematics", rank: 4 },
  { name: "IIT Delhi", field: "Mathematics", rank: 5 }
];

app.post("/recommendations", (req, res) => {

  console.log("Received data:", req.body); 
  
  const { interests } = req.body;

  let results = colleges.filter(college =>
    interests.includes(college.field)
  );

  results.sort((a, b) => a.rank - b.rank);

  res.json({ recommendations: results });
});


const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
