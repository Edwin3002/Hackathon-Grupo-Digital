import { useEffect, useState } from 'react'

export default function useGetCats() {
	const [list, setList] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const url = 'https://cats-digital-group.herokuapp.com/cats/'

	useEffect(() => {
		setLoading(true)
		const fetchData = async () => {
			try {
				const response = await fetch(url)
				const data = await response.json()
				setList(data)
				setLoading(false)
			} catch (error) {
				setError(error)
			}
		}
		fetchData()
	}, [])

	return { list, loading, error }
}
