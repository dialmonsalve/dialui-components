import { useState } from 'react';
import useAppOptions from '../../hooks/context/useAppOptions';
import { navigation } from '../../utils/utils';
import { NavigationLink } from '../NavigationLink';

export const Sidebar = () => {
	const { theme } = useAppOptions();

	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<>
			<div className={`${theme} container-btn-menu`}>
				<button
					type='button'
					className='container-btn-menu__btn'
					onClick={() => setToggleMenu(!toggleMenu)}
					>
					<span
						className={`${
							toggleMenu
							? 'container-btn-menu__open'
							: 'container-btn-menu__close'
						}`}
						/>
				</button>
			</div>
			<nav className={`${theme} sidebar ${toggleMenu ? 'show-sidebar' : ''}`}>
						<div style={{width:"20vw", height:"10vh", borderBottom:"1px solid purple" }} ></div>
				<ul className='sidebar__container'>
					{navigation.map((link) => (
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
		</>
	);
};
