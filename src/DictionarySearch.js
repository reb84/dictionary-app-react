import React, { useState } from "react";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
  }

  return (
    <div className="DictionarySearch">
      <form onSubmit={search}>
        <div className="search-form">
          <input
            type="search"
            className="form-control"
            placeholder="Search for a word.."
            onChange={handleKeywordChange}
          />
          <button type="submit" value="Search" className="search-form-button">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
