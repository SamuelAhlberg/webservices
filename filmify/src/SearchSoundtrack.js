import React from "react";
class SearchSoundTrack extends React.Component {
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


  render() {
    return (
      <div className="SearchBar">
        <h2 className="playlist_header"></h2>
        <button onClick={this.search} className="SearchButton">
          See Soundtrack
        </button>
      </div>
    );
  }
}
export default SearchSoundTrack;
