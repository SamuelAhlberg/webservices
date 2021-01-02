import React, { Component } from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";

import SearchMovie from "./SearchMovie";


class App extends Component {


  render() {
    return (
      <div>
      <SearchMovie title = "Search Movie" />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />

      </div>
    )
  }
  
}

export default App;
