const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware til at parse JSON
app.use(express.json());

// Serve den byggede React frontend (Vite)
app.use(express.static(path.join(__dirname, "client", "dist")));

// Håndter routing til React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// Start serveren
app.listen(PORT, () => {
  console.log(`✅ Server kører på port ${PORT}`);
});
