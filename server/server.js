// Simple Express backend for Profile Management
// Written in a straightforward, human style.

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// Pretend database (in-memory). Data resets when server restarts.
let userProfile = {
  jobTitle: "Software Engineer",
  location: "Muscat",
  salary: 1200,
  workType: "Full-time"
};

// GET -> return saved profile
app.get("/api/profile", (req, res) => {
  console.log("GET /api/profile");
  res.json(userProfile);
});

// PUT -> update profile
app.put("/api/profile", (req, res) => {
  const { jobTitle, location, salary, workType } = req.body || {};

  // minimal validation (keep it simple & human)
  if (!jobTitle || !location || !workType) {
    return res.status(400).json({ message: "jobTitle, location and workType are required." });
  }
  const numericSalary = Number(salary);
  if (Number.isNaN(numericSalary) || numericSalary < 0) {
    return res.status(400).json({ message: "salary must be a positive number." });
  }

  userProfile = { jobTitle, location, salary: numericSalary, workType };
  console.log("Profile updated ->", userProfile);

  res.json({ message: "Profile updated successfully", profile: userProfile });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
