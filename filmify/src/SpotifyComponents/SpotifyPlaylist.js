import React from 'react';
import SpotifyTrackList from './SpotifyTrackList';

class SpotifyPlaylist extends React.Component{
    constructor(props){
        super(props);
        this.changeTheName = this.changeTheName.bind(this);

    }
    
    changeTheName(e){
        this.props.onNameChange(e.target.value);
    }

    render() {
        return (
            <div className = "Playlist">
                <input onChange= {this.changeTheName} defaultValue={this.props.playListName}/>
                <SpotifyTrackList isRemoval={true} onRemove={this.props.onRemove} tracks={this.props.playlistTracks}/>
                <button onClick={this.props.onSave} className="Save the playlist">Save the playlist</button>
                
            </div>
        );
    }
    
}
export default SpotifyPlaylist;