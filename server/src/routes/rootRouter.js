const express = require('express');
const userDeckRouter = require('./api/userDeck.js');

const rootRouter = new express.Router();

rootRouter.use("/api/userDeck", userDeckRouter);


module.exports = rootRouter;