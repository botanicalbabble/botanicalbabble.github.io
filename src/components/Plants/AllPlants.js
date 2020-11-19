import React, { useState, useEffect } from 'react';
import './AllPlants.css'
import Axios from 'axios'
import PlantCard from '../PlantCard/PlantCard'
// import data from './test.json';
// import newData from '../Plants/seedData-1.json';

import { apiUrl } from '../../config'

const AllPlants = () => {
	const [plants, setPlants] = useState([])
	const [error, setError] = useState(false)

	//$ heroku logs --tail --app botanical-babble

	// const url = `https://botanical-babble.herokuapp.com/api/plants`
	const url = `${apiUrl}/plants`

	useEffect(function getPlants() {
		Axios(url)
			.then((data) => {
				setPlants(data.data)
			})
			.catch((error) => {
				setError(null)
			})
	}, [])

	// let renderPlant = plants.map((plant) => {
	// 	return (
	// 		// <Link key={plant.id} to={}`}>
	// 		<div >
	// 			{/* {plant.common_name}
	// 			<img src={plant.image_url} alt='' /> */}
	// 		</div>
	// 		// </Link>
	// 	);
	// });

	return (
		<div>
			<div>
				{plants.map((plant) => (
					<PlantCard plant={plant} key={plant._id} />
				))}
			</div>
		</div>
	)
};

export default AllPlants;
