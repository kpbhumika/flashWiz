import React, { useEffect, useState } from "react";
import getFlashcards from "../apiClient/getFlashcards";
import deleteFlashcard from "../apiClient/deleteFlashcard";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Deck.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Deck = (props) => {
  const [flashcards, setFlashcards] = useState([]);
  const [deckTitle, setDeckTitle] = useState("");
  const { deckId } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    getFlashcards(deckId).then(({ deckTitle, flashcards }) => {
      setDeckTitle(deckTitle);     // Set the deck title in state
      setFlashcards(flashcards);    // Set the flashcards in state
    });
  }, [deckId]);


  const goToNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
    }
  };

  const toggleShowAnswer = () => {
    setShowAnswer((prevState) => !prevState);
  };

  const handleDelete = async () => {
    const flashcardId = flashcards[currentIndex]?.id;

    // Ask for user confirmation before deletion
    const confirmDelete = window.confirm("Are you sure you want to delete this flashcard?");
    if (!confirmDelete) return;

    try {
      await deleteFlashcard(flashcardId);
      const updatedFlashcards = flashcards.filter((_, index) => index !== currentIndex);
      setFlashcards(updatedFlashcards);

      // Adjust current index if we delete the last flashcard
      if (currentIndex >= updatedFlashcards.length && updatedFlashcards.length > 0) {
        setCurrentIndex(updatedFlashcards.length - 1);
      } else if (updatedFlashcards.length === 0) {
        setCurrentIndex(0);
      }
    } catch (error) {
      console.error("Failed to delete flashcard:", error);
    }
  };


  if (!flashcards || flashcards.length === 0) {
    return <p>No flashcards in this deck yet.</p>;
  }

  const currentFlashcard = flashcards[currentIndex];

  return (
    <div className="text-center">
      <h2>Flashcards for {deckTitle}</h2>

      <div
        className={`card flashcard ${showAnswer ? "flipped" : ""}`}
        onClick={toggleShowAnswer}
      >
        <div className="card-front">
          <button
            className="btn btn-danger btn-sm delete-button"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
            aria-label="Delete flashcard"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <p>
            <strong>Question:</strong> {currentFlashcard.question}
          </p>
        </div>

        <div className="card-back">
          <p>
            <strong>Answer:</strong> {currentFlashcard.answer}
          </p>
        </div>
      </div>

      <div className="mt-3">
        <button
          className="btn btn-custom-secondary me-2"
          onClick={goToPrev}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          className="btn btn-custom-secondary ms-2"
          onClick={goToNext}
          disabled={currentIndex === flashcards.length - 1}
        >
          Next
        </button>
      </div>

      <p className="mt-2">
        Flashcard {currentIndex + 1} of {flashcards.length}
      </p>
    </div>
  );
};

export default Deck;
