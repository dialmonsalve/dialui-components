import { createContext } from 'react';

interface ContextProps {
	//Properties
	theme: 'light' | 'dark';
	lang: 'es' | 'en';

	// Functions
	handleToggleTheme: () => void;
	handleToggleLang: () => void;
}

export const AppOptionsContext = createContext({} as ContextProps);
