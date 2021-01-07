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
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
   // this.searchMovieResult = this.searchMovieResult.bind(this);
    //this.spotifyTitle = this.spotifyTitle.bind(this);
    this.state = {
      searchResults: [],
      playlistName: "New Playlist",
      playlistTracks: [],
    };
  }

  addTrack(track) {
    //check to see if the track is in playlist by track.id
    let currentPlaylist = this.state.playlistTracks;
    if (currentPlaylist.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    currentPlaylist.push(track);
    this.setState({ playlistTracks: currentPlaylist });
  }

  removeTrack(track) {
    let currentPlaylist = this.state.playlistTracks;
    currentPlaylist = currentPlaylist.filter(
      (currentTrack) => currentTrack.id !== track.id
    );
    this.setState({ playlistTracks: currentPlaylist });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: "Playlist Name",
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
// Ett till försök
/*  spotifyTitle(movie){
    let currentTitle = this.state.playlistName;
    currentTitle.push(movie)
    this.setState({playlistName : currentTitle})
  }*/
  // Försök på att lösa med att filmen dyker upp som titel...
 /* searchMovieResult(term){
   SearchMovie.performSearch(term).then((result) => this.setState({result : result}))
  }*/

  render() {
    return (
      <div>
        <div className="App">
          <SpotifySearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SpotifySearchResult
              onAdd={this.addTrack}
              searchResults={this.state.searchResults}
            />
            <SpotifyPlaylist
              onSave={this.savePlaylist}
              onNameChange={this.updatePlaylistName}
              onRemove={this.removeTrack}
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default SpotifyApp;
