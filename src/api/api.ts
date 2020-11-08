import axios from 'axios';
const API_ROOT = "https://swapi.dev/api";

export const starWarsApi = axios.create({
  baseURL: API_ROOT
})
 