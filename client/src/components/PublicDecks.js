import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import getPublicDecksByCategories from "../apiClient/getPublicDecksByCategories";

const PublicDecks = () => {
  const [decks, setDecks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [decksPerPage] = useState(9);
  const navigate = useNavigate();
  const { categoryId } = useParams();


  useEffect(() => {
    getPublicDecksByCategories(categoryId).then(decks => {
      setDecks(decks)
      console.log(decks)
    })
}, [categoryId])

  const handleDeckClick = (deckId) => {
    navigate(`/decks/${deckId}/flashcards`);
  };

  // Pagination calculations
  const indexOfLastDeck = currentPage * decksPerPage;
  const indexOfFirstDeck = indexOfLastDeck - decksPerPage;
  const currentDecks = decks.slice(indexOfFirstDeck, indexOfLastDeck);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      {decks && decks.length > 0 ? (
        <div>
          <div className="row">
            {currentDecks.map((deck) => (
              <div className="col-md-4 mb-4" key={deck.id}>
                <div
                  className="card h-100 d-flex flex-column clickable-card"
                  style={{
                    backgroundColor: "#ffe1ff",
                    color: "#433878",
                    borderColor: "#433878",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDeckClick(deck.id)}
                >
                  <div className="card-body flex-grow-1">
                    <h5 className="card-title">{deck.title}</h5>
                    <p className="card-text">
                      {deck.description || "No description available"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center mt-4">
            {Array.from({ length: Math.ceil(decks.length / decksPerPage) }, (_, i) => (
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
          No public decks available for this category.
        </div>
      )}
    </div>
  );
};

export default PublicDecks;
