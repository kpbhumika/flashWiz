import React, { useState } from "react";
import CategorySearch from "../components/CategorySearch";
import PublicDecks from "../components/PublicDecks";

const StudyPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="container mt-4">
      <CategorySearch
        onSearchChange={handleSearchChange}
        onCategorySelect={handleCategorySelect}
        searchTerm={searchTerm}
      />
      <PublicDecks categoryId={selectedCategoryId} searchTerm={searchTerm} />
    </div>
  );
};

export default StudyPage;
