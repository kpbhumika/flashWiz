import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import getCategories from "../apiClient/getCategories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const CategorySearch = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
// const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    };
    fetchCategories();
  }, []);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowDropdown(true);
  };

  const handleCategoryClick = (categoryName, id) => {
    setSearchTerm(categoryName);
    setCategoryId(id);
    setShowDropdown(false);
  };

  const handleSearch = () => {
    if (categoryId) {
      console.log("category selected");
      // navigate(`/decks/public?categoryId=${categoryId}`);
    } else {
      console.log("No category selected");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="position-relative" onBlur={() => setTimeout(() => setShowDropdown(false), 200)}>
      <div className="d-flex">
        <input
          type="search"
          className="form-control"
          placeholder="Search or Select Category"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowDropdown(true)}
          aria-label="Search Categories"
        />
        <button
          className="btn ml-2"
          style={{ backgroundColor: "#433878", color: "white" }}
          onClick={handleSearch}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      {showDropdown && (
        <ul className="dropdown-menu show position-absolute" style={{ top: "100%", left: 0, zIndex: 1000, maxHeight: "200px", overflowY: "auto" }}>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <li key={category.id}>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => handleCategoryClick(category.name, category.id)}
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
