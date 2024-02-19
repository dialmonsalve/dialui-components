import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Sidebar } from './Sidebar';

import  useTheme  from '../../hooks/context/useTheme';

export const Layout = () => {
	const { theme } = useTheme();

	return (
		<>
			<Sidebar />
			<div className={`${theme} contain`}>
				<Header />
				<main className='main'>
					<Outlet />
				</main>
			</div>
		</>
	);
};
