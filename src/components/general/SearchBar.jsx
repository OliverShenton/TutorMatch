import { useState } from "react";

function SearchBar({ data, onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (onSearch) {
      const filterData = data.filter((item) => item.toLowerCase().includes(value.toLowerCase()));
    }
    onSearch(filterData);
  };
  return (
    <div className="flex items-center w-2/3 mx-auto justify-center mb-8">
      <input
        className="px-3 py-2 border-stone-600 w-full"
        type="text"
        placeholder="Search For Your Tutor Now..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
}

export { SearchBar };
