import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getUserDecks from "../apiClient/getUserDecks";

const Decks = (props) => {
    const [userDecks, setUserDecks] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        getUserDecks().then(decks => {
            setUserDecks(decks)
        }, [])
    })

    const handleDeckClick = (deckId) => {
        navigate(`/flashcard/${deckId}`);
    };

    const decks = userDecks.map((deck) => (
        <button
            key={deck.id}
            onClick={() => handleDeckClick(deck.id)}
        >
            {deck.title}
        </button>
    ));

    return (
        <div>
            {userDecks.length == 0 ? <h3>You don't have any listings yet.</h3> : (
                <div> {decks} </div>
            )}
        </div>
    )
}

export default Decks;