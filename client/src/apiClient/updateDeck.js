const updateDeck = async (deckId, deckData) => {
    try {
      const response = await fetch(`/api/userDecks/${deckId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deckData), // Convert deck data to JSON
      });

      if (!response.ok) {
        // Handle errors with appropriate status messages
        const error = new Error(`${response.status} (${response.statusText})`);
        throw error;
      }

      // Parse and return the updated deck
      const updatedDeck = await response.json();
      return {
        ...updatedDeck,
        id: parseInt(updatedDeck.id, 10), // Ensure id is an integer
      };
    } catch (error) {
      console.error("Error in update!");
      console.error(error.message);
    }
  };

  export default updateDeck;
