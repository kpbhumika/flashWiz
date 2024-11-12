const express = require("express");
const Deck = require("../../models/Deck");

const deckRouter = express.Router();

// fetch public decks by categoryId
deckRouter.get("/:categoryId", async (req, res) => {
  const userId = req.user.id;
  try {
    const decks = await Deck.query().where("isPublic", true).andWhere("categoryId", req.params.categoryId);
    return res.status(200).json({ decks });
  } catch (error) {
    console.error("Error fetching decks: ", error);
    return res
      .status(500)
      .json({ errors: error.message || "Internal Server Error" });
  }
});

module.exports = deckRouter;