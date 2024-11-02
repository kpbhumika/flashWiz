import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import postDeck from "../apiClient/postDeck"; // Import the postDeck function
import { AuthContext } from "../auth/provider/AuthProvider";

const DeckForm = ({ deck = {}, isEditing = false }) => {
  const [title, setTitle] = useState(deck.title || "");
  const [description, setDescription] = useState(deck.description || "");
  const [isPublic, setIsPublic] = useState(deck.isPublic || false);
  const [error, setError] = useState(""); // State for error handling
  const { isUserFetched, currentUser } = useContext(AuthContext); // Get currentUser from context
  const navigate = useNavigate();

  // Use currentUser.id for userId, if currentUser is not available, default to 0
  const userId = currentUser ? currentUser.id : 0;

  // Marking the function as async
  const handleSubmit = async (e) => {
    e.preventDefault();

    const deckData = {
      title,
      description,
      userId,
      isPublic,
    };

    console.log(deckData);
    try {
      await postDeck(deckData); // Call the postDeck function to send the data
      navigate("/decks"); // Navigate back to the decks list after submission
    } catch (error) {
      setError("Failed to create deck. Please try again."); // Set error message on failure
    }
  };

  return (
    <div className="container mt-5">
      <h2>{isEditing ? "Edit Deck" : "Create Deck"}</h2>
      {error && <div className="alert alert-danger">{error}</div>} {/* Display error if exists */}
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Deck Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="isPublic"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
          />
          <label className="form-check-label" htmlFor="isPublic">
            Make this deck public
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ backgroundColor: "#433878", borderColor: "#433878" }}
        >
          {isEditing ? "Update Deck" : "Create Deck"}
        </button>
      </form>
    </div>
  );
};

export default DeckForm;