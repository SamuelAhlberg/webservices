import React from 'react'
import './SpotifySearchBar.css'

class SpotifySearchBar extends React.Component{

    constructor(props) {
        super(props);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.search = this.search.bind(this);
        this.state = {
            term: ''
        }
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist"/>
                <button onClick={this.search} className="SearchButton">SEARCH</button>
            </div>
        );
    }
}
export default SpotifySearchBar;