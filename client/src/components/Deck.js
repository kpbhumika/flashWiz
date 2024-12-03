import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getFlashcards from "../apiClient/getFlashcards";
import deleteFlashcard from "../apiClient/deleteFlashcard";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Deck.css";
import Dropdown from "react-bootstrap/Dropdown";
import { ButtonGroup } from "react-bootstrap";

const Deck = (props) => {
  const [flashcards, setFlashcards] = useState([]);
  const [deckTitle, setDeckTitle] = useState("");
  const { deckId } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getFlashcards(deckId).then(({ deckTitle, flashcards }) => {
      setDeckTitle(deckTitle);
      setFlashcards(flashcards);
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

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this flashcard?",
    );
    if (!confirmDelete) return;

    try {
      await deleteFlashcard(flashcardId);
      const updatedFlashcards = flashcards.filter(
        (_, index) => index !== currentIndex,
      );
      setFlashcards(updatedFlashcards);

      if (
        currentIndex >= updatedFlashcards.length &&
        updatedFlashcards.length > 0
      ) {
        setCurrentIndex(updatedFlashcards.length - 1);
      } else if (updatedFlashcards.length === 0) {
        setCurrentIndex(0);
      }
    } catch (error) {
      console.error("Failed to delete flashcard:", error);
    }
  };

  const handleEdit = () => {
    const flashcardId = flashcards[currentIndex]?.id;
    navigate(`/decks/${deckId}/flashcards/${flashcardId}/edit`);
  };

  if (!flashcards || flashcards.length === 0) {
    return <p className="text-center pt-5">No flashcards in this deck yet.</p>;
  }

  const currentFlashcard = flashcards[currentIndex];

  return (
    <div className="text-center pt-5">
      <h2>Flashcards for {deckTitle}</h2>

      <div
        className={`card flashcard ${showAnswer ? "flipped" : ""}`}
        onClick={toggleShowAnswer}
        style={{
          position: "relative",
        }}
      >
        <div className="card-front">
          {/* Dropdown positioned in top right */}
          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: "1",
            }}
          >
            <Dropdown
              as={ButtonGroup}
              align="end"
              onClick={(e) => e.stopPropagation()}
            >
              <Dropdown.Toggle
                variant="link"
                className="p-0"
                style={{
                  textDecoration: "none",
                  border: "none",
                  backgroundColor: "transparent",
                  color: "#433878",
                }}
              >
                <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  ⋮
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleEdit}>Edit</Dropdown.Item>
                <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <p>{currentFlashcard.question}</p>
        </div>

        <div className="card-back">
          <p>{currentFlashcard.answer}</p>
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
