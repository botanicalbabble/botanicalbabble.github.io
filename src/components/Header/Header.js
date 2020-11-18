import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Header = () => {
	const [form, setForm] = useState(false);
	const handleClose = () => setForm(false);
	const handleShow = () => setForm(true);

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
						<label htmlFor='name'>Name:</label>
						<input type='text' name='' id='name' placeholder='Name' />
						<br />
						<label htmlFor='family'>Family:</label>
						<input type='text' name='' id='family' placeholder='Family' />
						<br />
						<label htmlFor='common-name'>Common Name:</label>
						<input type='text' name='' id='' placeholder='Family Common Name' />
						<br />
						<label htmlFor='genus'>Genus:</label>
						<input type='text' name='' id='' placeholder='Genus' />
						<br />
						<label htmlFor='scientific-name'>Scientific Name:</label>
						<input type='text' name='' id='' placeholder='Scientific Name' />
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Header;
