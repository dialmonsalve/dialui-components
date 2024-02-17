import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Sidebar } from './Sidebar';

import { NavigationLink } from '../NavigationLink';
import { useSidebar } from '../../hooks/context/useSidebar';

export const Layout = () => {
	const { closeSidebar } = useSidebar();

	const drawerWidth = 350;
	return (
		<>
			<Header />
			<Sidebar isAnimated drawerWidth={drawerWidth}>
				<li className='item item--active' onClick={closeSidebar}>
					<NavigationLink
						to='/'
						size='w-100'
						style={{ fontSize: '20px', height: '45px' }}
					>
						home
					</NavigationLink>
				</li>

				<li className='item item--active' onClick={closeSidebar}>
					<NavigationLink
						to='/icon-spinner'
						style={{ fontSize: '20px', height: '45px' }}
						color={'white'}
						size='w-100'
					>
						Icon Spinner
					</NavigationLink>
				</li>

				<li className='item item--active' onClick={closeSidebar}>
					<NavigationLink
						to='/buttons'
						style={{ fontSize: '20px', height: '45px' }}
						color={'white'}
						size='w-100'
					>
						Buttons
					</NavigationLink>
				</li>

				<li className='item item--active' onClick={closeSidebar}>
					<NavigationLink
						to='/modal'
						style={{ fontSize: '20px', height: '45px' }}
						color={'white'}
						size='w-100'
					>
						modal
					</NavigationLink>
				</li>

				<li className='item item--active' onClick={closeSidebar}>
					<NavigationLink
						to='/alert'
						style={{ fontSize: '20px', height: '45px' }}
						color={'white'}
						size='w-100'
					>
						alert
					</NavigationLink>
				</li>
				<li className='item item--active' onClick={closeSidebar}>
					<NavigationLink
						to='/spinner'
						color={'white'}
						style={{ fontSize: '20px', height: '45px' }}
						size='w-100'
					>
						spinner
					</NavigationLink>
				</li>

				<li className='item item--active' onClick={closeSidebar}>
					<NavigationLink
						to='/notification'
						color={'white'}
						style={{ fontSize: '20px', height: '45px' }}
						size='w-100'
					>
						Notification
					</NavigationLink>
				</li>
				<li className='item item--active' onClick={closeSidebar}>
					<NavigationLink
						to='/form'
						color={'white'}
						style={{ fontSize: '20px', height: '45px' }}
						size='w-100'
					>
						Form
					</NavigationLink>
				</li>

				<li className='item item--active' onClick={closeSidebar}>
					<NavigationLink
						to='/drag'
						color={'white'}
						style={{ fontSize: '20px', height: '45px' }}
						size='w-100'
					>
						Drag
					</NavigationLink>
				</li>
				<li className='item item--active' onClick={closeSidebar}>
					<NavigationLink
						to='/infinite-scroll'
						color={'white'}
						style={{ fontSize: '20px', height: '45px' }}
						size='w-100'
					>
						infinite scroll
					</NavigationLink>
				</li>
				<li className='item item--active' onClick={closeSidebar}>
					<NavigationLink
						to='/table'
						color={'white'}
						style={{ fontSize: '20px', height: '45px' }}
						size='w-100'
					>
						table
					</NavigationLink>
				</li>
			</Sidebar>

			<main className='right-layout'>
				<Outlet />
			</main>
		</>
	);
};
