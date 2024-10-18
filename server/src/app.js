// backend/index.js
require("dotenv").config();
const express = require('express');
const cors = require('cors'); // Import CORS to handle cross-origin requests
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
var csrf = require('csurf');
var passport = require('passport');
const pool = require('./db'); // Import the database connection
const dataRouter = require('./routes/data');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');


const PORT = process.env.PORT || 9000;
const app = express();

// Step1: Middleware
app.use(cors({credentials: true})); // Enable CORS
app.use(session({
    secret: 'keyboard cat',
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    store: new pgSession(
        {
            pool: pool,
            tableName: 'session'
            // TODO: convert to migration file. Added the table from here: https://github.com/voxpelli/node-connect-pg-simple/blob/HEAD/table.sql
        }
    )
})); //Add session middleware
app.use(csrf());
app.use(passport.authenticate('session'));
app.use(express.json()); // Enable JSON body parsing

// Step2: Use the data routes
app.use('/', indexRouter);
app.use('/', authRouter); // Prefix all routes from data.js with /api
app.use('/api', dataRouter); // Prefix all routes from data.js with /api

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
