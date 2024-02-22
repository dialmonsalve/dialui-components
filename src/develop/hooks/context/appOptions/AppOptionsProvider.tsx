import { ReactNode, useEffect, useState } from 'react';
import { AppOptionsContext } from './AppOptionsContext';

export interface Props {
	children: ReactNode;
}

const data = localStorage.getItem('options');

const optionsStorage = JSON.parse(data || '{"theme":"light", "lang":"en"}');

export const AppOptionsProvider = ({ children }: Props) => {
	const [theme, setTheme] = useState<'light' | 'dark'>(optionsStorage.theme);
	const [lang, setLang] = useState<'es' | 'en'>(optionsStorage.lang);

	useEffect(() => {
		localStorage.setItem('options', JSON.stringify({ theme, lang }));
	}, [theme, lang]);

	const handleToggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
			return;
		}
		setTheme('light');
	};

	const handleToggleLang = () => {
		if (lang === 'en') {
			setLang('es');
			return;
		}
		setLang('en');
	};


	
	return (
		<AppOptionsContext.Provider
			value={{
				theme,
				lang,
				handleToggleLang,
				handleToggleTheme,
			}}
		>
			{children}
		</AppOptionsContext.Provider>
	);
};
