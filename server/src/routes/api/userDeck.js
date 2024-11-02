const express = require("express");
const Deck = require("../../models/Deck");
const { ValidationError } = require("objection");

const userDeckRouter = express.Router();

// fetch user decks
userDeckRouter.get("/", async (req, res) => {
  const userId = req.user.id;
  try {
    const decks = await Deck.query().where("userId", userId);
    return res.status(200).json({ decks });
  } catch (error) {
    console.error("Error fetching decks:", error);
    return res
      .status(500)
      .json({ errors: error.message || "Internal Server Error" });
  }
});

// Create a new deck
userDeckRouter.post("/", async (req, res) => {
  console.log(req.body);
  const { title, userId, description = "", isPublic = false } = req.body; // Add optional fields with default values

  // Basic validation to check if required fields are provided
  if (!title || !userId) {
    return res.status(400).json({ message: "Title and userId are required." });
  }

  try {
    // Use Knex and Objection to insert and fetch the newly created deck
    const deck = await Deck.query().insertAndFetch({
      title,
      userId,
      description,
      isPublic,
    });

    // Respond with a 201 status and the created deck object
    res.status(201).json(deck);
  } catch (error) {
    console.error("Error creating deck:", error);

    // Enhanced error handling: Check if error is validation-related or server-related
    if (error instanceof ValidationError) {
      res.status(400).json({ message: "Validation error", details: error.data });
    } else {
      res.status(500).json({ message: "Server error. Please try again later." });
    }
  }
});


module.exports = userDeckRouter;