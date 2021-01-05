import React from 'react'
import "./Row.css";
import ReactDOM from 'react-dom';
import requests from "./requests";
import SearchMovie from "./SearchMovie";
import Row from "./Row";
import SpotifyApp from './SpotifyComponents/SpotifyApp/SpotifyApp';

var base_url = "https://www.themoviedb.org/movie/";

class SearchBar extends React.Component{

    viewMovie(){
        window.location.href = base_url + this.props.movie.id;

    }
    render(){

        return<table key = {this.props.movie.id}>
        <tbody>
          <tr>
             <td>
                <img alt = "poster" width ="120" src = {this.props.movie.poster_src}></img>
                
            </td>
             <td> 
                {this.props.movie.title}
                <p>{this.props.movie.overview}</p>
                <input type ="button" onClick = {() => handleClick(this.props.movie)} value = "View"   />

            </td>

          </tr>
        </tbody>
      </table>
     
    } 
}

function handleClick(movie) {
  
  var title = movie.title
  var movie_img = movie.poster_src;
  var description = movie.overview;

  //Visar filmen som har klickats på
  ReactDOM.render (
  <div><SearchMovie title = "Search Movie" />
    <button onClick={() => App()} class="tillbaka">
      Tillbaka
    </button>
    
    <div class="row">
      <div class="col-sm">
        <div class="movie_info">
          
            <div class="image_box"><img src={`${movie_img}`} alt={movie.name} class="movie_img"></img></div>
            <div class="info_box">
            <div class="movie_title">{title}</div>
            <div class="movie_description">{description}</div>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="spotify_box"><SpotifyApp  />{title} </div>
        </div>
    </div>
  </div>
  , document.getElementById('root')
  );
};

//startsidan
function App(){
  ReactDOM.render(
    <div className="App">
      <SearchMovie title = "Search Movie" />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />

    </div>
    , document.getElementById('root'));
};
export default SearchBar;