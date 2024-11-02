import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import postFlashcard from "../apiClient/postFlashcard"; // Import the postFlashcard function
import { AuthContext } from "../auth/provider/AuthProvider";

const FlashcardForm = ({ flashcard = {}, deckId, isEditing = false }) => {
  const [question, setQuestion] = useState(flashcard.question || "");
  const [answer, setAnswer] = useState(flashcard.answer || "");
  const [error, setError] = useState(""); // State for error handling
  const { isUserFetched, currentUser } = useContext(AuthContext); // Get currentUser from context
  const navigate = useNavigate();

  // Use currentUser.id for userId, if currentUser is not available, default to 0
  const userId = currentUser ? currentUser.id : 0;

  // Marking the function as async
  const handleSubmit = async (e) => {
    e.preventDefault();

    const flashcardData = {
      question,
      answer,
      deckId,
      userId,
    };

    console.log(flashcardData);
    try {
      await postFlashcard(flashcardData); // Call the postFlashcard function to send the data
      navigate(`/decks/${deckId}/flashcards`); // Navigate back to the flashcards list after submission
    } catch (error) {
      setError("Failed to create flashcard. Please try again."); // Set error message on failure
    }
  };

  return (
    <div className="container mt-5">
      <h2>{isEditing ? "Edit Flashcard" : "Create Flashcard"}</h2>
      {error && <div className="alert alert-danger">{error}</div>} {/* Display error if exists */}
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="question" className="form-label">Question</label>
          <input
            type="text"
            className="form-control"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="answer" className="form-label">Answer</label>
          <textarea
            className="form-control"
            id="answer"
            rows="3"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ backgroundColor: "#433878", borderColor: "#433878" }}
        >
          {isEditing ? "Update Flashcard" : "Create Flashcard"}
        </button>
      </form>
    </div>
  );
};

export default FlashcardForm;
