// routes/flashcards.js
const express = require("express");
const Flashcard = require("../../models/Flashcard");

const flashcardRouter = express.Router();

// Fetch all flashcards for a deck
flashcardRouter.get("/", async (req, res) => {
  const deckId = req.query.deckId;
  try {
    const flashcards = await Flashcard.query().where("deckId", deckId);
    return res.status(200).json({ flashcards });
  } catch (error) {
    console.error("Error fetching decks:", error);
    return res
      .status(500)
      .json({ errors: error.message || "Internal Server Error" });
  }
});

// Create a new flashcard
flashcardRouter.post("/", async (req, res) => {
  const { question, answer, deckId } = req.body;

  // Basic validation to check if required fields are provided
  if (!question || !answer || !deckId) {
    return res.status(400).json({ message: "Question, answer, and deckId are required." });
  }

  try {
    // Use Knex and Objection to insert and fetch the newly created flashcard
    const flashcard = await Flashcard.query().insertAndFetch({
      question,
      answer,
      deckId,
    });

    // Respond with a 201 status and the created flashcard object
    res.status(201).json(flashcard);
  } catch (error) {
    console.error("Error creating flashcard:", error);

    // Enhanced error handling: Check if error is validation-related or server-related
    if (error instanceof ValidationError) {
      res.status(400).json({ message: "Validation error", details: error.data });
    } else {
      res.status(500).json({ message: "Server error. Please try again later." });
    }
  }
});

module.exports = flashcardRouter;
