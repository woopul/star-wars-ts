import { IPlanets, IMovie } from './../../api/api.types';
import { useSelector } from 'react-redux';
import _ from 'lodash';

export const getPlanets = () : IPlanets[] => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useSelector(state => state.planets)
}

export const getPlanetData = (planet: string) : IPlanets => {
  return getPlanets()[planet]
}

export const getSelectedPlanetsData = (planetsUrl: string[]) : IPlanets[] => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const storedPlanets = useSelector(state => state.planets);
  return planetsUrl.map(url => _.find(storedPlanets, ['url', url]))
}

export const getMoviesToDisplay = () : IMovie[] => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useSelector(state => state.movies);
}
