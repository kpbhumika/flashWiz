// routes/decks.js
const express = require("express");
const Deck = require("../../models/Deck");

const deckRouter = express.Router();

// Fetch all decks that are public
deckRouter.get("/", async (req, res) => {
  try {
    const decks = await Deck.query().where("is_public", true);
    return res.status(200).json({ decks: decks });
  } catch (error) {
    console.error("Error fetching decks:", error);
    return res
      .status(500)
      .json({ errors: error.message || "Internal Server Error" });
  }
});


module.exports = deckRouter;