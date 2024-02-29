import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Sidebar } from './Sidebar';

import useAppOptions from '../../hooks/context/useAppOptions';

export const Layout = () => {
	const { theme } = useAppOptions();

	return (
		<div className='container'>
			<Sidebar />
			<Header />

			<main className={`main ${theme}`}>
				<Outlet />
			</main>
		</div>
	);
};
