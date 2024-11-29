import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import postFlashcard from "../apiClient/postFlashcard";
import updateFlashcard from "../apiClient/updateFlashcard";
import getFlashcardById from "../apiClient/getFlashcardById"; // Fetch flashcard by ID

const FlashcardForm = ({ isEditing = false }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { deckId: deckIdParam, flashcardId } = useParams();
  const deckId = parseInt(deckIdParam, 10);

  // Fetch flashcard data for editing
  useEffect(() => {
    if (isEditing && flashcardId) {
      const fetchFlashcardData = async () => {
        try {
          const fetchedFlashcard = await getFlashcardById(flashcardId);
          setQuestion(fetchedFlashcard.question); // Prefill question
          setAnswer(fetchedFlashcard.answer); // Prefill answer
        } catch (error) {
          console.error("Error fetching flashcard:", error.message);
          setError("Failed to load the flashcard. Please try again.");
        }
      };

      fetchFlashcardData();
    }
  }, [isEditing, flashcardId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const flashcardData = {
      question,
      answer,
      deckId,
    };

    try {
      if (isEditing) {
        await updateFlashcard(flashcardId, flashcardData); // Update existing flashcard
        navigate(`/decks/${deckId}/flashcards`);
      } else {
        await postFlashcard(flashcardData); // Create new flashcard
        navigate(`/decks/${deckId}/flashcards`);
      }
    } catch (error) {
      setError("Failed to " + (isEditing ? "update" : "create") + " flashcard. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>{isEditing ? "Edit Flashcard" : "Create Flashcard"}</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="question" className="form-label">
            Question
          </label>
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
          <label htmlFor="answer" className="form-label">
            Answer
          </label>
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
