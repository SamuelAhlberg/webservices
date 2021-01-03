import React from 'react';
import SpotifyTrackList from '../SpotifyTrackList/SpotifyTrackList'
import './SpotifySearchResult.css'

class SpotifySearchResult extends React.Component{

    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <SpotifyTrackList onAdd={this.props.onAdd} tracks={this.props.searchResults} />
            </div>
        )
    }

}
export default SpotifySearchResult;