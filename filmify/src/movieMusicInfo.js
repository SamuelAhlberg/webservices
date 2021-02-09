import React from "react";
import Spotify from "./SpotifyUtil/Spotify";
import SearchSoundtrack from "./SearchSoundtrack";
import SoundtrackSearchResult from "./SpotifyComponents/SpotifySearchResult/SoundtrackSearchResult";


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
            <SoundtrackSearchResult
          
              searchResults={this.state.searchResults}
            />


            </div>
          </div>
        );
      }


}
export default MovieMusicInfo;