import React, { useState, useEffect } from 'react';
import Axios from 'axios';
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
		<>
			<h1>{plant.common_name}</h1>
			<p>{plant.scientific_name}</p>
		</>
	);
};
export default PlantDetails;
