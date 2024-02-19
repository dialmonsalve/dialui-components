import React, { ReactNode, useState } from 'react';
import { ThemeContext } from './ThemeContext';

export interface Props {
	children: ReactNode;
}

export const SidebarProvider = React.memo(({ children }: Props) => {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

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
