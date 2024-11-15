// deleteDeck.js

const deleteDeck = async (deckId) => {
  try {
    const response = await fetch(`/api/userDecks/${deckId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete deck");
    }

    const data = await response.json();
    return data; // Return the response data from the server
  } catch (error) {
    console.error("Error deleting deck:", error);
    throw error; // Re-throw the error for further handling if needed
  }
};

export default deleteDeck;
