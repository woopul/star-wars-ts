import { IMovie, IMoviesQuery } from './api.types';
const API_ROOT = "https://swapi.dev/api/";

async function fetchMovies() {
   return fetch(
      `${API_ROOT}films`,
      {
        method: "GET",
        mode: "cors",
      }
    );
}

export async function fetchStarwarsFilms(): Promise<IMoviesQuery> {
  const result : IMoviesQuery = {
    movies: [],
    error: null,
  };

  try {
    const response = await fetch(
      `${API_ROOT}films`,
      {
        method: "GET",
        mode: "cors",
      }
    );

    await response.json().then((movies) => {
      console.log(movies.results);
      result.movies = movies.results.map((movieItem) => ({
        title: movieItem.title,
        planets: movieItem.planets,
      }));
    }
    );
  } catch (e) {
    result.error = e.message;
  }
  return result;
}
