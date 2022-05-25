import React from 'react'
import { Card } from 'react-bootstrap'
import '../style/cards.css'

export const Cards = ({ catData }) => {
	console.log('🚀 ~ file: Cards.js ~ line 6 ~ Cards ~ catData', catData)
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
			</Card>
		</div>
	)
}
