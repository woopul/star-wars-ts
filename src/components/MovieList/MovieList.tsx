import React from "react";
import { useSelector } from 'react-redux'
import Loader from "../Loader/Loader";
import MovieItem from '../MovieItem/MovieItem';
import { IMovie } from '../../api/api.types';
import ExpandableItem from '../ExpandableItem/ExpandableItem';
import { useFetchMovies } from '../../api/useFetch';
import styles from "./MovieList.module.scss";

const MovieList = () => {
	const { isLoading, error } = useFetchMovies();
	const movies: IMovie[] = useSelector(state => state.movies)

	const renderMovieList = () => {
		if (error) return <div className={styles.error}>Smthng went wrong during fetch: {error}</div>;

		return movies.map((movie, i) => {
			return (
				<React.Fragment key={`${i}_${movie.title}`} >
					<ExpandableItem key={i} text={movie.title}>
						<MovieItem movie={movie} />
					</ExpandableItem>
				</React.Fragment>
			)
		})
	}

	return (
		<>
			<div className={styles.MovieList}>
				{isLoading ?
					<Loader key={`movieListLoader`} /> :
					<div className={styles.MovieListContent}>
						{renderMovieList()}
					</div>
				}
			</div>
		</>
	);
};

export default MovieList;
