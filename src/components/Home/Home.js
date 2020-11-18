import React from 'react';
import AllPlants from '../Plants/AllPlants';
import './Home.css';
const Home = ({ plants }) => {
	return (
		<div>
			<main>
				{/* search bar */}
				{/* <AllPlants path='/' exact /> */}
				<h1>Welcome to Botanical Babble</h1>
				<div>
					<h3>What is Botanical Babble?</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro atque vitae fuga corporis beatae quae, laboriosam adipisci accusamus eveniet maiores quam veniam debitis, similique, fugiat consequatur cum recusandae aliquid libero.</p>
				</div>
				<div>
					<h4>Go to the All Plants page to see every plant</h4>
				</div>
				<div>
					<h4>Go to Random Plants to pull up a random plant</h4>
				</div>
				<div>
					<h4>Create a new plant to join the fun</h4>
				</div>

			</main>
		</div>
	);
};

export default Home;
