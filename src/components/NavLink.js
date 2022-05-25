import { NavLink as NavLinkReactRouter } from 'react-router-dom'
export function NavLink({ to, children }) {
	return (
		<NavLinkReactRouter to={to} className={({ isActive }) => (isActive ? 'is-active' : null)}>
			{children}
		</NavLinkReactRouter>
	)
}
