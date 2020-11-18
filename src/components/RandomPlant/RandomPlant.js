import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './RandomPlant.css';

const RandomPlant = ({ match }) => {
	const plantId = match.params._id;
	const [plant, setPlant] = useState([]);
    const url = `https://botanical-babble.herokuapp.com/api/plants`;
    const randomElement = Math.floor(Math.random() * plant.length)
    console.log(randomElement)
	useEffect(function getPlant() {
		Axios(url)
			.then((data) => {
                setPlant(data.data);
                console.log(plant.length)
			})
			.catch((error) => {});
    }, []);
 
    

	if (!plant) {
		return null;
    }
    
	return (
		<section className='container'>
			<h1>{plant[randomElement]?.common_name}</h1>
			<p>{plant[randomElement]?.scientific_name}</p>
			<p>{plant[randomElement]?.family_common_name}</p>
			<p>{plant[randomElement]?.genus}</p>
			<img
				className='thumbnail'
				src={plant[randomElement]?.image_url}
				alt={plant[randomElement]?.common_name}
				align='center'
			/>
		</section>
	);
};
export default RandomPlant;
