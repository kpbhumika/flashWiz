import React, { useEffect, useState } from "react";
import getFlashcards from "../apiClient/getFlashcards";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../Deck.css'; // Import custom CSS for flip effect

const Deck = (props) => {
    const [flashcards, setFlashcards] = useState([]);
    const { deckId } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        getFlashcards(deckId).then(flashcards => {
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

    const showAnswerHandler = () => {
        setShowAnswer(prevState => !prevState); // Toggle answer visibility
    };

    if (flashcards.length === 0) {
        return <p>No flashcards in this deck yet.</p>;
    }

    const currentFlashcard = flashcards[currentIndex];

    return (
        <div className="text-center">
            <h2>Flashcards for Deck {deckId}</h2>

            {/* Flashcard container */}
            <div className={`card flashcard ${showAnswer ? 'flipped' : ''}`}>
                <div className="card-front">
                    <p><strong>Question:</strong> {currentFlashcard.question}</p>
                </div>
                <div className="card-back">
                    <p><strong>Answer:</strong> {currentFlashcard.answer}</p>
                </div>
            </div>

            {/* Navigation buttons */}
            <div className="mt-3">
                <button className="btn btn-custom-secondary me-2" onClick={goToPrev} disabled={currentIndex === 0}>
                    Previous
                </button>
                <button className="btn btn-custom-primary" onClick={showAnswerHandler}>
                    {showAnswer ? "Hide Answer" : "Show Answer"}
                </button>
                <button className="btn btn-custom-secondary ms-2" onClick={goToNext} disabled={currentIndex === flashcards.length - 1}>
                    Next
                </button>
            </div>


            <p className="mt-2">Flashcard {currentIndex + 1} of {flashcards.length}</p>
        </div>
    );
}

export default Deck;
