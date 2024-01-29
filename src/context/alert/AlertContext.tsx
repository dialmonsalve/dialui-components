import { createContext } from 'react';

interface ContextProps {
	//Properties
	isOpenAlert: boolean;

	// Functions
	openAlert: (duration?: number) => void;
}

export const AlertContext = createContext({} as ContextProps);
