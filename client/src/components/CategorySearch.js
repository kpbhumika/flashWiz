import React, { useState, useEffect } from "react";
import getCategories from "../apiClient/getCategories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const CategorySearch = ({ onSearchChange, onCategorySelect, searchTerm }) => {
  const [categories, setCategories] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    };
    fetchCategories();
  }, []);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    onSearchChange(value);
    setShowDropdown(true);
  };

  const handleCategoryClick = (categoryName, id) => {
    onSearchChange(categoryName);
    onCategorySelect(id);
    setShowDropdown(false);
  };

  return (
    <div
      className="position-relative"
      onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
    >
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
        <input
          type="search"
          className="form-control search-bar"
          placeholder="Search or select a category..."
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => setShowDropdown(true)}
          aria-label="Search Categories"
        />
      </div>
      {showDropdown && (
        <ul
          className="dropdown-menu show position-absolute"
          style={{
            top: "100%",
            left: 0,
            zIndex: 1000,
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <li key={category.id}>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() =>
                    handleCategoryClick(category.name, category.id)
                  }
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
