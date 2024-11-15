const express = require("express");
const Deck = require("../../models/Deck");

const deckRouter = express.Router();

// fetch public decks by categoryId
deckRouter.get("/", async (req, res) => {
  const categoryId = req.query.categoryId;

  try {
    // Start building the query for public decks
    let deckQuery = Deck.query().where("isPublic", true);

    // Apply categoryId filter only if it exists
    if (categoryId) {
      deckQuery = deckQuery.andWhere("categoryId", categoryId);
    }

    const decks = await deckQuery;
    return res.status(200).json({ decks });
  } catch (error) {
    console.error("Error fetching decks: ", error);
    return res
      .status(500)
      .json({ errors: error.message || "Internal Server Error" });
  }
});


module.exports = deckRouter;
