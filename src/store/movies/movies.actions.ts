import _ from 'lodash';
import { IMovie, IPlanets } from './../../api/api.types';


export enum MoviesActionType {
  SET_MOVIES = "SET_MOVIES",
  POST_MOVIE = "POST_MOVIES",
  SET_PLANETS = "SET_PLANETS",
  ADD_PLANET = "ADD_PLANET",
  UPDATE_PLANETS = "UPDATE_PLANETS"
}


export interface ISetMoviesAction {
  type: MoviesActionType.SET_MOVIES,
  payload: IMovie[]
}

export interface IPostMovieAction {
  type: MoviesActionType.POST_MOVIE,
  payload: IMovie
}

export interface ISetPlanetsAction {
  type: MoviesActionType.SET_PLANETS,
  payload: IPlanets[]
}

export interface IAddPlanetAction {
  type: MoviesActionType.ADD_PLANET,
  payload: IPlanets
}

export interface IUpdatePLanets {
  type: MoviesActionType.UPDATE_PLANETS,
  payload: IPlanets[]
}

export type MoviesAction = ISetMoviesAction | ISetPlanetsAction | IPostMovieAction | IAddPlanetAction | IUpdatePLanets;

export const setMoviesStore = (movies: IMovie[]): ISetMoviesAction => ({ type: MoviesActionType.SET_MOVIES, payload: movies });

export const postMovie = (movieData: IMovie): IPostMovieAction => ({ type: MoviesActionType.POST_MOVIE, payload: movieData });

export const setPlanetStore = (planetsData: IPlanets[]): ISetPlanetsAction => ({ type: MoviesActionType.SET_PLANETS, payload: planetsData });

export const addPlanetStore = (planetData: IPlanets): IAddPlanetAction => ({ type: MoviesActionType.ADD_PLANET, payload: planetData });

export const UpdatePlanetStore = (planetData: IPlanets[]): IUpdatePLanets => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const storedPlanets = useSelector(state => state.planets)
  // // eslint-disable-next-line react-hooks/rules-of-hooks
  // const storedUrls = _.pluck(storedPlanets, 'url')
  // planetData.map(p => { return storedUrls.includes(p.url) ? undefined : p });
  return { type: MoviesActionType.UPDATE_PLANETS, payload: planetData }

};
