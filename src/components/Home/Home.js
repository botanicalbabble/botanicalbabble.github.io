import React from 'react';
import AllPlants from '../Plants/AllPlants';
import './Home.css';
const Home = ({ plants }) => {
	return (
		<div>
			<main>
				{/* search bar */}
				<AllPlants path='/' exact />
			</main>
		</div>
	);
};

export default Home;
