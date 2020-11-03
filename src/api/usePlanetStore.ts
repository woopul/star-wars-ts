import { useState, useEffect } from 'react'
import axios from 'axios';
import _ from 'lodash';
import { starWarsApi } from './api';
import { IMovie, IPlanets, IStoredPlannets } from './api.types';
import { AxiosInstance, AxiosRequestConfig } from 'axios';


export const usePlanetStore = (urls: string[]) => {
  const [storedPlanets, setStoredPlanet] = useState<IStoredPlannets>(() => JSON.parse(window.localStorage.getItem('planets')) || {})
  const [planetsToDisplay, setPlanetsToDisplay] = useState<IPlanets[]>([])
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchPlanets = async () => {
    for (const url of urls) {
      if (!storedPlanets[url]) {
        const fetchedData = await axios.get(url).then(res => res.data).catch(err => setError(err.message));
        setStoredPlanet(prevState => ({
          ...prevState, [url]: _.pick(fetchedData,
            ["name",
            "rotation_period",
            "orbital_period",
            "diameter",
            "climate",
            "gravity",
            "terrain",
            "surface_water",
            "population"])
          }))
      } else console.log('%c IN STORE! ', 'background: #222; color: #bada55');
      }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    if(!isLoading) {
      setPlanetsToDisplay(urls.map(url => storedPlanets[url]))
      !isLoading && localStorage.setItem('planets', JSON.stringify(storedPlanets));
    }
  }, [isLoading, urls]);

  return { isLoading, planetsToDisplay, error }
}

export default usePlanetStore;