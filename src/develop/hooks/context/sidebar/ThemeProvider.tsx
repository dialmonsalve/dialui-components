import React, { ReactNode, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

export interface Props {
	children: ReactNode;
}

const data = localStorage.getItem('theme');
const themeStorage = JSON.parse(data || '{"theme":"light"}');

export const SidebarProvider = React.memo(({ children }: Props) => {
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
		<ThemeContext.Provider
			value={{
				theme,
				handleToggleTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
});
