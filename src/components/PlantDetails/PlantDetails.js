import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import CreateComment from './CreateComment';
// import { apiUrl } from '../../config';
import './plantDetails.css';

const PlantDetails = ({ match }) => {
	//// -- Variables -- ////
	const url = `https://botanical-babble.herokuapp.com/api`

	const plantId = match.params._id
	const plantUrl = `${url}/plants/${plantId}`

	//// -- States -- ////
	const initialState = {
		name: '',
		slug: 'hello slug',
		family: '',
		common_name: '',
		genus: '',
		scientific_name: '',
	}
	const [plant, setPlant] = useState([])
	const [form, setForm] = useState(false)
	const [formState, setFormState] = useState(initialState)

	// -- useEffect(s) -- //
	useEffect(function getPlant() {
		Axios(plantUrl)
			.then((data) => {
				console.log(data)
				setPlant(data.data)
			})
			.catch((error) => {})
		//eslint-disable-next-line
	}, [])

	//// -- Functions / Handlers -- ////

	const handleClose = () => setForm(false)
	const handleShow = () => setForm(true)

	// To submit changes to your plant details
	const handleSubmit = (event) => {
		handlePut()
	}

	//Put request to update to specific plant id page
	const handlePut = () => {
		const data = formState
		Axios.put(plantUrl, data).then((response) => {
			console.log(response)
			setPlant(response.data)
		})
	}
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value })
	}

	// Edit Plant Modal
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
						<label htmlFor='family_common_name'>Name:</label>
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
							handleClose()
							handleSubmit()
						}}>
						update changes
					</Button>
				</Modal.Footer>
			</Modal>
		)
	}

	//// -- Page Content -- ////
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

				<button onClick={handleShow} className='button button-fav'>
					Edit Plant
				</button>
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
			</section>
			<section>
				<CreateComment plant={plant} setPlant={setPlant} />
			</section>
		</>
	)
};

export default PlantDetails;
