import axios from 'axios';
import { IMovie, IMoviesQuery } from './api.types';
const API_ROOT = "https://swapi.dev/api";

export const starWarsApi = axios.create({
  baseURL: API_ROOT
})
 
export const getMovies = () => {
  const movieQuery = {
    movies:[],
    error: ''
  }
  try {
     starWarsApi.get('/films').then(res => {
      movieQuery.movies = res.data.results.map(movie => ({
        title: movie.title,
        planets: movie.planets
      }))
    }
  )} catch(err) {
    movieQuery.error = err;
  }
  return movieQuery;
}

