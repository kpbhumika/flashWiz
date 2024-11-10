const getFlashcards = async (deckId) => {
  try {
    const response = await fetch(`/api/flashcards?deckId=${deckId}`);
    if (!response.status) {
      const error = new Error(`${response.status} (${response.statusText})`);
      throw error;
    }
    const responseData = await response.json();
    console.log("responseData", responseData);

    // Extract deckTitle and flashcards from responseData
    const { deckTitle, flashcards } = responseData;

    // Convert flashcard IDs to integers before returning
    const flashcardsWithIntegerIds = flashcards.map((flashcard) => ({
      ...flashcard,
      id: parseInt(flashcard.id, 10), // Convert id to an integer
    }));

    // Return deckTitle and the updated flashcards array
    return { deckTitle, flashcards: flashcardsWithIntegerIds };
  } catch (error) {
    console.error("Error in fetch!");
    console.error(error.message);
  }
};

export default getFlashcards;
