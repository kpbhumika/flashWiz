// backend/index.js
require("dotenv").config();
const express = require('express');
const cors = require('cors'); // Import CORS to handle cross-origin requests

const dataRouter = require('./routes/data'); // Import the data routes
const indexRouter = require('./routes/index'); // Import the data routes


const PORT = process.env.PORT || 9000;
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON body parsing

// Use the data routes
app.use('/', indexRouter);
app.use('/api', dataRouter); // Prefix all routes from data.js with /api

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
