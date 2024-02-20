import useTheme from '../../hooks/context/useTheme';

export const Header = () => {
	const { theme, handleToggleTheme } = useTheme();

	return (
		<header className={`${theme} header`}>
			<div className='header__options'>
				<button
					className='header__options--theme-btn'
					type='button'
					onClick={handleToggleTheme}
				>
					<img
						src={`${
							theme === 'light' ? '/assets/moon.svg' : '/assets/sun.svg'
						} `}
						alt=''
					/>
				</button>
			</div>
		</header>
	);
};
