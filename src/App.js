import React from 'react';
import Home from './components/Home/Home';
import AllPlants from './components/Plants/AllPlants';
import PlantDetails from './components/Plants/PlantDetails';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
	return (
		<div>
			<header>
				<Header />
			</header>
			<main>
				<Route
					path='/'
					exact
					render={(routerProps) => {
						return <Home match={routerProps.match} />;
					}}
				/>

				<Route
					path='/plant/:_id'
					render={(routerProps) => {
						return (
							<PlantDetails
								history={routerProps.history}
								match={routerProps.match}
							/>
						);
					}}
				/>
			</main>
		</div>
	);
};

export default App;
