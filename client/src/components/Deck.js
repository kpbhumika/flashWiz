import React, {useEffect, useState} from "react";
import getFlashcards from "../apiClient/getFlashcards";
import { useParams } from "react-router-dom";

const Deck = (prop) => {
    const [flashcards, setFlashcards] = useState([0])
    const {deckId} = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        getFlashcards(deckId).then(flashcards => {
            setFlashcards(flashcards)
        }, [deckId])
    })

    // Handle going to the next flashcard
    const goToNext = () => {
        if (currentIndex < flashcards.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Handle going to the previous flashcard
    const goToPrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // If there are no flashcards, show a message
    if (flashcards.length === 0) {
        return <p>No flashcards in this deck yet.</p>;
    }

    // Get the current flashcard to display
    const currentFlashcard = flashcards[currentIndex];

    return (
        <div>
            <h2>Flashcards for Deck {deckId}</h2>

            {/* Show the current flashcard */}
            <div>
                <p><strong>Question:</strong> {currentFlashcard.question}</p>
                <p><strong>Answer:</strong> {currentFlashcard.answer}</p>
            </div>

            {/* Navigation buttons */}
            <div>
                <button onClick={goToPrev} disabled={currentIndex === 0}>
                    Previous
                </button>
                <button onClick={goToNext} disabled={currentIndex === flashcards.length - 1}>
                    Next
                </button>
            </div>

            {/* Display flashcard number */}
            <p>Flashcard {currentIndex + 1} of {flashcards.length}</p>
        </div>
    );

}


export default Deck