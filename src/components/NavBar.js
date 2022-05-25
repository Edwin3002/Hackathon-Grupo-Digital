import { NavLink } from './NavLink'
import '../style/NavBar.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
export function NavBar() {
	return (
		// <header className='navMenu'>
		// 	<NavLink to='/'>Home</NavLink>
		// 	<nav className='navMenu__navegate '>
		// 		<button className='navMEnu--btn'>
		// 			<NavLink to='/favorites'>favorites</NavLink>
		// 		</button>
		// 	</nav>
		// </header>
		<Navbar bg="light" expand="lg">
		<Container>
		  <Navbar.Brand href="#home">Generador de Gatitos</Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
			<Nav className="me-auto">
			<NavLink className='bg-danger' to='/'><Button className='m-1'>Home</Button></NavLink>
			  <NavLink to='/favorites'><Button className='m-1'>Favorites</Button></NavLink>
			</Nav>
		  </Navbar.Collapse>
		</Container>
	  </Navbar>
	)
}
