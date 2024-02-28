import { createContext } from 'react';

interface ContextProps {
	//Properties
	modalAnswer: 'ok' | 'yes' | 'no' | 'cancel';

	// Functions
	handleModalAnswer: (answer: 'yes' | 'no' | 'ok' | 'cancel') => void;
}

const ModalContext = createContext({} as ContextProps);

export default ModalContext
