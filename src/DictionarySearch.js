import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
      <Results results={results} />
    </div>
  );
}
