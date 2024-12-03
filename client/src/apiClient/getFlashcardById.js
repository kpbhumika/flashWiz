const getFlashcardById = async (flashcardId) => {
  try {
    const response = await fetch(`/api/flashcards/${flashcardId}`);
    if (!response.ok) {
      // Handle errors with appropriate status messages
      const error = new Error(`${response.status} (${response.statusText})`);
      throw error;
    }
    const flashcardData = await response.json();

    // Convert flashcard ID to an integer before returning
    return {
      ...flashcardData,
      id: parseInt(flashcardData.id, 10), // Ensure id is an integer
    };
  } catch (error) {
    console.error("Error in fetch!");
    console.error(error.message);
  }
};

export default getFlashcardById;
