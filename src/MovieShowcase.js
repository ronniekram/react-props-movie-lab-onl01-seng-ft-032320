import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(movie => <li> <MovieCard key={movie.title} title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster} /> </li>)
    // return movieData.map(movie => console.log(movie));
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}