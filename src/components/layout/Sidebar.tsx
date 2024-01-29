import { ReactNode } from 'react';
import { useSidebar } from '@/hooks/context';

interface Props {
	backgroundColor?: string;
	drawerWidth?: number;
	isAnimated?: boolean;
	children?: ReactNode;
}

export const Sidebar = ({
	backgroundColor = '#221c1c',
	drawerWidth = 300,
	isAnimated,
	children,
}: Props) => {
	const { isOpenSidebar, openSidebar, closeSidebar } = useSidebar();
	const initial = `${isAnimated ? 'animation-sidebar' : 'sidebar'}`;
	const animation = `${isAnimated ? 'animation-hide-sidebar' : 'hide-sidebar'}`;

	const onToggleSidebar = () => {
		isOpenSidebar ? closeSidebar() : openSidebar();
	};

	return (
		<>
			<nav
				className={`show-sidebar ${initial} ${
					isOpenSidebar ? '' : `${animation}`
				} `}
				style={{ backgroundColor, width: `${drawerWidth}px` }}
			>
				<ul className='sidebar__container'>{children}</ul>
				<div
					className={`menu ${isOpenSidebar ? '' : 'menu-hide'}`}
					onClick={onToggleSidebar}
					style={{ left: `calc(-2rem + ${drawerWidth}px)` }}
				/>
			</nav>
		</>
	);
};
