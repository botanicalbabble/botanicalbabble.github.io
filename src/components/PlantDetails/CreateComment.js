import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'
import { apiUrl } from '../../config'

const CreateComment = ({ plant }) => {
    const [show, setShow] = useState(false)
    
    const plantIdForm = plant._id
    // const plantIdForm = `5fb5c274157393df03a59179`

    // const initialState = { 
      
    // }
	const [formState, setFormState] = useState({
		comment_name: '',
		comment_body: '',
        // plant_id: plantIdForm,
        plantId: ''
	})

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const handleChange = (event, plant_id) => {
        setFormState({ ...formState, [event.target.id]: event.target.value, plantId: plantIdForm })
        
	}


    const handlePostComment = function () {
			const data = formState
			Axios.post(
                // 'https://botanical-babble.herokuapp.com/api/comments',
                `${apiUrl}/comments`,
				data
			).then((response) => console.log(response))
        }
        

    



	return (
		<>
			<p>This is where shit will be comments</p>
			<p>{plant.rank}</p>

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
							handleClose()
							handlePostComment()
						}}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default CreateComment
