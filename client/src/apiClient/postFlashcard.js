// postDeck.js

const postFlashcard = async (flashcardData) => {
  try {
    const response = await fetch("/api/flashcards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(flashcardData),
    });

    if (!response.ok) {
      throw new Error("Failed to create flashcard");
    }

    const data = await response.json();
    return data; // Return the response data from the server
  } catch (error) {
    console.error("Error posting deck:", error);
    throw error; // Re-throw the error for further handling if needed
  }
};

export default postFlashcard;
