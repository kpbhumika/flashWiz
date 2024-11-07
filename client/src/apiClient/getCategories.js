// getCategories.js
const getCategories = async () => {
    try {
      const response = await fetch("/api/categories");

      // Check if response is successful
      if (!response.ok) {
        const error = new Error(`${response.status} (${response.statusText})`);
        throw error;
      }

      const responseData = await response.json();

      // Convert category IDs to integers before returning
      const categoriesWithIntegerIds = responseData.categories.map((category) => ({
        ...category,
        id: parseInt(category.id, 10), // Convert id to an integer
      }));

      return categoriesWithIntegerIds;
    } catch (error) {
      console.error("Error fetching categories!");
      console.error(error.message);
      return []; // Return an empty array on error
    }
  };

  export default getCategories;
