const express = require('express');
const deckRouter = require('./api/deck.js')
const userDeckRouter = require('./api/userDeck.js');

const rootRouter = new express.Router();

rootRouter.use("/api/deck", deckRouter);
rootRouter.use("/api/userDeck", userDeckRouter);


module.exports = rootRouter;