const getFlashcards = async (deckId) => {
    try {
        const response = await fetch(`/api/flashcard/${deckId}`)
        if (!response.status) {
            const error = new Error(`${response.status} (${response.statusText})`);
            throw error;
        }
        const responseData = await response.json();
        return responseData.flashcards
    } catch(error){
        console.error("Error in fetch!");
        console.error(error.message);
    }
}

export default getFlashcards

