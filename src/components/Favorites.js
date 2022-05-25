import { ListCats } from './ListCats'
import '../style/Favorites.css'
import { NavBar } from './NavBar'

export function Favorites() {
	return (
		<>
			<NavBar />
			<main className='mainLayout'>
				<ListCats />
			</main>
		</>
	)
}
