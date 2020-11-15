import React from 'react';
import Loader from '../Loader/Loader'
import MovieTable from '../MovieTable/MovieTable'
import { IMovie, IPlanets } from '../../api/api.types'
import usePlanetStore from '../../api/usePlanetStore';
import { usePlanetsDataToDisplay } from '../../store/movies/movies.selectors';
import styles from './MovieItem.module.scss';

interface IMovieItem {
  movie: IMovie
  isOpen?: boolean
}

const MovieItem = ({ movie, isOpen }: IMovieItem) => {
  const { planetsUrl } = movie;
  const { isLoading, error } = usePlanetStore(planetsUrl)
  const planetsDataToDisplay : IPlanets[] = usePlanetsDataToDisplay(planetsUrl);

  return (
    <>
      {isLoading ?
        <Loader /> :
        <div className={styles.MovieItemContainer}>
          {error && <div className={styles.error}></div>}
          <MovieTable rows={planetsDataToDisplay} />
        </div>
      }
    </>
  )
}

export default MovieItem;