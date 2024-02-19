import  useTheme from '../../hooks/context/useTheme';

export const Header = () => {
	const { theme, handleToggleTheme } = useTheme();

	return (
		<header className={`${theme} header`}>
			<div className='header__options' >
				<button type='button' onClick={handleToggleTheme}>
					Change
				</button>
			</div>
		</header>
	);
};
