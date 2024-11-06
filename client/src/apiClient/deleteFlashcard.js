const deleteFlashcard = async (flashcardId) => {
    const id = flashcardId
    try {
        // Make a DELETE request to the endpoint for deleting a specific flashcard
        const response = await fetch(`/api/flashcards/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        // Check if the response is successful
        if (!response.ok) {
            throw new Error("Failed to delete flashcard");
        }

        // Return response data if you need any additional data from the server
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error deleting flashcard:", error);
        throw error; // Re-throw error for further handling if needed
    }
};

export default deleteFlashcard;
