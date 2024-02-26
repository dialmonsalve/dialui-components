import { useState } from 'react';
import useAppOptions from '../../hooks/context/useAppOptions';

import { NavigationLink } from '../NavigationLink';

import language from "../../lang/itemNavigation.json"

export const Sidebar = () => {
	const { theme, lang } = useAppOptions();

	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<nav className={`${theme} navigation`} >
			<div className={'navigation__btn-menu'}>
				<button
					type='button'
					className='navigation__btn-menu--btn'
					onClick={() => setToggleMenu(!toggleMenu)}
				>
					<span
						className={`${
							toggleMenu
								? 'navigation__btn-menu__open'
								: 'navigation__btn-menu__close'
						}`}
					/>
				</button>
			</div>
			<nav className={`sidebar ${toggleMenu ? 'show-sidebar' : ''}`} >
				<ul className='sidebar__container'>
					{language.map((link) => (
						<NavigationLink
							setToggleMenu={setToggleMenu}
							key={link.id}
							to={link.to}
						>
							{link.label[lang]}
						</NavigationLink>
					))}
				</ul>
			</nav>
		</nav>
	);
};
