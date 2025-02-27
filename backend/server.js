const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API route to fetch quiz questions
app.get("/api/questions", async (req, res) => {
    try {
        const response = await axios.get("https://opentdb.com/api.php?amount=10&type=multiple");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch quiz questions" });
    }
});

// Serve frontend build files (only for deployment)
//app.use(express.static(path.join(__dirname, "frontend/build")));
//app.get("*", (req, res) => {
   // res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
//});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
