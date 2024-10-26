const getUserDecks = async () => {
  try {
    const response = await fetch("/api/userDecks");
    if (!response.status) {
      const error = new Error(`${response.status} (${response.statusText})`);
      throw error;
    }
    const responseData = await response.json();
    return responseData.decks;
  } catch (error) {
    console.error("Error in fetch!");
    console.error(error.message);
  }
};

export default getUserDecks;
