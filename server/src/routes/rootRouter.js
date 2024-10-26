const express = require("express");
const deckRouter = require("./api/deck.js");
const userDeckRouter = require("./api/userDeck.js");
const flashcardRouter = require("./api/flashcard.js");

const rootRouter = new express.Router();

rootRouter.use("/api/decks", deckRouter);
rootRouter.use("/api/userDecks", userDeckRouter);
rootRouter.use("/api/flashcards", flashcardRouter);

module.exports = rootRouter;
