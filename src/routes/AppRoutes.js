import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Favorites } from '../pages/Favorites'
import { Home } from '../pages/Home'

export function AppRoutes() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/favorites' element={<Favorites />} />
			</Routes>
		</BrowserRouter>
	)
}
