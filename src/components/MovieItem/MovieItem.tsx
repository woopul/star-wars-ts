import { stringify } from 'querystring';
import React, { useState } from 'react';
import Loader from '../Loader/Loader'
import { IMovie } from '../../api/api.types'
import { useFetchMovies } from '../../api/useFetch';
import { ReactComponent as ArrowClose } from '../../assets/icons/ARROW CLOSE.svg'
import { ReactComponent as ArrowOpen } from '../../assets/icons/ARROW OPEN.svg'
import styles from './MovieItem.module.scss';
import usePlanetStore from '../../api/usePlanetStore';

interface IMovieItem {
  movie: IMovie
  isOpen?: boolean
}

const MovieItem = ({ movie, isOpen }: IMovieItem) => {
  const { title, planets } = movie;
  const { planetsToDisplay, isLoading, error } = usePlanetStore(planets)
  return (
    <>
      {isLoading ?
        <Loader /> :
        <div className="planets-table">
          {error && `THIS IS ERROR MSG ${error}`}
          {title}
          {planetsToDisplay.map(planetData => <p>{planetData.name}</p>)}
        </div>
      }
    </>
  )
}

export default MovieItem;