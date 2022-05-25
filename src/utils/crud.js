import { apiCats } from './apiUrl'

const deleteCat = async (id) => {
	if (!id) return
	await fetch(`${apiCats}${id}`, {
		method: 'DELETE',
	})
	window.location.reload()
}

export { deleteCat }

/**
 * 	editarPerfil(usuario, id) {
		axios
			.put(`${this.url}${id}`, usuario)
			.then((data) => console.log(data))
			.catch((err) => console.warn(err));
	}
 */
