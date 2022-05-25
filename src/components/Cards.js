import React, { useEffect, useState } from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'

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
                <Card.Img variant="top" src={cat? cat[0].url: 'https://ih1.redbubble.net/image.3017788556.7359/st,small,507x507-pad,600x600,f8f8f8.jpg'} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}
