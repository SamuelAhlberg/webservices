import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import ReactDOM from 'react-dom';
import Nav from "./Nav";
import requests from "./requests";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);
//Här har vi vår clickHandler, detta ska skicka oss till en ny sida. Hitta funktion för detta.
  const handleClick = (movie) => {
    //
    
    var title = movie.title
    const movie_id = movie.id;
    var movie_img = movie.poster_path;
    var description = movie.overview;

    //Visar filmen som har klickats på
    ReactDOM.render (
    <div><Nav/>
      <button onClick={() => App()} class="tillbaka">
        Tillbaka
      </button>
      
      <div class="movie_info">
        
          <div class="image_box"><img src={`${base_url}${movie_img}`} alt={movie.name} class="movie_img"></img></div>
          <div class="info_box">
          <div class="movie_title">{title}</div>
          <div class="movie_description">{description}</div> 
          </div>
        </div>
    </div>
    , document.getElementById('root')
    );
  }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
          key ={movie.id}
          onClick={() => handleClick(movie)}

            className="row_poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
};

function App(){
  ReactDOM.render(
    <div className="App">
      <Nav/>
      
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />

    </div>
    , document.getElementById('root'));
  };

  
export default Row;
