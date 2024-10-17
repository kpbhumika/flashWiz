const express = require('express');

const router = express.Router();

// Example route to test the server
router.get("/", (req, res) => {
    res.send("Hello World!");
});

module.exports = router;