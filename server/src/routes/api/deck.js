// routes/decks.js
const express = require("express");
const Deck = require("../../models/Deck");

const deckRouter = express.Router();

// Fetch all decks
deckRouter.get("/", async (req, res) => {
  try {
    const decks = await Deck.query();
    return res.status(200).json({ decks: decks });
  } catch (error) {
    console.error("Error fetching decks:", error);
    return res
      .status(500)
      .json({ errors: error.message || "Internal Server Error" });
  }
});

// // Create a new deck
// deckRouter.post('/', async (req, res) => {
//   const { title, userId } = req.body;

//   if (!title || !userId) {
//     return res.status(400).json({ message: 'Title and userId are required.' });
//   }

//   try {
//     const deck = await Deck.create({ title, userId });
//     res.status(201).json(deck);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

module.exports = deckRouter;
