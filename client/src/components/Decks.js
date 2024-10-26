import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getUserDecks from "../apiClient/getUserDecks";

const Decks = (props) => {
  const [userDecks, setUserDecks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUserDecks().then((decks) => {
      setUserDecks(decks);
    }, []);
  });

  const handleDeckClick = (deckId) => {
    navigate(`/flashcard/${deckId}`);
  };

  const decks =
    userDecks &&
    userDecks.map((deck) => (
      <button key={deck.id} onClick={() => handleDeckClick(deck.id)}>
        {deck.title}
      </button>
    ));

  return (
    <div>
      {userDecks && userDecks.length > 0 ? (
        <div> {decks} </div>
      ) : (
        <>You don't have any decks yet.</>
      )}
    </div>
  );
};

export default Decks;
