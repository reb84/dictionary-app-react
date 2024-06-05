import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
        <div className="hint">
          for example: <em>sunset, forest, rainbow...</em>
        </div>
      </section>
      <Results results={results} />
    </div>
  );
}
