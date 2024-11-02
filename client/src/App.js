import logo from "./logo.svg";
import "./App.css";
import Login from "./auth/Login";
import Layout from "./layout/Layout";
import Profile from "./auth/Profile";
import Authenticate from "./auth/Authentication";
import { AuthProvider } from "./auth/provider/AuthProvider";
import Decks from "./components/Decks";
import Deck from "./components/Deck";
import DeckForm from "./components/DeckForm";
import React, { useEffect, useState, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [message, setMessage] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>Welcome to FlashWiz!!</>,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/profile",
      element: (
        <Authenticate>
          <Profile />
        </Authenticate>
      ),
    },
    {
      path: "/decks",
      element: (
        <Authenticate>
          <Decks />
        </Authenticate>
      ),
    },
    {
      path: "/decks/:deckId/flashcards",
      element: (
        <Authenticate>
          <Deck />
        </Authenticate>
      ),
    },
    {
      path: "/deck/add",
      element: (
        <Authenticate>
          <DeckForm />
        </Authenticate>
      ),
    },
  ]);

  useEffect(() => {
    // Fetch the "Hello World!" message from the backend
    fetch("http://localhost:9000/") // Adjust the URL if necessary
      .then((response) => response.text()) // Get the response as text
      .then((data) => setMessage(data)) // Update the state with the fetched message
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <AuthProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </AuthProvider>
  );
}

export default App;
