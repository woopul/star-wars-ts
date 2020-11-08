import React from 'react';
import Loader from '../Loader/Loader'
import { IMovie } from '../../api/api.types'
import usePlanetStore from '../../api/usePlanetStore';
import { getSelectedPlanetsData } from '../../store/movies/movies.selectors';
import styles from './MovieItem.module.scss';

interface IMovieItem {
  movie: IMovie
  isOpen?: boolean
}

const MovieItem = ({ movie, isOpen }: IMovieItem) => {
  const { planetsUrl } = movie;
  const { isLoading, error } = usePlanetStore(planetsUrl)
  const planetsDisplay = getSelectedPlanetsData(planetsUrl);

  return (
    <>
      {isLoading ?
        <Loader /> :
        <div className="planets-table">
          {error && <div className={styles.error}></div>}
          {planetsDisplay.map(planetData => <p>{planetData.name}</p>)}
        </div>
      }
    </>
  )
}

export default MovieItem;