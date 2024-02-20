import { NavLink } from 'react-router-dom';

export interface NavigationProps {
	children?: string;
	to: string;
	setToggleMenu: (close: false) => void;
}
export const NavigationLink = ({
	children,
	to,
	setToggleMenu,
}: NavigationProps) => {
	return (
		<li className='sidebar__container--item'>
			<NavLink
				to={to}
				style={({ isActive }) => {
					return {
						backgroundColor: isActive ? '#6e176e' : 'transparent',
						color: isActive ? 'white' : '',
					};
				}}
				onClick={() => setToggleMenu(false)}
				className='sidebar__container--link'
			>
				{children}
			</NavLink>
		</li>
	);
};
