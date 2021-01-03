import React from "react";
import SpotifyAPI from "./SpotifyAPI";
import SpotifyPlaylist from "./SpotifyPlaylist";
import SpotifySearchBar from "./SpotifySearchBar";
import SpotifySearchResult from "./SpotifySearchResult";

class SpotifyApp extends React.Component{

    constructor(props){
        super(props);
        this.addTrack =this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.savePlaylist =this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.state={
            searchResults: [],
            playlistName: 'New Playlist',
            playlistTracks: []
        }
    }
    addTrack(track){
        let currentPlaylist = this.state.playlistTracks;
        if(currentPlaylist.find(savedTrack => savedTrack.id === track.id)){
            return;
        }
        currentPlaylist.push(track)
        this.setState({playlistTracks: currentPlaylist})
    }
    removeTrack(track){
        let currentPlaylist = this.state.playlistTracks;
        currentPlaylist = currentPlaylist.filter(currentTrack => currentTrack.id !== track.id);
        this.setState({playlistTracks: currentPlaylist})
    }
    savePlaylist(){
        const trackURIs = this.state.playlistTracks.map(track => track.uri);
        SpotifyAPI.savePlaylist(this.state.playlistName, trackURIs)
        .then(() => {
            this.setState({
                playlistName: 'New Playlist',
                playlistTracks: []
            });
        });

    }
    search(term){
        SpotifyAPI.search(term)
            .then(searchResults => this.setState({searchResults: searchResults}))
    }

    updatePlaylistName(name){
        this.setState({playlistName: name})
    }


    render(){
        return(
        <div>
            <h1>Filmify</h1>
            <div className = "SpotifyApp" >
                <SpotifySearchBar onsearch ={this.search}/>
                <div className = "App-playlist">
                    <SpotifySearchResult onAdd ={this.addTrack} searchResults = {this.state.searchResults}/>
                    <SpotifyPlaylist onSave ={this.savePlaylist} onNameChange= {this.updatePlaylistName} onRemove = {this.removeTrack} playlistName ={this.state.playlistName} playlistTracks ={this.state.playlistTracks}/>
                     </div>
            </div>
        </div>
        )
    }
}
export default SpotifyApp;