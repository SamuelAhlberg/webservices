import React from "react";
import SpotifyApp from "./SpotifyComponents/SpotifyApp/SpotifyApp";
import SpotifySoundTrackSearchResult from "./SpotifyComponents/SpotifySearchResult/SpotifySearchResult";
import Spotify from "./SpotifyUtil/Spotify";
import SearchSoundtrack from "./SearchSoundtrack";


class MovieMusicInfo extends React.Component{
  constructor(props){
    super(props);
    this.search = this.search.bind(this);

    this.state = {
      searchResults: [],
  
    };

}

    search(term) {
        Spotify.searchSoundtrack(this.props.soundtrackData).then((searchResults) =>
          this.setState({ searchResults: searchResults })
        );
      }
      render() {
        return (
          <div className="SearchSoundtrack">
          <SearchSoundtrack
          onSearch={this.search}
      
          
          
           />
            <div classname = "Soundtracks">
            <SpotifySoundTrackSearchResult
          
              searchResults={this.state.searchResults}
            />


            </div>
          </div>
        );
      }


}
export default MovieMusicInfo;