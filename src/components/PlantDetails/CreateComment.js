import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { apiUrl } from '../../config';

const url = 'http://localhost:8000/api/comments';

const CreateComment = ({ plant }) => {
	// States
	const [show, setShow] = useState(false);
	const [formState, setFormState] = useState({
		comment_name: '',
		comment_body: '',
		plantId: '',
	});
	const [commentList, setCommentList] = useState([]);

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
			url,
			data
		).then((response) => console.log(response));
	};
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setCommentList(res);
			})
			.catch(console.error);
	}, []);

	// useEffect(() => {
	// 	Axios.get(`${apiUrl}/comments`)
	// 		.then((res) => {
	// 			setCommentList(res);
	// 		})
	// 		.catch(console.error);
	// }, []);

	// Console.logs
	console.log(plant.comments);

	if (!commentList) {
		return null;
	}
	let commentsList = plant.comments?.map((comment) => {
		return (
			<div className='container'>
				<ul>
					<li>{comment.comment_name}</li>
					<li>{comment.comment_body}</li>
					<li>{comment.createdAt}</li>
				</ul>
			</div>
		);
	});

	return (
		<>
			<div className='container'>
				<h2>Comment Section</h2>
				<div>
					<p>{commentsList}</p>
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
