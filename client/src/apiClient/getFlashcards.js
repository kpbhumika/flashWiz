const getFlashcards = async (deckId) => {
  try {
    const response = await fetch(`/api/flashcards?deckId=${deckId}`);
    if (!response.status) {
      const error = new Error(`${response.status} (${response.statusText})`);
      throw error;
    }
    const responseData = await response.json();

    // Convert flashcard IDs to integers before returning
    const flashcardsWithIntegerIds = responseData.flashcards.map((flashcard) => ({
      ...flashcard,
      id: parseInt(flashcard.id, 10), // Convert id to an integer
    }));

    return flashcardsWithIntegerIds;
  } catch (error) {
    console.error("Error in fetch!");
    console.error(error.message);
  }
};

export default getFlashcards;
