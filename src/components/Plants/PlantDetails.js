import React, { useState, useEffect } from 'react';
import Axios from 'axios'

const PlantDetails = ({ match }) => {
	const plantId = match.params._id
	const [plant, setPlant] = useState([])

	const url = `https://botanical-babble.herokuapp.com/api/plants/${plantId}`

	useEffect(
		function getPlant() {
					Axios(url)
						.then((data) => {
							
							setPlant(data.data)
							
						})
						.catch((error) => {
						
						})
				},
				[]
			)




	return (
		<>
			<h1>Plant Details</h1>
			<h1>Plant details is being rendering! </h1>
		</>
	);
};

export default PlantDetails;
