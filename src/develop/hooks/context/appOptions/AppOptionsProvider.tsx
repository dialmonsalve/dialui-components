import  { ReactNode, useEffect, useState } from 'react';
import { AppOptionsContext } from './AppOptionsContext';

export interface Props {
	children: ReactNode;
}

const data = localStorage.getItem('theme');
const themeStorage = JSON.parse(data || '{"theme":"light"}');

export const AppOptionsProvider = ({ children }: Props) => {
	const [theme, setTheme] = useState<'light' | 'dark'>(themeStorage.theme);

	useEffect(() => {
		localStorage.setItem('theme', JSON.stringify({ theme }));
	}, [theme]);

	const handleToggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
			return;
		}
		setTheme('light');
	};

	return (
		<AppOptionsContext.Provider
			value={{
				theme,
				handleToggleTheme,
			}}
		>
			{children}
		</AppOptionsContext.Provider>
	);
};
