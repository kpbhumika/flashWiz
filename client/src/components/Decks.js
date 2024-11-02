
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getUserDecks from "../apiClient/getUserDecks";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Decks = (props) => {
  const [userDecks, setUserDecks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [decksPerPage] = useState(9); // Display 12 decks per page in a grid
  const navigate = useNavigate();

  useEffect(() => {
    getUserDecks().then((decks) => {
      setUserDecks(decks);
    });
  }, []);

  const handleDeckClick = (deckId) => {
    navigate(`/decks/${deckId}/flashcards`);
  };

  const handleAddFlashcard = (deckId) => {
    navigate(`/decks/${deckId}/add-flashcard`);
  };

  // Calculate the decks to display on the current page
  const indexOfLastDeck = currentPage * decksPerPage;
  const indexOfFirstDeck = indexOfLastDeck - decksPerPage;
  const currentDecks = userDecks.slice(indexOfFirstDeck, indexOfLastDeck);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const decks =
    currentDecks &&
    currentDecks.map((deck) => (
      <div className="col-md-4 mb-4" key={deck.id}>
        <div
          className="card h-100 d-flex flex-column"
          style={{
            backgroundColor: "#ffe1ff",
            color: "#433878",
            borderColor: "#433878",
          }}
        >
          <div className="card-body flex-grow-1">
            <h5 className="card-title">{deck.title}</h5>
            <p className="card-text">
              {deck.description || "No description available"}
            </p>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <button
              className="btn btn-primary"
              onClick={() => handleDeckClick(deck.id)}
              style={{ backgroundColor: "#433878", borderColor: "#433878" }}
            >
              Open Deck
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleAddFlashcard(deck.id)}
              style={{ backgroundColor: "#433878", borderColor: "#433878" }}
            >
              Add Flashcard
            </button>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="container">
      {userDecks && userDecks.length > 0 ? (
        <div>
          <div className="row">{decks}</div>
          <div className="d-flex justify-content-center mt-4">
            {Array.from({ length: Math.ceil(userDecks.length / decksPerPage) }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`btn mx-1 ${currentPage === i + 1 ? "active" : ""}`}
                style={{
                  backgroundColor: "#433878",
                  color: "white",
                  borderColor: "#433878",
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="alert alert-info text-center mt-4">
          You don't have any decks yet.
        </div>
      )}
    </div>
  );
};

export default Decks;
