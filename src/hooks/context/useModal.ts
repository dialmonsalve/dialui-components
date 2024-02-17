import { useContext } from 'react';
import ModalContext from '../../context/modal/ModalContext';

function useModal() {
	const context = useContext(ModalContext);

	if (context === undefined)
		throw new Error('Context is not used inside the parent components');

	return {
		modalResponse: context.modalResponse,
		handleModalResponse: context.handleModalResponse,
	};
}

export default useModal;
