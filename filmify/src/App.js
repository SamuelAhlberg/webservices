import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Nav from "./Nav";
import SearchMovie from "./SearchMovie";

function App() {
  return (
    <div className="App">
      <Nav />

      <SearchMovie SearchMovie={requests.searchMovie} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
    </div>
  );
}

export default App;
