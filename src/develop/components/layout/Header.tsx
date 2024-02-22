import { Link } from 'react-router-dom';
import useAppOptions from '../../hooks/context/useAppOptions';
import { Button } from '../../..';
import language from '../../lang/lang.json';
import { Moon } from '../icons/Moon';
import { Sun } from '../icons/Sun';

export const Header = () => {
	const { theme, handleToggleTheme, lang, handleToggleLang } = useAppOptions();

	return (
		<header className='header'>
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
					backgroundColor='purple-400'
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
					{theme === 'light' ? <Moon /> : <Sun />}
				</button>
			</div>
		</header>
	);
};
