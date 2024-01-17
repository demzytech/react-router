// SearchBar.js

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the search query to the parent component or function
    onSearch(query);
  };

  return ( 
    <div className='Searche'>
        <form onSubmit={handleSubmit}>
      <input className='searchinput'
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit" className='searchbtn'>Search</button>
    </form>
    </div>
  );
};

export default SearchBar;