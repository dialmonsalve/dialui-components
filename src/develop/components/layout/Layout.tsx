import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Sidebar } from './Sidebar';

import useAppOptions from '../../hooks/context/useAppOptions';

export const Layout = () => {
	const { theme, } = useAppOptions();

	return (
		<>
			<Sidebar />
			<div className={`${theme} container`}>
				<Header />
				<main className='main' >
				<Outlet />

				</main>
			</div>
		</>
	);
};
