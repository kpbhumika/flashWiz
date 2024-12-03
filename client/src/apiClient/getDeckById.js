const getDeckById = async (deckId) => {
  try {
    const response = await fetch(`/api/decks/${deckId}`);
    if (!response.ok) {
      // Handle errors with appropriate status messages
      const error = new Error(`${response.status} (${response.statusText})`);
      throw error;
    }
    const deckData = await response.json();

    // Convert deck ID to an integer before returning
    return {
      ...deckData,
      id: parseInt(deckData.id, 10), // Ensure id is an integer
    };
  } catch (error) {
    console.error("Error in fetch!");
    console.error(error.message);
  }
};

export default getDeckById;
