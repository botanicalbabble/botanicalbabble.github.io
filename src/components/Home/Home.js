import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

import './Home.css';

const Home = () => {
	//// -- Variables -- ////

	const url = `https://botanical-babble.herokuapp.com/api/plants`;

	//// -- States -- ////

	const [data, setData] = useState([]);

	//// -- Functions / Handlers -- ////


	//// -- useEffect(s) -- ////

	useEffect(() => {
		Axios(url)
			.then((res) => {
				setData(res.data);
			})
			.catch((error) => {});
	}, []);

	//// -- Page Content -- ////

	return (
		<div>
			<main>
				<div>
					<Carousel style={{ minHeight: '90vh' }}>
						{data.map((plant) => {
							return (
								<Carousel.Item key={plant._id} style={{ maxHeight: '100vh' }}>
									<img
										className='d-plant w-100'
										style={{
											height: '90vh',
											width: '100%',
											objectFit: 'cover',
											overflow: 'scroll',
											margin: 'auto',
										}}
										src={plant.image_url}
										alt={plant.scientific_name}
									/>

									<Carousel.Caption>
										<div className='rectangle'>
											<br />
											<h1>Welcome to Botanical Babble</h1>

											<h2>What is Botanical Babble?</h2>
											<br />
											<h3>
												Botanical Babble is a hub for plant lovers, enthusiasts,
												and green thumbs alike! Browse our extensive database
												full of beautiful plants in the “all plants” section
												above. We made this app for you to meet other plant
												enthusiasts, exchange plant care tips, and more so take
												advantage of our babble section under each plant
												profile! Want to show off your own plants? Upload your
												own image and plant information in our “add a plant”
												section in the navigation bar above! Welcome to the
												Botanical Babble family!
											</h3>
											<br />
										</div>
										<br />
										<br />
										<br />
										<br />
										<br />
										<br />
										<br />
										<br />

										<p>{plant.common_name}</p>
									</Carousel.Caption>
								</Carousel.Item>
							);
						})}
					</Carousel>
				</div>
			</main>
		</div>
	);
};

export default Home;
