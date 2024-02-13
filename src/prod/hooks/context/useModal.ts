import { useContext } from 'react';
import { ModalContext } from '../../prod/context/modal/ModalContext';

export const useModal = () => {
	const context = useContext(ModalContext);

	if (context === undefined)
		throw new Error('Context is not used inside the parent components');

	return context;
};