// routes/flashcards.js
const express = require('express');
const Flashcard = require('../models/Flashcard');

const router = express.Router();

// Create a new flashcard
router.post('/', async (req, res) => {
  const { question, answer, deckId } = req.body;

  if (!question || !answer || !deckId) {
    return res.status(400).json({ message: 'Question, answer, and deckId are required.' });
  }

  try {
    const flashcard = await Flashcard.create({ question, answer, deckId });
    res.status(201).json(flashcard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Additional flashcard routes can go here (e.g., GET, UPDATE, DELETE)

module.exports = router;
