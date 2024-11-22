import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import postDeck from "../apiClient/postDeck";
import updateDeck from "../apiClient/updateDeck";
import getDeckById from "../apiClient/getDeckById"; // Fetch single deck
import getCategories from "../apiClient/getCategories"; // Fetch categories
import { AuthContext } from "../auth/provider/AuthProvider";

const DeckForm = ({ isEditing = false }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  const { isUserFetched, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { deckId } = useParams(); // Get deckId from the URL

  const userId = currentUser ? currentUser.id : 0;

  useEffect(() => {
    // Fetch categories
    const fetchCategories = async () => {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    };

    // Fetch deck data for editing
    const fetchDeckData = async () => {
      if (isEditing && deckId) {
        try {
          const fetchedDeck = await getDeckById(deckId);
          setTitle(fetchedDeck.title); // Prefill title
          setDescription(fetchedDeck.description); // Prefill description
          setIsPublic(fetchedDeck.isPublic); // Prefill visibility
          setCategoryId(fetchedDeck.categoryId); // Prefill category
        } catch (error) {
          console.error("Error fetching deck:", error.message);
          setError("Failed to load the deck. Please try again.");
        }
      }
    };

    fetchCategories();
    fetchDeckData();
  }, [isEditing, deckId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const deckData = {
      title,
      description,
      userId,
      isPublic,
      categoryId,
    };

    try {
      if (isEditing) {
        await updateDeck(deckId, deckData); // Update existing deck
        navigate("/decks");
      } else {
        await postDeck(deckData); // Create new deck
        navigate("/decks");
      }
    } catch (error) {
      setError(
        isEditing
          ? "Failed to update deck. Please try again."
          : "Failed to create deck. Please try again."
      );
    }
  };

  return (
    <div className="container mt-5">
      <h2>{isEditing ? "Edit Deck" : "Create Deck"}</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} className="mt-4">
        {/* Category Dropdown */}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            id="category"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Deck Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="isPublic"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
          />
          <label className="form-check-label" htmlFor="isPublic">
            Make this deck public
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ backgroundColor: "#433878", borderColor: "#433878" }}
        >
          {isEditing ? "Update Deck" : "Create Deck"}
        </button>
      </form>
    </div>
  );
};

export default DeckForm;
