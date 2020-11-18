import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './plantDetails.css';

const PlantDetails = ({ match }) => {
	const plantId = match.params._id;
	const [plant, setPlant] = useState([]);
	const url = `https://botanical-babble.herokuapp.com/api/plants/${plantId}`;
	useEffect(function getPlant() {
		Axios(url)
			.then((data) => {
				setPlant(data.data);
			})
			.catch((error) => {});
	}, []);
	if (!plant) {
		return null;
	}
	return (
		<section className='container'>
			<h1>{plant.common_name}</h1>
			<p>{plant.scientific_name}</p>
			<p>{plant.family_common_name}</p>
			<p>{plant.genus}</p>
			<img
				className='thumbnail'
				src={plant.image_url}
				alt={plant.common_name}
				align='center'
			/>
		</section>
	);
};
export default PlantDetails;
