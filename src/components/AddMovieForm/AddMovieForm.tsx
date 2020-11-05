import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from './AddMovieForm.module.scss';
import PlanetItem from "../PlanetItem/PlanetItem";

interface IFormData {
	movieTitle: string,
	addPlanet: string
}

interface IFormControl {
	movieTitle?: string | boolean,
	addPlanet?: string | boolean
}

const AddMovieForm = () => {
	const [formData, setFormData] = useState<IFormData>({
		movieTitle: "",
		addPlanet: ""
	});
	const [autocompleteFetch, setAutocompleteFetch] = useState([]);
	const [selectedPlanets, setSelectedPlanets] = useState<string[]>([]);
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

		// if (!values.addPlanet) {
		// 	nextErrors.addPlanet = "Field is required";
		// }

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
		// setAutocompleteFetch([]);
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

	const handleSubmit = (event) => {
		event.preventDefault();
		if (selectedPlanets.length === 0) {
			setErrors({ ...errors, ["addPlanet"]: "At Least One planet needs to be selected" });
			return
		}
		clearForm();
	};

	const handleSelectPlanet = (name) => {
		setAutocompleteFetch([])
		if (selectedPlanets.includes(name)) return;
		setSelectedPlanets([...selectedPlanets, name]);
	}

	const handleRemovePlanet = name => {
		setSelectedPlanets(selectedPlanets.filter(planet => planet !== name))
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
					{selectedPlanets.length > 0 && <div className={styles.selectedPlanets}>{selectedPlanets.map(name => <PlanetItem name={name} handleRemove={handleRemovePlanet} />)}</div>}
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
								{autocompleteFetch.map(res => <p onClick={() => handleSelectPlanet(res.name)}>{res.name}</p>)}
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
