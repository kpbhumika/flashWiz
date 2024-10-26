// routes/flashcards.js
const express = require("express");
const Flashcard = require("../../models/Flashcard");

const flashcardRouter = express.Router();

// Fetch all flashcards for a deck
flashcardRouter.get("/", async (req, res) => {
  const deckId = req.query.deckId;
  try {
    const flashcards = await Flashcard.query().where("deckid", deckId);
    return res.status(200).json({ flashcards });
  } catch (error) {
    console.error("Error fetching decks:", error);
    return res
      .status(500)
      .json({ errors: error.message || "Internal Server Error" });
  }
});

// // Create a new flashcard
// flashcardRouter.post('/', async (req, res) => {
//   const { question, answer, deckId } = req.body;

//   if (!question || !answer || !deckId) {
//     return res.status(400).json({ message: 'Question, answer, and deckId are required.' });
//   }

//   try {
//     const flashcard = await Flashcard.create({ question, answer, deckId });
//     res.status(201).json(flashcard);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// Additional flashcard routes can go here (e.g., GET, UPDATE, DELETE)

module.exports = flashcardRouter;
