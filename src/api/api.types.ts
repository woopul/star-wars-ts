export interface IMoviesQuery {
  movies: IMovie[];
  error: string | null;
}

export interface IMovie {
  title: string;
  planets: string[];
}

export interface IPlanets {
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

export interface IStoredPlannets {
  [key: string] : IPlanets
}
