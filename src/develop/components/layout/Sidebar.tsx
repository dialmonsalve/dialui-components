import useTheme from '../../hooks/context/useTheme';
import { navigation } from '../../utils/utils';
import { NavigationLink } from '../NavigationLink';

export const Sidebar = () => {
	const { theme } = useTheme();

	return (
		<>
			<nav className={`${theme} sidebar`}>
				<ul className='sidebar__container'>

					{
						navigation.map((link)=>(
							<NavigationLink key={link.id} to={link.to}>{link.label}</NavigationLink>

						))
					}

				</ul>
			</nav>
		</>
	);
};
