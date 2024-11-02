// postDeck.js

const postDeck = async (deckData) => {
    try {
      const response = await fetch("/api/userDecks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deckData),
      });

      if (!response.ok) {
        throw new Error("Failed to create deck");
      }

      const data = await response.json();
      return data; // Return the response data from the server
    } catch (error) {
      console.error("Error posting deck:", error);
      throw error; // Re-throw the error for further handling if needed
    }
  };

  export default postDeck;
