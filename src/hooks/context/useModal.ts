import { useContext } from 'react';
import ModalContext from '../../context/modal/ModalContext';

const useModal= ()=> {
	const context = useContext(ModalContext);

	if (context === undefined)
		throw new Error('Context is not used inside the parent components');

	return {
		modalResponse: context.modalAnswer,
		handleModalResponse: context.handleModalAnswer,
	};
}

export default useModal;
