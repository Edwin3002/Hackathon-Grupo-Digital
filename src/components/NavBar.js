import '../style/NavBar.css'
export function NavBar() {
	return (
		<header className='navMenu'>
			<h1>home</h1>
			<nav className='navMenu__navegate '>
				<button>Generate</button>
				<button>
					{/* <Link to='/caracters'>History</Link> */}
					favorites
				</button>
			</nav>
		</header>
	)
}
