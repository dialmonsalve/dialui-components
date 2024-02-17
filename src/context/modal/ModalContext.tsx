import { createContext } from 'react';

interface ContextProps {
	//Properties
	modalResponse: 'ok' | 'yes' | 'no' | 'cancel';

	// Functions
	handleModalResponse: (res: 'yes' | 'no' | 'ok' | 'cancel') => void;
}

export const ModalContext = createContext({} as ContextProps);
