import { useEffect, useState } from 'react'
import { apiCats } from '../utils/apiUrl'
import { fetchData } from '../utils/fetchData'

export function useGetCats() {
	const [list, setList] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		fetchData(apiCats)
			.then((data) => {
				setList(data)
				setLoading(false)
			})
			.catch((error) => setError(error))
	}, [])

	return { list, loading, error, setList }
}
