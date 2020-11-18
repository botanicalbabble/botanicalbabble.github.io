import React from 'react';
import AllPlants from '../Plants/AllPlants';
import './Home.css';
const Home = ({ plants }) => {
	return (
		<div>
			<header>
				<h1>Botanical Babble</h1>
				{/* Hamburger Icon for nav links */}
			</header>
			<main>
				{/* search bar */}
				<AllPlants
				path='/'
				exact />
			</main>
		</div>
	);
};

export default Home;
