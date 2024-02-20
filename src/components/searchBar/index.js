
import { useState } from 'react';
import './index.css'; 
const SearchBar = ({ onSearch,query, setQuery }) => {
  

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
