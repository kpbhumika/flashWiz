const express = require("express");
const userDeckRouter = require("./api/userDeck.js");
const flashcardRouter = require("./api/flashcard.js");

const rootRouter = new express.Router();

rootRouter.use("/api/userDecks", userDeckRouter);
rootRouter.use("/api/flashcards", flashcardRouter);

module.exports = rootRouter;
