import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { apiUrl } from '../../config';

const commentsUrl = `${apiUrl}/comments`;
const plantsUrl = `${apiUrl}/plants`;

const CreateComment = ({ plant, setPlant }) => {
	// States
	const [show, setShow] = useState(false);
	const [formState, setFormState] = useState({
		comment_name: '',
		comment_body: '',
		plantId: '',
	});

	// Variables
	const plantIdForm = plant._id;

	// Functions // Handlers
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleChange = (event, plant_id) => {
		setFormState({
			...formState,
			[event.target.id]: event.target.value,
			plantId: plantIdForm,
		});
	};
	const handlePostComment = function () {
		const data = formState;
		Axios.post(
			// 'https://botanical-babble.herokuapp.com/api/comments',
			commentsUrl,
			data
		)
			.then((response) => console.log(response))
			.then(() => {
				fetch(plantsUrl + '/' + plantIdForm)
					.then((res) => res.json())
					.then((res) => {
						setPlant(res);
					})
					.catch(console.error);
			});
	};

	return (
		<>
			<div className='container'>
				<h2>Comment Section</h2>
				<div>
					{plant.comments?.map((comment) => {
						return (
							<div className='container' key={comment._id}>
								<ul>
									<li>{comment.comment_name}</li>
									<li>{comment.comment_body}</li>
									<li>{comment.createdAt}</li>
								</ul>
							</div>
						);
					})}
				</div>
			</div>

			<Button variant='primary' onClick={handleShow}>
				Create a comment
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Enter your comment playa
					<form action='submit' onSubmit={handlePostComment}>
						<input
							type='text'
							id='comment_name'
							placeholder='Enter your name, b'
							onChange={handleChange}
						/>
						<input
							type='textarea'
							id='comment_body'
							placeholder='what you gotta say?'
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
						type='submit'
						onClick={() => {
							handleClose();
							handlePostComment();
						}}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default CreateComment;
