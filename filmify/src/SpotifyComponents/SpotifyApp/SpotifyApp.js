import React from "react";
// import Header from "../../Header";
import Spotify from "../../SpotifyUtil/Spotify";
import SpotifyPlaylist from "../SpotifyPlaylist/SpotifyPlaylist";
import SpotifySearchBar from "../SpotifySearchBar/SpotifySearchBar";
import SpotifySearchResult from "../SpotifySearchResult/SpotifySearchResult";
import "./SpotifyApp.css";
//import SearchMovie from "../../SearchMovie"



class SpotifyApp extends React.Component {
  constructor(props) {
    super(props);
    this.addSong = this.addSong.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    this.playListSave = this.playListSave.bind(this);
    this.search = this.search.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    
   
    this.state = {
      searchResults: [],
      playlistName: this.props.dataFromParent,
      playlistTracks: [],
    };
  }

  addSong(track) {
    //check to see if the track is in playlist by track.id
    let currentPlaylist = this.state.playlistTracks;
    if (currentPlaylist.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    currentPlaylist.push(track);
    this.setState({ playlistTracks: currentPlaylist });
  }

  deleteSong(track) {
    let currentPlaylist = this.state.playlistTracks;
    currentPlaylist = currentPlaylist.filter(
      (currentTrack) => currentTrack.id !== track.id
    );
    this.setState({ playlistTracks: currentPlaylist });
  }

  playListSave() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
    Spotify.playListSave(this.state.playlistName, trackURIs).then(() => {
      this.setState({
    
        playlistTracks: [],
      });
    });
  }

  search(term) {
    Spotify.search(term).then((searchResults) =>
      this.setState({ searchResults: searchResults })
    );
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }


  render() {
    return (
      <div>
        <div className="App">
          <SpotifySearchBar 
          onSearch={this.search}
          
          
           />
          <div className="App-playlist">
            <SpotifySearchResult
              onAdd={this.addSong}
              searchResults={this.state.searchResults}
            />
            <SpotifyPlaylist
              
              onSave={this.playListSave}
              onNameChange={this.updatePlaylistName}
              onRemove={this.deleteSong}
              playlistName={this.props.dataFromParent}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default SpotifyApp;
