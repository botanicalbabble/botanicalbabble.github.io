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
			<h4>
				<i>({plant.scientific_name})</i>
			</h4>
			<img
				className='thumbnail'
				src={plant.image_url}
				alt={plant.common_name}
			/>
			<button className='button button-join'>Join Babble!</button>
			<button className='button button-fav'>Add to Favs</button>
			<p>
				<u>Family Name</u>: {plant.family_common_name}
			</p>
			<p>
				<u>Scientific Family Name</u>: {plant.family}
			</p>
			<p>
				<u>Genus</u>: {plant.genus}
			</p>
			<p>
				<u>Bio</u>: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
				do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute
				irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
				fugiat nulla pariatur.
			</p>
		</section>
	);
};
export default PlantDetails;
