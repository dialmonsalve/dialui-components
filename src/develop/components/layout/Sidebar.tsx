import { useState } from 'react';

import { NavigationLink } from '../NavigationLink';

import useAppOptions from '../../hooks/context/useAppOptions';
import language from '../../lang/itemNavigation.json';

export const Sidebar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const { theme } = useAppOptions();

	return (
		<>
			<nav className={`sidebar ${theme} ${toggleMenu ? 'show-sidebar' : ''}`}>
				<ul className='sidebar__container'>
					{language.map((link) => (
						<NavigationLink
							setToggleMenu={setToggleMenu}
							key={link.id}
							to={link.to}
						>
							{link.label}
						</NavigationLink>
					))}
				</ul>
			</nav>
			<div className={`${theme} btn-menu`}>
				<div
					className='btn-menu__btn'
					onClick={() => setToggleMenu(!toggleMenu)}
				>
					<span
						className={`${
							toggleMenu
								? 'btn-menu__open'
								: 'btn-menu__close'
						}`}
					/>
				</div>
			</div>
		</>
	);
};
