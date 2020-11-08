import { IPlanets } from './../api/api.types';
import { IMovie } from '../api/api.types';

export interface IMovieState {
  movies: IMovie[],
  planets: IPlanets[]
}