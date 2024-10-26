const express = require("express");
const deckRouter = require("./api/deck.js");
const userDeckRouter = require("./api/userDeck.js");
const flashcardRouter = require("./api/flashcard.js");

const rootRouter = new express.Router();

rootRouter.use("/api/deck", deckRouter);
rootRouter.use("/api/userDeck", userDeckRouter);
rootRouter.use("/api/flashcard", flashcardRouter);

module.exports = rootRouter;
