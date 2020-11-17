import React, { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import newData from './components/Plants/seedData-1.json';

const App = () => {
	const [plants, setPlants] = useState([]);

	useEffect(() => {
		setPlants(newData);
	}, []);
	return (
		<div>
			<Home />
		</div>
	);
};

export default App;
