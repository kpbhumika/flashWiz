const getPublicDecksByCategories = async (categoryId) => {
  try {
    // Conditionally add categoryId to the query string if it exists
    const url = categoryId
      ? `/api/decks?categoryId=${categoryId}`
      : `/api/decks`;
    const response = await fetch(url);

    if (!response.ok) {
      const error = new Error(`${response.status} (${response.statusText})`);
      throw error;
    }

    const responseData = await response.json();

    // Convert deck IDs to integers before returning
    const decksWithIntegerIds = responseData.decks.map((deck) => ({
      ...deck,
      id: parseInt(deck.id, 10),
    }));

    return decksWithIntegerIds;
  } catch (error) {
    console.error("Error in fetch!");
    console.error(error.message);
  }
};

export default getPublicDecksByCategories;
