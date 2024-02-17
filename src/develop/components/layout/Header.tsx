import { ReactNode } from 'react';


interface Props {
	backgroundColor?: string;
	borderRadius?: string;
	drawerWidth?: number;
	padding?: string;
	space?: number;
	children?: ReactNode;
}

export const Header = ({
	backgroundColor = 'white',
	borderRadius = '1rem',

	padding = '2rem',

	children,
	...props
}: Props) => {

	return (
		<>

			<header
				className='header'
				style={{
					backgroundColor,
					padding,
					borderRadius,
				}}
				{...props}
			>
				{children}
			</header>
		</>
	);
};
