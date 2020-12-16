import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import moment from 'moment';
import './CreateComment.css';

const CreateComment = ({ plant, setPlant }) => {

	//// -- Variables -- ////

	const url = `https://botanical-babble.herokuapp.com/api`;
	const plantId = plant._id;
	const commentsUrl = `${url}/comments`;
	const plantsUrl = `${url}/plants`;

	//// -- States -- ////

	const [show, setShow] = useState(false);
	const [formState, setFormState] = useState({
		comment_name: '',
		comment_body: '',
		plantId: '',
	});

	//// -- Functions / Handlers -- ////

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleChange = (event, plant_id) => {
		setFormState({
			...formState,
			[event.target.id]: event.target.value,
			plantId: plantId,
		});
	};
	const handlePostComment = function () {
		const data = formState;
		Axios.post(
			commentsUrl,
			data
		)
			.then((response) => console.log(response))
			.then(() => {
				fetch(plantsUrl + '/' + plantId)
					.then((res) => res.json())
					.then((res) => {
						setPlant(res);
					})
					.catch(console.error);
			});
	};

	
	const handleDeleteComment = function (event, commentId) {
		const deleteUrl = `${commentsUrl}/${plantId}/${commentId}`;
		Axios.delete(
			deleteUrl
		)
			.then((response) => console.log(response))
			.then(() => {
				fetch(plantsUrl + '/' + plantId)
					.then((res) => res.json())
					.then((res) => {
						setPlant(res);
					})
					.catch(console.error);
			});
	};


	//// -- Page Content -- ////
	
	return (
		<>
			<div className='comment-container'>

				<div>
					{plant.comments?.map((comment) => {
						return (
							<div className='container' key={comment._id}>
								<ul>
									<li className='name'>
										{comment.comment_name}
										<Button
											class='btn'
											className='delete-btn'
											variant='dark'
											onClick={(event) => {
												handleDeleteComment(event, comment._id)
											}}>
											<i class='fa fa-trash'></i>
										</Button>
									</li>
									<hr />
									<li>{comment.comment_body}</li>
									<li>
										{moment(comment.createdAt).fromNow()}
									</li>
								</ul>
							</div>
						)
					})}
				</div>
				<Button variant='primary' className='button-join' onClick={handleShow}>
					Join the Babble!
				</Button>
			</div>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Comment</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form action='submit' onSubmit={handlePostComment}>
						<input
							type='text'
							id='comment_name'
							placeholder='Name'
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
							handleClose()
							handlePostComment()
						}}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
};

export default CreateComment;
