const express = require('express');
const Deck = require('../../models/Deck');

const userDeckRouter = express.Router();

// fetch user decks
userDeckRouter.get("/", async (req, res) => {
    const userID = req.user.id
    try {
        const decks = await Deck.query().where('userid', userID);
        return res.status(200).json({ decks })
    } catch (error) {
        console.error("Error fetching decks:", error);
        return res.status(500).json({ errors: error.message || "Internal Server Error" });
    }
})

module.exports = userDeckRouter;