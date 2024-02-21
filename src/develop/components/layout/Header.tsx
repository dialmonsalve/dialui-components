import { Link,    } from 'react-router-dom';
import useAppOptions from '../../hooks/context/useAppOptions';

export const Header = () => {
	const { theme, handleToggleTheme } = useAppOptions();

	return (
		<header className={`${theme} header`}>
			<div className='header__options'>
				<Link
				to="https://www.paypal.me/dialmonsalve"
				target='_blank'

				className='header__options--link'
				>
					Bug me a coffee ☕️
				</Link>
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
