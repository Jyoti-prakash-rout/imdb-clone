import React from "react";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }
    const fetchSuggestions = async () => {
      try {
        const response = await fetch(`https://api.datamuse.com/sug?s=${query}`);
        const data = await response.json();
        setSuggestions(data);
        setShowDropdown(true);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };
    fetchSuggestions();
  }, [query]);

  const handleSelect = (word) => {
    setQuery(word);
    setSuggestions([]);
    setShowDropdown(false);
  };
	return (
    <>
      <div className="relative w-full max-w-md mx-auto">
        {/* Input */}
        <input
          type="text"
          value={query} // controlled input
          onChange={(e) => {
            setQuery(e.target.value); // update query state on every keystroke
            setShowDropdown(true); // open dropdown when user types
          }}
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
        />

        {/* Suggestions Dropdown - only show if showDropdown = true and there are suggestions */}
        {showDropdown && suggestions.length > 0 && (
          <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
            {suggestions.map((item) => (
              <li
                key={item.word} // item.word is safe for key because Datamuse returns unique words
                onClick={() => handleSelect(item.word)} // clicking fills the input
                className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                {item.word} {/* Display the suggested word */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchBar;
