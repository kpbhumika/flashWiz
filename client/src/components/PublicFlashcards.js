import React, { useEffect, useState } from "react";
import getFlashcards from "../apiClient/getFlashcards";
import { useParams } from "react-router-dom";
import "../Deck.css";

const PublicFlashcards = (props) => {
  const [flashcards, setFlashcards] = useState([]);
  const [deckTitle, setDeckTitle] = useState("");
  const { deckId } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    getFlashcards(deckId).then(({ deckTitle, flashcards }) => {
      setDeckTitle(deckTitle); // Set the deck title in state
      setFlashcards(flashcards); // Set the flashcards in state
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
      >
        <div className="card-front">
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

export default PublicFlashcards;
