import { IPlanets } from './../../api/api.types';
import { IMovieState } from './../store.types';
import { MoviesAction, MoviesActionType } from './movies.actions';

const initialState : IMovieState = {
  movies: [],
  planets: []
}

export const moviesReducer = (state: IMovieState = initialState, action: MoviesAction) => {
  switch(action.type) {
    case MoviesActionType.POST_MOVIE:
      return {
        ...state,
        movies : [
          ...state.movies, 
          { title: action.payload.title, planetsUrl: action.payload.planetsUrl }
        ]
      }
    case MoviesActionType.SET_MOVIES:
      return {
        ...state,
        movies : action.payload
      }

    case MoviesActionType.SET_PLANETS: 
      // const newPlanetState: IPlanets[];
      // const action.payload.forEach(newPlanet =>{if(state.planets.filter(stored => stored.url === if newPlanet.url).length>0) )
      return {
        ...state,
        planets: [...action.payload] 
      }

    case MoviesActionType.ADD_PLANET: 
      return {
        ...state,
        planets: [...state.planets, action.payload] 
      }

    default:
      return state;
  }
}