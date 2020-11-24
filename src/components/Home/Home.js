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

				<Carousel
					controls={false}
					indicators={false}
					style={{ minHeight: '90vh' }}>

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
										<div style={{ margin: '10px 20px 10px 20px' }}>
											<h1>Welcome to Botanical Babble</h1>

											<h2>What is Botanical Babble?</h2>
											<br />
											<h3>
												<p style={{ textAlign: 'justify' }}>
													<p>
														Botanical Babble is a hub for plant lovers,
														enthusiasts, and green thumbs alike! Browse our
														extensive database full of beautiful plants in the
														“all plants” section above.
													</p>
													We made this app for you to meet other plant
													enthusiasts, exchange plant care tips, and more so
													take advantage of our babble section under each plant
													profile! Want to show off your own plants? Upload your
													own image and plant information in our “add a plant”
													section in the navigation bar above!
													<br />
													<br />
													<p
														style={{
															textAlign: 'center',
															fontSize: '32px',
															fontWeight: 'bolder',
														}}>
														Welcome to the Botanical Babble family!
													</p>

												</p>
											</h3>
										</div>
										<br />
									</div>

									<br />
									<br />

								</Carousel.Caption>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</main>
		</div>
	);
};

export default Home;
