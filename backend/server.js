const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS

// New API route to fetch questions
app.get("/api/questions", async (req, res) => {
  try {
    const response = await axios.get("https://opentdb.com/api.php?amount=10&type=multiple");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({ error: "Failed to fetch questions" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
