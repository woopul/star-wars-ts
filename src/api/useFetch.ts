import { useState, useEffect } from 'react'
import { starWarsApi } from './api';
import { IMovie } from './api.types';
import { setMoviesStore } from '../store/movies/movies.actions'
import { useDispatch } from 'react-redux';

export const useFetchMovies = () => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      starWarsApi.get('/films')
        .then(res => {
          const moviesQuery = res.data.results.map(movie => ({
            title: movie.title,
            planetsUrl: movie.planets
          }))
          setMovies(moviesQuery);
          dispatch(setMoviesStore(moviesQuery))
        })
        .finally(() => setIsLoading(false))
        .catch(err => setError(err.message))
    } catch (err) {
      setError(err.message)
    }
  }, [])
  return { isLoading, movies, error }
}