import React, { useState, useEffect } from 'react';
import './AllPlants.css';
import Axios from 'axios';
import PlantCard from '../PlantCard/PlantCard';

const AllPlants = () => {
	//// -- Variables -- ////

	const url = `https://botanical-babble.herokuapp.com/api/plants`;

	//// -- States -- ////

	const [plants, setPlants] = useState([]);


	//// -- useEffect(s) -- ////

	useEffect(function getPlants() {
		console.log(process.env.NODE_ENV);
		Axios(url)
			.then((data) => {
				setPlants(data.data);
			})
			.catch(console.error);
			//eslint-disable-next-line
	}, []);

	//// -- Page Content -- ////

	return (
			<div className='container-optional-alcohol'>
				{plants.map((plant) => (
					<PlantCard plant={plant} key={plant._id} />
				))}
			</div>
	);
};

export default AllPlants;
