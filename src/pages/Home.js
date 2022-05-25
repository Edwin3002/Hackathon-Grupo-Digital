import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { apiCats, apiUrl } from '../utils/apiUrl.js'
import '../style/App.css'
import { CardCats } from '../components/CardsCats'

export function Home() {
	const [cat, setCat] = useState()

	const getData = async () => {
		const resp = await fetch(apiUrl)
		const data = await resp.json()
		setCat(data[0])
		return data
	}
	const addFavorites = (cat) =>{
		console.log(cat.url)
		fetch(apiCats,{
			method: 'POST',
			body: JSON.stringify({
				url: cat.url,
				name: 'Gato'
			}),
			headers: {
				"Content-type" : "application/json; charset=UTF-8"
				}
		})
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<main className=' p-5'>
			<CardCats catData={cat} />
			<div className='mx-auto my-4 d-flex justify-content-around'>

				<Button variant='success'  onClick={() => getData()}>
					Next
				</Button>
				<Button variant='primary' onClick={() => addFavorites(cat)}>Add favorites</Button>
			</div>
		</main>
	)
}
