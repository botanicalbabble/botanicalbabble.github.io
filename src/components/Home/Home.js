import React from 'react';
import AllPlants from '../Plants/AllPlants';
import './Home.css';
const Home = () => {
	return (
		<body>
			<header>
				<h1>Botanical Babble</h1>
				{/* Hamburger Icon for nav links */}
			</header>
			<main>
				{/* search bar */}
				<AllPlants />
			</main>
		</body>
	);
};

export default Home;
