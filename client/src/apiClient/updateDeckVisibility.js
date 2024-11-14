const updateDeckVisibility = async (deckId, isPublic) => {
  try {
    const response = await fetch(`/api/userDecks/${deckId}/visibility`, {
      method: "PATCH", // Change to PATCH for partial update
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isPublic }), // Toggle visibility
    });

    if (!response.ok) {
      throw new Error("Failed to update deck visibility");
    }

    const data = await response.json();
    return data; // Return the response data from the server
  } catch (error) {
    console.error("Error updating deck visibility:", error);
    throw error;
  }
};

export default updateDeckVisibility;
