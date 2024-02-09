import { createContext } from 'react';

interface ContextProps {
	//Properties
	isOpenModal: boolean;
	modalResponse: 'ok' | 'yes' | 'no' |"";

	// Functions
	openModal: () => void;
	closeModal: () => void;
	handleModalResponse: (res: 'yes' | 'no' | 'ok') => void;
}

export const ModalContext = createContext({} as ContextProps);
