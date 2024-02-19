import { NavLink } from 'react-router-dom';

export interface NavigationProps {
	children?: string;
	to: string;
}
export const NavigationLink = ({ children, to, ...props }: NavigationProps) => {
	return (
		<li className='item'>
			<NavLink
				to={to}
				style={({ isActive }) => {
					return {
						backgroundColor: isActive
							? ' rgba(131, 11, 164, 0.213)'
							: 'transparent',
					};
				}}
				{...props}
			>
				{children}
			</NavLink>
		</li>
	);
};
