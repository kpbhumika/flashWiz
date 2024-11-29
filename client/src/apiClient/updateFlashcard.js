const updateFlashcard = async (flashcardId, flashcardData) => {
    try {
      const response = await fetch(`/api/flashcards/${flashcardId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(flashcardData),
      });

      if (!response.ok) {
        const error = new Error(`${response.status} (${response.statusText})`);
        throw error;
      }

      const updatedFlashcard = await response.json();
      return {
        ...updatedFlashcard,
        id: parseInt(updatedFlashcard.id, 10),
      };
    } catch (error) {
      console.error("Error in updateFlashcard!");
      console.error(error.message);
    }
  };

  export default updateFlashcard;
