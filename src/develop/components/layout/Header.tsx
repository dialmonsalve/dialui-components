import { Link } from 'react-router-dom';

import useAppOptions from '../../hooks/context/useAppOptions';
import Select from '../../../components/form/Select';

import { Moon, Sun, Logo } from '../icons/';

const options = ['es', 'en'];

export const Header = () => {
	const { theme, handleToggleTheme, lang, handleToggleLang } = useAppOptions();

	return (
		<header className={`header ${theme}`}>
			<Link to='/' className='header__logo'>
				<Logo />
			</Link>
			<div className='header__options'>
				<Link
					to='https://www.paypal.me/dialmonsalve'
					target='_blank'
					rel='noreferrer'
					className='header__link'
				>
					{lang === 'en' ? 'Bug me a coffee ☕️' : 'Invítame un café ☕'}
				</Link>
				<button
					className='header__options--theme-btn'
					type='button'
					onClick={handleToggleTheme}
				>
					{theme === 'light' ? <Moon /> : <Sun />}
				</button>

				<div style={{ width: '80px' }}>
					<Select
						onChange={handleToggleLang}
						options={options}
						selectState={lang}
					/>
				</div>
			</div>
		</header>
	);
};
