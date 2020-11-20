import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { apiUrl } from '../../config';
import { Redirect } from 'react-router-dom';

const Header = () => {
	const [form, setForm] = useState(false);
	const [newPlantId, setNewPlantId] = useState(null);
	const handleClose = () => setForm(false);
	const handleShow = () => setForm(true);

	const initialState = {
		name: '',
		family: '',
		common_name: '',
		genus: '',
		scientificName: '',
		slug: 'hello slug',
	};

	const [formState, setFormState] = useState(initialState);

	const handlePost2 = function () {
		const data = formState;
		Axios.post(`${apiUrl}/plants`, data).then((response) => {
			console.log(response);
			setNewPlantId(response.data._id);
		});
	};

	const handleSubmit = (event) => {
		// event.preventDefault();
		// setFormState(initialState);
		handlePost2();
	};

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};
	if (newPlantId) {
		return <Redirect to={`/plant/${newPlantId}`} />;
	}

	return (
		<>
			<Navbar as='header' sticky='top' bg='light' expand='lg' variant='light' >
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
						<Nav.Link href='/allplants'>All Plants</Nav.Link>
						<Nav.Link href='/randomplant'>Random Plant</Nav.Link>
						<Nav.Link onClick={handleShow}>New Plant</Nav.Link>
					</Nav>
					{/* <Form inline>
						<FormControl type='text' placeholder='Search' className='mr-sm-2' />
						<Button variant='outline-success'>Search</Button>
					</Form> */}
				</Navbar.Collapse>
			</Navbar>
			<Modal show={form} onHide={handleClose} centered size='md'>
				<Modal.Header>
					<Modal.Title>Create A New Plant</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form action='submit' onSubmit={handleSubmit}>
						{/* Plant Name */}
						<Form.Group>
							<Form.Label>Plant Name</Form.Label>
							<Form.Control
								type='text'
								id='name'
								placeholder='ex. Evergreen oak'
								onChange={handleChange}
								required
							/>
							<Form.Text className='text-muted'>
								{/* We'll never share your plant with anyone else. */}
							</Form.Text>
						</Form.Group>

						{/* Scientific Name */}
						<Form.Group>
							<Form.Label>Scientific Name</Form.Label>
							<Form.Control
								type='text'
								id='scientificName'
								placeholder='ex. Quercus rotundifolia'
								onChange={handleChange}
								required
							/>
						</Form.Group>

						{/* Family Common Name */}
						<Form.Group>
							<Form.Label>Family Common Name</Form.Label>
							<Form.Control
								type='text'
								id='common_name'
								placeholder='ex. Beech family'
								onChange={handleChange}
							/>
							<Form.Text className='text-muted'>* Optional</Form.Text>
						</Form.Group>

						{/* Family */}
						<Form.Group>
							<Form.Label>Family</Form.Label>
							<Form.Control
								type='text'
								id='family'
								placeholder='ex. Fagaceae'
								onChange={handleChange}
								required
							/>
						</Form.Group>

						{/* Genus */}
						<Form.Group>
							<Form.Label>Genus</Form.Label>
							<Form.Control
								type='text'
								id='genus'
								placeholder='ex. Quercus'
								onChange={handleChange}
								required
							/>
						</Form.Group>

						{/* <Form.Group>
							<Form.Check type='checkbox' label='Check me out' />
						</Form.Group> */}
						<Button variant='primary' type='submit' onClick={handleSubmit}>
							Submit
						</Button>
						<Button variant='secondary' onClick={handleClose}>
							Close
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>

				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Header;
