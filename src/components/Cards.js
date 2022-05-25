import React from 'react'
import { Card } from 'react-bootstrap'
import '../style/cards.css'
import { deleteCat } from '../utils/crud'

export const Cards = ({ catData }) => {
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
			</Card>
		</div>
	)
}
