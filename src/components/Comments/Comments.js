import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Comments = () => {
	// Variables
	const initialState = {
		name: '',
		comment: '',
		timestamp: '',
	};

	// States
	const [form, setForm] = useState(false);
	const [newComment, setNewComment] = useState(initialState);

	// Handlers
	const handleClose = () => setForm(false);
	const handleShow = () => setForm(true);
	const handleChange = (event) => {
		setForm({ ...form, [event.target.id]: event.target.value });
	};
	const handleSubmit = (event) => {
		
	}

	return (
		<div>
			<Modal show={form} onHide={handleClose} centered size='md'>
				<Modal.Header>
					<Modal.Title>Add A New Comment</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form action=''>
						{/* Name */}
						<label htmlFor='name'></label>
						<input
							type='text'
							id='name'
							placeholder='Name'
							onChange={handleChange}
						/>
						{/* Comment */}
						<label htmlFor='comment'></label>
						<input
							type='text'
							id='comment'
							placeholder='Comment'
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
						}}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
			<div>
				<Button onClick={handleShow}>New Comment</Button>
			</div>
		</div>
	);
};

export default Comments;
