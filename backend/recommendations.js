// const express = require("express");
// const router = express.Router();

// // Mock college data
// const colleges = [
//   { name: "IIT Bombay", field: "Engineering", rank: 1 },
//   { name: "NIT Trichy", field: "Engineering", rank: 2 },
//   { name: "DU", field: "Arts", rank: 3 }
// ];

// router.post("/recommend-colleges", (req, res) => {
// console.log("Incoming Data:", req.body);
//   const { interests } = req.body;

//   let results = colleges.filter(college =>
//     interests.includes(college.field)
//   );

//   results.sort((a, b) => a.rank - b.rank);

//   res.json({ recommendations: results });
// });

// module.exports = router;
// router.post("/recommend-colleges", (req, res) => {
//   console.log("Received:", req.body);  // 👀 check this
//   const { interests } = req.body;

//   let results = colleges.filter(college =>
//     interests.map(i => i.toLowerCase()).includes(college.field.toLowerCase())
//   );

//   res.json({ recommendations: results });
// });

