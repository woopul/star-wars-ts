import { useState, useEffect } from 'react'
import axios from 'axios';
import _ from 'lodash';
import { starWarsApi } from './api';
import { IMovie, IPlanets, IStoredPlannets } from './api.types';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

interface IAxios {
  api: AxiosInstance,
  method?: "get" | "post" | "put" | "delete",
  url?: string,
  data?: any,
  config?: AxiosRequestConfig | null,
}

export const useFetchMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
      try {
        starWarsApi.get('/films')
          .then(res => {
            console.log('ISIDE RES AXIOS', res)
            const moviesQuery = res.data.results.map(movie => ({
              title: movie.title,
              planets: movie.planets
            }))
            setMovies(moviesQuery);
          })
          .finally(() => setIsLoading(false))
          .catch(err => setError(err.message))
      } catch (err) {
        setError(err.message)
      }
  }, [])
  console.log(isLoading, movies, error)
  return { isLoading, movies, error }
}