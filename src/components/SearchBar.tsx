import { useState } from "react";
import "../styles/SearchBar.css";

type SearchBarProps = {
  onSearch: (keyword: string) => void;
};

export default function SearchBar({
  onSearch,
}: SearchBarProps) {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}