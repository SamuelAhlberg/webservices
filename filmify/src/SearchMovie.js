import React, {  } from "react";
import "./SearchMovie.css";
import $ from 'jquery';
import SearchBar from './SearchBar.js'

class SearchMovie extends React.Component {

  constructor(props){
    super(props);
    this.state = {}

    this.performSearch("");

  }

  performSearch(searchTerm){
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=cebb8c0daf10740c88a24bd1e20e262e&language=en-US&page=1&include_adult=false&query=" + searchTerm
    $.ajax({
      url : urlString,
      success: (searchResults) =>{
        console.log("Fetched data sucessfully");
        console.log(searchResults);

        const results = searchResults.results

        var movieRows =[]
       
        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/original/" + movie.poster_path

          console.log(movie.poster);
          const movieRow = <SearchBar key ={movie.id} movie = {movie}/>
          movieRows.push(movieRow)
        })
       this.setState({rows: movieRows})
      },
      error: (xhr, status, err) =>{ 
        console.error("Failed");
      }
    })
      
  
  }
  searchChangeHandler(event){
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
    
  }

  render() {
    return (
      <div>
      
         <input style ={{
          fontSize:24,
          display: 'block',
          width:"100%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16,
         
        }} onChange = {this.searchChangeHandler.bind(this)}placeholder="Enter movie search"/>

        {this.state.rows}
        </div>
    )
        }
}
export default SearchMovie;