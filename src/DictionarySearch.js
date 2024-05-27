import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    const apiKey = "22de0057ea42aa649cbcof0e3b1te784";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
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
    </div>
  );
}
