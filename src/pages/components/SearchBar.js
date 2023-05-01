import React from 'react';

const SearchBar = () => {
  return (
    <form>
      <input
        type="text" placeholder="Search for Shows..."
        className="px-2 py-2 w-64 border border-gray-400 rounded-md focus:border-red-500"
      />
      <button
        type="submit"
        className="px-4 py-2 border border-red-500 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
