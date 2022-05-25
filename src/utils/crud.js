import { apiCats } from './apiUrl'

const deleteCat = async (id) => {
	if (!id) return

	const url = `${apiCats}${id}`

	await fetch(url, {
		method: 'DELETE',
	})

	window.location.reload()
}

const editCat = async (id, name) => {
	if (!id) return

	const url = `${apiCats}${id}`

	await fetch(url, {
		method: 'PUT',
		body: JSON.stringify({
			id,
			name,
		}),
		headers: {
			'Content-Type': 'application/json; chartset=UTF-8',
		},
	})

	window.location.reload()
}

export { deleteCat, editCat }
