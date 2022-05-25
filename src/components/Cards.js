import React, { useEffect, useState } from 'react'
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import '../style/cards.css'

export const Cards = () => {

    const [cat, setCat] = useState()

    const url = 'https://api.thecatapi.com/v1/images/search'
    // const url = 'https://cats-digital-group.herokuapp.com/cats'
    const getData = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        setCat(data)
        return data
    }


    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div>
            <Card className='m-auto' style={{ width: '18rem' }}>
                <div className='contImg'>
                    <Card.Img className='cImg' variant="top" src={cat ? cat[0].url : 'https://ih1.redbubble.net/image.3017788556.7359/st,small,507x507-pad,600x600,f8f8f8.jpg'} />
                </div>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Button variant="primary" onClick={()=> getData()}>Next</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
