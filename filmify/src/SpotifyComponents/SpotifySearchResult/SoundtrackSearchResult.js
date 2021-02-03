import React from "react";
import SpotifySoundTrackList from "../SpotifyTrackList/SpotifySoundTrackList";
import SpotifyTrackList from "../SpotifyTrackList/SpotifyTrackList";
import "./SpotifySearchResult.css";

class SoundtrackSearchResult extends React.Component {
  render() {
    return (
      <div className="SoundtrackSearchResults">
        <h2>Recommended Songs</h2>
        <SpotifySoundTrackList
          tracks={this.props.searchResults}
        />
      </div>
    );
  }
}
export default SoundtrackSearchResult;
