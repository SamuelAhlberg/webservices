import React from 'react';
import SpotifyTrackList from '../SpotifyTrackList/SpotifyTrackList';
import './SpotifyPlayList.css'

class SpotifyPlaylist extends React.Component{
   
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        this.props.onNameChange(e.target.value);
    }

    render() {
      return (
          <div className="Playlist">
              <input onChange={this.handleNameChange} defaultValue={this.props.playlistName}/>
              <SpotifyTrackList isRemoval={true} onRemove={this.props.onRemove} tracks={this.props.playlistTracks} />
              <button onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
          </div>
      );
    }
}
export default SpotifyPlaylist;