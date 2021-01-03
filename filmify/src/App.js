import React, { Component } from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Nav from "./Nav";

import SearchMovie from "./SearchMovie";
import SpotifyApp from './SpotifyComponents/SpotifyApp';


class App extends Component {


  render() {
    return (
      <div>
      <Nav/>
      <SearchMovie title = "Search Movie" />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
      <SpotifyApp/>

      </div>
    )
  }
  
}

export default App;
