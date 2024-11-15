import React, { useEffect, useState } from "react";
import getPublicDecksByCategories from "../apiClient/getPublicDecksByCategories";
import { useNavigate } from "react-router-dom";

const PublicDecks = ({ categoryId, searchTerm }) => {
  const [decks, setDecks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [decksPerPage] = useState(9);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDecks = async () => {
      setIsLoading(true);
      let response;

      // Fetch decks based on categoryId; if no category, fetch all decks
      if (categoryId) {
        response = await getPublicDecksByCategories(categoryId);
      } else {
        response = await getPublicDecksByCategories(); // Fetch all decks
      }

      setDecks(response || []); // Ensure response is not null
      setIsLoading(false);
    };

    // Fetch decks initially and whenever categoryId or searchTerm changes
    fetchDecks();
  }, [categoryId, searchTerm]);

  const handleDeckClick = (deckId) => {
    navigate(`/decks/public/${deckId}/flashcards`);
  };

  const indexOfLastDeck = currentPage * decksPerPage;
  const indexOfFirstDeck = indexOfLastDeck - decksPerPage;
  const currentDecks = decks.slice(indexOfFirstDeck, indexOfLastDeck);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <span>Loading...</span>
        </div>
      ) : (
        <>
          {decks.length > 0 ? (
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
                {Array.from(
                  { length: Math.ceil(decks.length / decksPerPage) },
                  (_, i) => (
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
                  ),
                )}
              </div>
            </div>
          ) : (
            <div className="alert alert-info text-center mt-4">
              No decks available.
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PublicDecks;
