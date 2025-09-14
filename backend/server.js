// server.js
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const __dirname = path.resolve(); // Needed for ES Modules

// === DeepSeek SDK Client ===
const client = new OpenAI({
  apiKey: process.env.DEEPSK_API_KEY,
  baseURL: "https://api.deepseek.com", // DeepSeek endpoint
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "frontend")));

// Serve pages
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "frontend", "index.html")));
app.get("/profile.html", (req, res) => res.sendFile(path.join(__dirname, "frontend", "profile.html")));
app.get("/recommendations.html", (req, res) => res.sendFile(path.join(__dirname, "frontend", "recommendations.html")));
app.get("/chatbot.html", (req, res) => res.sendFile(path.join(__dirname, "frontend", "chatbot.html")));
app.get("/class10th", (req, res) => res.sendFile(path.join(__dirname, "frontend", "class10th.html")));
app.get("/class12th", (req, res) => res.sendFile(path.join(__dirname, "frontend", "class12th.html")));
app.get("/12-Science-Homepage",(req,res)=>res.sendFile(path.join(__dirname,'frontend',"12-Science-Homepage")));

// Login route
app.post("/login", (req, res) => {
  const { email, password, firstname, lastname, rank, district } = req.body;
  if (email && password && firstname && lastname && rank) {
    res.redirect(`/profile.html?rank=${encodeURIComponent(rank)}&district=${encodeURIComponent(district || "")}`);
  } else {
    res.send("<h3>Please fill all login fields correctly. <a href='/'>Go Back</a></h3>");
  }
});

// Mock colleges database
const colleges = [
  { name: "University of Kashmir", field: "Arts", rank: 1, district: "Srinagar", cutoffRank: 2000 },
  { name: "NIT Srinagar", field: "Technology", rank: 5, district: "Srinagar", cutoffRank: 1200 },
  { name: "University of Jammu", field: "Arts", rank: 6, district: "Jammu", cutoffRank: 2200 },
  { name: "MBS College Jammu", field: "Commerce", rank: 7, district: "Jammu", cutoffRank: 2100 },
  // Add more colleges as needed
];

// Interest mapping
const interestMapping = {
  Mathematics: "Science",
  Science: "Science",
  Literature: "Arts",
  Arts: "Arts",
  Commerce: "Commerce",
  Technology: "Technology",
  "Social Studies": "Arts",
  Languages: "Arts",
  Sports: "Arts",
  Music: "Arts",
};

// Recommendations API
app.post("/recommendations", (req, res) => {
  const { interests = [], district, rank } = req.body;
  let results = [...colleges];

  const mappedInterests = interests.map(i => interestMapping[i] || i);
  if (mappedInterests.length > 0) results = results.filter(c => mappedInterests.includes(c.field));
  if (district && district.trim() !== "") {
    const q = district.trim().toLowerCase();
    results = results.filter(c => (c.district || "").toLowerCase().includes(q));
  }
  if (rank && String(rank).trim() !== "") {
    const userRank = Number(rank);
    results = results.filter(c => c.cutoffRank ? userRank <= c.cutoffRank : true);
  }
  results.sort((a, b) => a.rank - b.rank);

  res.json({ recommendations: results });
});





app.post("/chat", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.json({ reply: "⚠️ Empty message received" });

  console.log("Calling DeepSeek API with message:", message);

  try {
    const completion = await client.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: "You are a helpful assistant answering student questions." },
        { role: "user", content: message },
      ],
    });

    const reply = completion?.choices?.[0]?.message?.content || "⚠️ No response from DeepSeek";
    console.log("Reply received:", reply);

    res.json({ reply });

  } catch (error) {
    console.error("Chatbot error:", error);

    // If DeepSeek API fails, return a mock response for testing
    const mockReply = `You said: "${message}" (this is a mock reply for testing)`;

    if (error.code === "invalid_request_error" && error.error?.message === "Insufficient Balance") {
      return res.status(402).json({ reply: "⚠️ Your DeepSeek account has insufficient balance." });
    }

    // Fallback mock reply
    res.json({ reply: mockReply });
  }
});






// Start server
const PORT = 5500;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));


