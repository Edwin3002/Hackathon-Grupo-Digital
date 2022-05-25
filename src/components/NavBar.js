import { NavLink } from './NavLink'
import '../style/NavBar.css'
export function NavBar() {
	return (
		<header className='navMenu'>
			<NavLink to='/'>Home</NavLink>
			<nav className='navMenu__navegate '>
				<button className='navMEnu--btn'>
					<NavLink to='/favorites'>favorites</NavLink>
				</button>
			</nav>
		</header>
	)
}
