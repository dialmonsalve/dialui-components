import { useContext } from 'react';
import ModalContext from '../../context/modal/ModalContext';

const useModal= ()=> {
	const context = useContext(ModalContext);

	if (context === undefined)
		throw new Error('Context is not used inside the parent components');

	return {
		modalAnswer: context.modalAnswer,
		handleModalAnswer: context.handleModalAnswer,
	};
}

export default useModal;
