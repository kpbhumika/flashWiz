require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session"); // Add session handling
const passport = require("passport");
const dataRoutes = require("./routes/data");

const app = express();
const PORT = process.env.PORT || 9000;

// Passport configuration
require("./config/passport"); // Import the Passport setup

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Your React app URL
    credentials: true,
  })
);

app.use(express.json());

// Session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Replace with a secure secret
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport and session
app.use(passport.initialize());
app.use(passport.session());

// Example route to test the server
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Google authentication routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login", // Adjust according to your needs
  }),
  (req, res) => {
    // Successful authentication, redirect to frontend
    res.redirect(process.env.CLIENT_URL); // Replace with your frontend URL
  }
);

// Use the data routes
app.use("/api", dataRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
