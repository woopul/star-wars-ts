import { setPlanetStore, addPlanetStore } from './../store/movies/movies.actions';
import { useState, useEffect } from 'react'
import axios from 'axios';
import _ from 'lodash';
import { IPlanets, pickData } from './api.types';
import { dispatch } from '../store/store';

const getCashedPlanets = () => {
  const cashedPlanets: IPlanets[] = JSON.parse(window.localStorage.getItem('planets')) || [];
  dispatch()(setPlanetStore(_.values(cashedPlanets)));
  return cashedPlanets;
}

export const usePlanetStore = (urls?: string[]) => {
  const [cashed, setChashedPlanets] = useState<IPlanets[]>(getCashedPlanets)
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchPlanets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
      !isLoading && window.localStorage.setItem('planets', JSON.stringify(cashed));
  }, [isLoading]); // eslint-disable-line react-hooks/exhaustive-deps
  
  const fetchPlanets = async () => {
    for (const url of urls) {
      if (!_.map(cashed, 'url').includes(url)) {
        const urlHttps = url.includes('https') ? url : url.replace('http', "https");
        
        try {
          const response = await axios.get(urlHttps);
          const planetDataToStore = _.pick(response.data, pickData);
          
          setChashedPlanets(prevState => ([...prevState, planetDataToStore]));
          dispatch()(addPlanetStore(planetDataToStore));
        } catch(err) {
          setError(err);
        }

      } else console.log('%c IN STORE! ', 'background: #222; color: #bada55');
    }
    setIsLoading(false);
  }

  return { isLoading, error }
}

export default usePlanetStore;