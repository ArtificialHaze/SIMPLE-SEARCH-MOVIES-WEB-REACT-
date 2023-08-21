import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = async () => {
    const response = await fetch(`[MOVIE_DATA_BASE_API_URL]/${searchText}`);
    const data = await response.json();
    onSearch(data.movies);
  };

  return (
    <div className="searchBox">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search.."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
