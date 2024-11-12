import { useState, useEffect } from "react";
import getCategories from "../apiClient/getCategories";

const CategorySearch = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    };
    fetchCategories();
  }, []);

  // Filter categories based on the search term
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowDropdown(true); // Show dropdown when typing
  };

  // Handle selecting a category
  const handleCategoryClick = (categoryName) => {
    setSearchTerm(categoryName); // Set selected category as the search term
    setShowDropdown(false); // Hide dropdown after selection
  };

  // Hide dropdown when clicking outside (optional improvement)
  const handleBlur = () => {
    setTimeout(() => setShowDropdown(false), 200); // Delay to allow click to register
  };

  return (
    <div className="position-relative" onBlur={handleBlur}>
      <input
        type="search"
        className="form-control"
        placeholder="Search or Select Category"
        value={searchTerm}
        onChange={handleSearchChange}
        onFocus={() => setShowDropdown(true)} // Show dropdown on focus
        aria-label="Search Categories"
      />
      {showDropdown && (
        <ul className="dropdown-menu show position-absolute" style={{ top: "100%", left: 0, zIndex: 1000, maxHeight: "200px", overflowY: "auto" }}>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <li key={category.id}>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => handleCategoryClick(category.name)}
                >
                  {category.name}
                </button>
              </li>
            ))
          ) : (
            <li>
              <span className="dropdown-item-text">No results found</span>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default CategorySearch;
