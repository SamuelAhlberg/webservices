import React from "react";
import Spotify from "../../SpotifyUtil/Spotify";
import SpotifyPlaylist from "../SpotifyPlaylist/SpotifyPlaylist";
import SpotifySearchBar from "../SpotifySearchBar/SpotifySearchBar";
import SpotifySearchResult from "../SpotifySearchResult/SpotifySearchResult";
import "./SpotifyApp.css";

class SpotifyApp extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.state = {
      searchResults: [],
      playlistName: "Playlist Name",
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
