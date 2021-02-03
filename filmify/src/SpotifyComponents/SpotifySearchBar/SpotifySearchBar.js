import React from "react";
import "./SpotifySearchBar.css";

class SpotifySearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSongName = this.handleSongName.bind(this);
    this.search = this.search.bind(this);
    //this.searchSoundtrack = this.searchSoundtrack.bind(this);
    this.state = {
      term: "",
    };
  }

  handleSongName(event) {
    this.setState({ term: event.target.value });
  }

  search() {
    this.props.onSearch(this.state.term);
  }
  searchSoundtrack(){
    this.props.onSearchSoundtrack();
  }

  render() {
    return (
      <div className="SearchBar">
        <h2 className="playlist_header">Create a playlist for this movie</h2>
        <input
          onChange={this.handleSongName}
          placeholder="Enter A Song, Album, or Artist"
        />
        <button onClick={this.search} className="SearchButton">
          SEARCH
        </button>
    
      </div>
    );
  }
}
export default SpotifySearchBar;
