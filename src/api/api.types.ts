export interface IMoviesQuery {
  movies: IMovie[];
  error: string | null;
}

export interface IMovie {
  title: string;
  planetsUrl: string[];
}

export interface IPlanets {
  url:string;
  name: string,
  rotation_period: string,
  orbital_period: string,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string,
}

export const pickData = [
  "url",
  "name",
  "rotation_period",
  "orbital_period",
  "diameter",
  "climate",
  "gravity",
  "terrain",
  "surface_water",
  "population"]