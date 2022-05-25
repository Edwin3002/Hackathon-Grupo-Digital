import { Cards } from '../components/Cards'
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import '../style/App.css'

export function Home() {
	const [cat, setCat] = useState()

	const url = 'https://api.thecatapi.com/v1/images/search'
	const getData = async () => {
		const resp = await fetch(url)
		const data = await resp.json()
		setCat(data[0])
		return data
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<main className='App'>
			<Cards catData={cat} />
			<Button variant='primary' className='m-auto d-flex' onClick={() => getData()}>
				Next
			</Button>
		</main>
	)
}
