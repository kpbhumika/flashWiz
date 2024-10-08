// backend/index.js
require("dotenv").config();
const express = require('express');
const cors = require('cors'); // Import CORS to handle cross-origin requests
const dataRoutes = require('./routes/data'); // Import the data routes

const app = express();

const PORT = process.env.PORT || 9000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON body parsing

// Example route to test the server
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Use the data routes
app.use('/api', dataRoutes); // Prefix all routes from data.js with /api

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
