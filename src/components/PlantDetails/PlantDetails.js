import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import './plantDetails.css';
import CreateComment from './CreateComment';
import { apiUrl } from '../../config';

//Created a container to hold individual plant profile
const PlantDetails = ({ match }) => {
	const plantId = match.params._id;
	const [plant, setPlant] = useState([]);
	const url = `${apiUrl}/plants/${plantId}`;

	const initialState = {
		name: '',
		slug: 'hello slug',
		family: '',
		common_name: '',
		genus: '',
		scientific_name: '',
	};

	const [form, setForm] = useState(false);
	const handleClose = () => setForm(false);
	const handleShow = () => setForm(true);
	const [formState, setFormState] = useState(initialState);

	useEffect(function getPlant() {
		Axios(url)
			.then((data) => {
				setPlant(data.data);
			})
			.catch((error) => {});
	}, []);
	//Put request to update to specific plant id page
	const handlePut = () => {
		const data = formState;
		Axios.put(url, data).then((response) => {
			console.log(response);
			setPlant(response.data);
		});

	};

	// To submit changes to your plant details
	const handleSubmit = (event) => {
		// event.preventDefault()
		// setFormState(initialState);
		handlePut();
	};

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};


	return (
		<>
			<Modal show={form} onHide={handleClose} centered size='md'>
				<Modal.Header>
					<Modal.Title>Edit Plant</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<form action='submit'>
						{/* Name */}
						<label htmlFor='name'>Name:</label>
						<input
							type='text'
							id='common_name'
							placeholder={plant.common_name}
							onChange={handleChange}
						/>
						<br />
						{/* Scientific Name */}
						<label htmlFor='scientific_name'>Scientific Name:</label>
						<input
							type='text'
							id='scientific_name'
							placeholder={plant.scientific_name}
							onChange={handleChange}
						/>
						<br />
						{/* Common Name */}
						<label htmlFor='family_common_name'>Common Family Name:</label>
						<input
							type='text'
							id='family_common_name'
							placeholder={plant.family_common_name}
							onChange={handleChange}
						/>
						<br />
						{/* Family */}
						<label htmlFor='family'>Family:</label>
						<input
							type='text'
							id='family'
							placeholder={plant.family}
							onChange={handleChange}
						/>
						<br />
						{/* Genus */}
						<label htmlFor='genus'>Genus:</label>
						<input
							type='text'
							id='genus'
							placeholder={plant.genus}
							onChange={handleChange}
						/>
					</form>
				</Modal.Body>

				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button
						variant='primary'
						onClick={() => {
							handleClose();
							handleSubmit();
						}}>
						update changes
					</Button>
				</Modal.Footer>
			</Modal>
		);
	};
	console.log(plant);
	return (
		<>
			{renderModal()}
			<section className='container'>
				<h1>{plant.common_name}</h1>
				<h4>
					<i>({plant.scientific_name})</i>
				</h4>
				<img
					className='thumbnail'
					src={plant.image_url}
					alt={plant.common_name}
				/>
				<button className='button button-join'>Join Babble!</button>
				<button className='button button-fav'>Add to Favs</button>
				<p>
					<u>Common Family Name</u>: {plant.family_common_name}
				</p>
				<p>
					<u>Family</u>: {plant.family}
				</p>
				<p>
					<u>Genus</u>: {plant.genus}
				</p>
				<p>
					<u>Bio</u>: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis
					aute irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur.
				</p>
				<button onClick={handleShow}>Edit plant</button>
			</section>
			<section>
				<CreateComment plant={plant} setPlant={setPlant} />
			</section>
		</>
		//Created button above to edit and update plant details

	);
};

export default PlantDetails;
