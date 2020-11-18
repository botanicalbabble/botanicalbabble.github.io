import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

const Header = () => {
	const [form, setForm] = useState(false);
	const handleClose = () => setForm(false);
	const handleShow = () => setForm(true);

	const initialState = {
		name: '',
		family: '',
		commonName: '',
		genus: '',
		scientificName: '',
	};

	// const handlePost = function () {
	// 	Axios({
	// 		method: 'post',
	// 		url: 'https://botanical-babble.herokuapp.com/api/plants',
	// 		data: {
	// 			name: 'Plant Name',
	// 			family: 'Tree family',
	// 			commonName: 'Tree',
	// 			genus: 'Green Trees',
	// 			scientificName: 'Science Tree',
	// 		},
	// 	});
	// };

	const handlePost2 = function () {
		const common_name = 'plant'
		Axios.post('https://botanical-babble.herokuapp.com/api/plants', {
			common_name
		}).then((response) => console.log(response))
	}

	const handleSubmit = (event) => {
		// event.preventDefault();
		// setFormState(initialState);
		handlePost2();
	};

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};

	const [formState, setFormState] = useState(initialState);

	return (
		<>
			<Navbar as='header' sticky='top' bg='light' expand='lg'>
				<Navbar.Brand href='/'>
					<img
						src='https://i.imgur.com/bpNKU65.png'
						alt='babblelogo'
						height='25px'
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='/plants'>All Plants</Nav.Link>
						<Nav.Link href='/random'>Random Plant</Nav.Link>
						<Nav.Link onClick={handleShow}>New Plant</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type='text' placeholder='Search' className='mr-sm-2' />
						<Button variant='outline-success'>Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
			<Modal show={form} onHide={handleClose} centered size='md'>
				<Modal.Header>
					<Modal.Title>Create A New Plant</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form action='submit'>
						{/* Name */}
						<label htmlFor='name'>Name:</label>
						<input
							type='text'
							name=''
							id='name'
							placeholder='Name'
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
						<label htmlFor='commonName'>Common Name:</label>
						<input
							type='text'
							name=''
							id='commonName'
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
						<label htmlFor='scientificName'>Scientific Name:</label>
						<input
							type='text'
							name=''
							id='scientificName'
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
							handleClose();
							handleSubmit();
						}}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Header;
