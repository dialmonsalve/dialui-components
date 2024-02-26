import { Link } from 'react-router-dom';
import useAppOptions from '../../hooks/context/useAppOptions';
import { Moon } from '../icons/Moon';
import { Sun } from '../icons/Sun';
import Select from '../../../components/form/Select';

const options = ['es', 'en'];

export const Header = () => {
	const { theme, handleToggleTheme, lang, handleToggleLang } = useAppOptions();

	return (
		<header className='header'>
			<div className='header__options'>
				<Link
					to='https://www.paypal.me/dialmonsalve'
					target='_blank'
					className='header__options--link'
					style={{width:"130px"}}
				>
					{lang === "en" ? "Bug me a coffee ☕️" : "Invítame un café ☕"}
				</Link>
				<div style={{width:"80px"}} >
				<Select
					onChange={handleToggleLang}
					options={options}
					selectState={lang}
				/>
				</div>

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
