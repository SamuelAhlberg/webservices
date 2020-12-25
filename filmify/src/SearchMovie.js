import React, { useEffect } from "react";
import axios from "./axios";
import "./SearchMovie.css";

function SearchMovie() {
  useEffect(() => {});

  //Här har vi vår clickHandler, detta ska skicka oss till en ny sida. Hitta funktion för detta.
  const handleClick = (button) => {
    alert("HEJ!");
  };
  return (
    <div className="search">
      <h2>Search Movie</h2>

      <div>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Title here.."
        />
      </div>

      <div className="search_function">
        <button className="button">Search</button>
      </div>
    </div>
  );
}

export default SearchMovie;
