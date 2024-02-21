import { Link } from 'react-router-dom';
import useAppOptions from '../../hooks/context/useAppOptions';
import { Button } from '../../..';
import language from '../../lang/lang.json';

export const Header = () => {
	const { theme, handleToggleTheme, lang, handleToggleLang } = useAppOptions();

	return (
		<header className={`${theme} header`}>
			<div className='header__options'>
				<Link
					to='https://www.paypal.me/dialmonsalve'
					target='_blank'
					className='header__options--link'
				>
					{language[lang].coffee} ☕️
				</Link>
				<Button
					buttonStyle='beat'
					size='sm-100'
					backgroundColor='green-600'
					radius='radius-5'
					onClick={handleToggleLang}
					type='button'
				>
					{lang === 'es' ? 'en' : 'es'}
				</Button>
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
