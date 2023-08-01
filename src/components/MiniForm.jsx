"use client";

import { useState } from "react";

async function fetchSearchResults(searchTerm) {
  const response = await fetch(`/Api/AddStudent?q=${searchTerm}`);
  const data = await response.json();
  return data;
}

function MiniForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const data = await fetchSearchResults(searchTerm);
    setSearchResults(data);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form className="flex flex-col mt-[90px] pl-4 items-center">
        <input
          className="border outline-none pl-5 w-[300px] rounded-md h-[40px] mr-2"
          type="search"
          name="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  mt-4"
          type="submit"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MiniForm;
