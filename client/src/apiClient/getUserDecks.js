const getUserDecks = async () => {
  try {
    const response = await fetch("/api/userDecks");
    if (!response.ok) {
      // Corrected status check
      const error = new Error(`${response.status} (${response.statusText})`);
      throw error;
    }
    const responseData = await response.json();

    // Convert deck IDs to integers before returning
    const decksWithIntegerIds = responseData.decks.map((deck) => ({
      ...deck,
      id: parseInt(deck.id, 10), // Convert id to an integer
    }));

    return decksWithIntegerIds;
  } catch (error) {
    console.error("Error in fetch!");
    console.error(error.message);
  }
};

export default getUserDecks;
