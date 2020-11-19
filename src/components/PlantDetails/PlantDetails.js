import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'
import './plantDetails.css'
import CreateComment from './CreateComment'
import { apiUrl } from '../../config'

//Created a container to hold individual plant profile
const PlantDetails = ({ match }) => {


	const plantId = match.params._id
	const [plant, setPlant] = useState([])
	// const url = `https://botanical-babble.herokuapp.com/api/plants/${plantId}`
	const url = `${apiUrl}/plants/${plantId}`

	const initialState = {
		name: '',
		slug: 'hello slug',
		family: '',
		common_name: '',
		genus: '',
		scientific_name: '',
	}

	const [form, setForm] = useState(false)
	const handleClose = () => setForm(false)
	const handleShow = () => setForm(true)
	const [formState, setFormState] = useState(initialState)
	const [show, setShow] = useState(false)

	useEffect(function getPlant() {
		Axios(url)
			.then((data) => {
				setPlant(data.data)
			})
			.catch((error) => {})
	}, [])
	if (!plant) {
		return null
	}

	const handlePut = function () {
		const data = formState
			
			// slug: "This is updated"
		
		//Put request to update to specific plant id page
		Axios.put(
			`https://botanical-babble.herokuapp.com/api/plants/${plantId}`,
			
			data
		).then((response) => console.log(response))
	}

	// To submit changes to your plant details
	const handleSubmit = (event) => {
		// event.preventDefault()
		// setFormState(initialState);
		handlePut()
	}

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value })
	}

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
							name={plant.common_name}
							id='name'
							placeholder={plant.common_name}
							onChange={handleChange}
						/>
						<br />
						{/* Family */}
						<label htmlFor='family'>Family:</label>
						<input
							type='text'
							name=''
							id='family'
							placeholder='Family'
							onChange={handleChange}
						/>
						<br />
						{/* Common Name */}
						<label htmlFor='common_name'>Common Name:</label>
						<input
							type='text'
							name=''
							id='common_name'
							placeholder='Family Common Name'
							onChange={handleChange}
						/>
						<br />
						{/* Genus */}
						<label htmlFor='genus'>Genus:</label>
						<input
							type='text'
							name=''
							id='genus'
							placeholder='Genus'
							onChange={handleChange}
						/>
						<br />
						{/* Scientific Name */}
						<label htmlFor='scientific_name'>Scientific Name:</label>
						<input
							type='text'
							name=''
							id='scientific_name'
							placeholder='Scientific Name'
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
							// handlePut()
						}}>
						update changes
					</Button>
				</Modal.Footer>
			</Modal>

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
					<u>Family Name</u>: {plant.family_common_name}
				</p>
				<p>
					<u>Scientific Family Name</u>: {plant.family}
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
				
				
				<CreateComment plant={plant} /> 
			</section> 
		</>
		//Created button above to edit and update plant details
	)
}

export default PlantDetails
