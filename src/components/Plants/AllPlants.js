import React, { useState, useEffect } from 'react';
import './AllPlants.css';
import Axios from 'axios';
import PlantCard from '../PlantCard/PlantCard';
import { apiUrl } from '../../config';
// import data from './test.json';
// import newData from '../Plants/seedData-1.json';

//$ heroku logs --tail --app botanical-babble

const AllPlants = () => {
	//// -- Variables -- ////

	// const url = `${apiUrl}/plants`;
	const url = `https://botanical-babble.herokuapp.com/api/plants`

	//// -- States -- ////

	const [plants, setPlants] = useState([]);
	const [error, setError] = useState(false);

	//// -- useEffect(s) -- ////

	useEffect(function getPlants() {
		console.log(process.env.NODE_ENV);
		Axios(url)
			.then((data) => {
				setPlants(data.data);
			})
			.catch((error) => {
				setError(null);
			});
	}, []);

	//// -- Page Content -- ////
	return (
		<div>
			<div>
				{plants.map((plant) => (
					<PlantCard plant={plant} key={plant._id} />
				))}
			</div>
		</div>
	);
};

export default AllPlants;
