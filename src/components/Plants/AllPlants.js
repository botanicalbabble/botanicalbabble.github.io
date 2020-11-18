import React, { useState, useEffect } from 'react';
import './AllPlants.css'
import Axios from 'axios'
import PlantCard from './PlantCard'
// import data from './test.json';
// import newData from '../Plants/seedData-1.json';

const AllPlants = () => {


	const [plants, setPlants] = useState([])
	const [error, setError] = useState(false)


	const url = `https://botanical-babble.herokuapp.com/api/plants`

	useEffect(
		function getPlants() {
			Axios(url)
			.then((data) => {
				console.log(data)
				setPlants(data.data)
			})
			.catch((error) => {
				setError(null)
			})
		
	}, [url, setPlants, plants])




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
				<PlantCard plant={plant} key={plant.slug} /> 
			))}
		</div>



		</div>
	);
};

export default AllPlants;
