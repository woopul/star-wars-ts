import React, { useEffect, useState } from "react";
import { IMovie, IMoviesQuery } from "../../api/api.types";
import Loader from "../Loader/Loader";
import MovieItem from '../MovieItem/MovieItem';
import ExpandableItem from '../ExpandableItem/ExpandableItem';
import { useFetchMovies } from '../../api/useFetch';
import { getMovies, starWarsApi } from '../../api/api';
import styles from "./MovieList.module.scss";

const MovieList = () => {
	const { isLoading, movies, error } = useFetchMovies();

	const renderMovieList = () => {
		if (error) return;
		return movies.map((movie, i) => {
			return <>
				<ExpandableItem key={i} text={movie.title}>
					<MovieItem movie={movie} />
				</ExpandableItem>
			</>
		})
	}

	return (
		<>
			<div className={styles.MovieList}>
				{isLoading ?
					<Loader /> :
					<div className={styles.MovieListContent}>
						{renderMovieList()}
					</div>
				}
			</div>
		</>
	);
};

export default MovieList;
