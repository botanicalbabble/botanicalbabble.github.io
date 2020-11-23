import React, { useState } from 'react';
import Axios from 'axios';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import { apiUrl } from '../../config';

const url = `${apiUrl}/plants`;
const Home = () => {
	const [data, setData] = useState([]);
	Axios(url)
		.then((res) => {
			setData(res.data);
		})
		.catch((error) => {});

	return (
		<div>
			<main>
				{/* search bar */}
				{/* <AllPlants path='/' exact /> */}
				<h1>Welcome to Botanical Babble</h1>
				<div>
					<h3>What is Botanical Babble?</h3>
					<p>
						Botanical babble is a discussion about your favorite plant, posting
						information about plants and giving care tips.
					</p>
				</div>
				<div>
					<h4>Go to the All Plants page to see every plant</h4>
				</div>
				<div>
					<h4>Go to Random Plants to pull up a random plant</h4>
				</div>
				<div>
					{console.log(data)}
					<Carousel style={{ minHeight: '40vh' }}>
						{data.map((plant) => {
							return (
								<Carousel.Item key={plant.id} style={{ maxHeight: '90vh' }}>
									<img
										className='d-plant w-100'
										style={{
											height: '50vh',
											width: '100%',
											objectFit: 'cover',
											overflow: 'scroll',
											margin: 'auto',
											border: '.6rem solid gray',
										}}
										src={plant.image_url}
										alt={plant.scientific_name}
									/>
									<Carousel.Caption>
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
