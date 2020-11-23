import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CreateComment from '../PlantDetails/CreateComment';
import Axios from 'axios';
import './RandomPlant.css';

const RandomPlant = ({ match }) => {
	//// -- Variables -- ////

	const url = `https://botanical-babble.herokuapp.com/api/plants`;

	//// -- States -- ////

	const initialState = {
		name: '',
		slug: 'hello slug',
		family: '',
		common_name: '',
		genus: '',
		scientific_name: '',
	};
	const [plant, setPlant] = useState([]);
	const [form, setForm] = useState(false);
	const [formState, setFormState] = useState(initialState);

	//// -- Functions / Handlers -- ////

	const randomElement = Math.floor(Math.random() * plant.length);

	const handleClose = () => setForm(false);
	const handleShow = () => setForm(true);
	// To submit changes to your plant details
	const handleSubmit = (event) => {
		handlePut();
	};
	// Put request to update to specific plant id page
	const handlePut = () => {
		const data = formState;
		Axios.put(url, data).then((response) => {
			console.log(response);
			setPlant(response.data);
		});
	};
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};
	const renderModal = () => {
		return (
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

	//// -- useEffect(s) -- ////

	useEffect(function getPlant() {
		Axios(url)
			.then((data) => {
				setPlant(data.data);
				console.log(plant.length);
			})
			.catch((error) => {});
	}, []);

	if (!plant) {
		return null;
	}

	//// -- Page Contents -- ////
	return (
		<div>
			{renderModal()}
			<section className='container'>
				<h1>{plant[randomElement]?.common_name}</h1>
				<h4>{plant[randomElement]?.scientific_name}</h4>
				<img
					className='thumbnail'
					src={plant[randomElement]?.image_url}
					alt={plant[randomElement]?.common_name}
					align='center'
				/>
				<button className='button button-join'>Join Babble!</button>
				<button onClick={handleShow} className='button button-fav'>
					Edit Plant
				</button>
				<p>
					<u>Common Family Name</u>: {plant[randomElement]?.family_common_name}
				</p>
				<p>
					<u>Family</u>: {plant[randomElement]?.family}
				</p>
				<p>
					<u>Genus</u>: {plant[randomElement]?.genus}
				</p>
				<p>
					<u>Bio</u>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel cumque ipsam quo, ipsa assumenda necessitatibus praesentium distinctio repellat quia commodi labore cum quam aspernatur ea voluptate, ratione quasi debitis eaque?
				</p>
				<section>
					<CreateComment plant={plant} setPlant={setPlant} />
				</section>
			</section>
		</div>
	);
};
export default RandomPlant;
