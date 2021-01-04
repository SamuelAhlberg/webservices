import React from "react";
import Row from "./Row";
import requests from "./requests";

import SearchMovie from "./SearchMovie";
//import SpotifyApp from './SpotifyComponents/SpotifyApp/SpotifyApp';


class App extends React.Component {
  



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
