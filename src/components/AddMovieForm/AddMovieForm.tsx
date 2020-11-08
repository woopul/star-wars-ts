import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from './AddMovieForm.module.scss';
import _ from 'lodash';
import PlanetItem from "../PlanetItem/PlanetItem";
import { IPlanets, pickData } from "../../api/api.types";
import { dispatch } from "../../store/store";
import { postMovie, UpdatePlanetStore } from "../../store/movies/movies.actions";

interface IFormData {
	movieTitle: string,
	addPlanet: string
}

interface IFormControl {
	movieTitle?: string | boolean,
	addPlanet?: string | boolean
}

interface ISelectedPlanets {
	planetData: IPlanets[]
}

const AddMovieForm = () => {
	const [formData, setFormData] = useState<IFormData>({
		movieTitle: "",
		addPlanet: ""
	});
	const [autocompleteFetch, setAutocompleteFetch] = useState([]);
	const [selectedPlanets, setSelectedPlanets] = useState<IPlanets[]>([]);
	const [errors, setErrors] = useState<IFormControl>({});
	const [touched, setTouched] = useState<IFormControl>({});

	useEffect(() => {
		validate(formData);
	}, [formData]);

	const validate = (values: IFormData) => {
		const nextErrors: IFormControl = {};

		if (!values.movieTitle) {
			nextErrors.movieTitle = "Field is required";
		} else if (!/^[A-Z]/.test(values.movieTitle)) {
			nextErrors.movieTitle = "Movie title name must start with a capital letter."
		}

		setErrors(nextErrors);
	};

	const clearForm = () => {
		setFormData({
			addPlanet: '',
			movieTitle: ''
		});
		setErrors({});
		setTouched({});
		setAutocompleteFetch([]);
		setSelectedPlanets([]);
	}

	const handleBlur = ({ target: { value, name } }) => {
		if (!touched[name]) {
			setTouched({ ...touched, [name]: true });
		}
	};

	const handleChange = ({ target: { value, name } }) => {
		if (name === "addPlanet") {
			(async () => {
				if (value === '') {
					setAutocompleteFetch([]);
				} else {
					const results = await axios.get(`https://swapi.dev/api/planets/?search=${value}`).then(res => res.data.results);
					setAutocompleteFetch(results);
				}
			})();
		}
		setFormData({
			...formData,
			[name]: value
		});
	};

	const addCustomMovie = () => {
	}
	
	const handleSubmit = (event) => {
		event.preventDefault();
		if (selectedPlanets.length === 0) {
			setErrors({ ...errors, ["addPlanet"]: "At Least One planet needs to be selected" });
			return
		}
		clearForm();
		dispatch()(postMovie({title: formData.movieTitle, planetsUrl: selectedPlanets.map(p => p.url)}))
		dispatch()(UpdatePlanetStore([]))
		
	};

	const handleSelectPlanet = (res) => {
		setAutocompleteFetch([])
		if (_.some(selectedPlanets, {name: res.name})) return;
		setSelectedPlanets([...selectedPlanets,  _.pick(res, pickData)]);
	}

	const handleRemovePlanet = name => {
		setSelectedPlanets(selectedPlanets.filter(planet => planet.name !== name));
	}

	return (
		<div className={styles.AddMovieFormContainer}>
			<form onSubmit={handleSubmit}>
				<div className={styles.InputField}>
					<label htmlFor="movieTitle">Movie Title
					<input
							name="movieTitle"
							id="movieTitle"
							type="text"
							placeholder="Please enter the title of the movie"
							className={errors.movieTitle && touched.movieTitle && styles.errorInput}
							onChange={handleChange}
							onBlur={handleBlur}
							value={formData.movieTitle}
						/></label>
					{errors.movieTitle && touched.movieTitle && (<p className={styles.errorMsg}>{errors.movieTitle}</p>)}
				</div>

				<div className={styles.InputField}>
					{selectedPlanets.length > 0 && <div className={styles.selectedPlanets}>{selectedPlanets.map(planet => <PlanetItem name={planet.name} handleRemove={handleRemovePlanet} />)}</div>}
					<label htmlFor="addPlanet">Add Planet
					<input
							autoComplete="off"
							name="addPlanet"
							placeholder="Search for the planet in database"
							id="addPlanet"
							type="text"
							className={errors.addPlanet && touched.addPlanet && styles.errorInput}
							onChange={handleChange}
							onBlur={handleBlur}
							value={formData.addPlanet}
						/>
						{autocompleteFetch.length > 0 &&
							<div className={styles.hints}>
								{autocompleteFetch.map(res => res.name === 'unknown'? null :  <p onClick={() => handleSelectPlanet(res)}>{res.name}</p>)}
							</div>}
					</label>
					{errors["addPlanet"] && (<p className={styles.errorMsg}>{errors["addPlanet"]}</p>)}
				</div>

				<button
					type="submit"
					disabled={Object.keys(errors).length ? true : false}
				>ADD MOVIE </button>
			</form>
		</div>
	);
}

export default AddMovieForm;
