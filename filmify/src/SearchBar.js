import React from 'react'


class SearchBar extends React.Component{

    viewMovie(){
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url

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
                <input type ="button" onClick = {this.viewMovie.bind(this)} value = "View"   />
            </td>

          </tr>


        </tbody>
      </table>
     
    }
}

export default SearchBar;