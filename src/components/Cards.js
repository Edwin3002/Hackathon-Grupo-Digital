import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useGetInput } from '../hooks/useGetInput'
import '../style/cards.css'
import { deleteCat, editCat } from '../utils/crud'
import { Modal } from './Modal'
// import { Modal } from './Modal'

export const Cards = ({ catData }) => {
	const [show, setShow] = useState(false)
	const { name, inputRef, getInput } = useGetInput()

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	return (
		<div>
			<Card className='m-auto' style={{ width: '18rem' }}>
				<div className='contImg'>
					<Card.Img
						className='cImg'
						variant='top'
						src={
							catData
								? catData.url
								: 'https://ih1.redbubble.net/image.3017788556.7359/st,small,507x507-pad,600x600,f8f8f8.jpg'
						}
					/>
				</div>
				<Card.Body>
					<Card.Title>{catData ? catData.name : 'Gato'}</Card.Title>
				</Card.Body>
				<button onClick={() => deleteCat(catData.id)}>Delete</button>
				<Button variant='primary' onClick={handleShow}>
					Edit
				</Button>
			</Card>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Change Name Cat</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input onChange={getInput} type='text' ref={inputRef} />
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={() => editCat(catData.id, name)}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}
