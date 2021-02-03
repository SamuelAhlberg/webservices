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
    //Search for songs
    this.search();
    
  }

  handleSongName(event) {
    this.setState({ term: event.target.value });
  }

  search() {
    this.props.onSearch(this.state.term);
  }


  render() {
    return (
      <div>
        
      </div>
    );
  }
}
export default SearchSoundTrack;
