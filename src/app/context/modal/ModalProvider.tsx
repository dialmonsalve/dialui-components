import { ReactNode, useState } from 'react';
import ModalContext from './ModalContext';

export interface Props {
	children: ReactNode;
}

type ModalAnswer = 'ok' | 'yes' | 'no' | 'cancel';

const ModalProvider = ({ children }: Props) => {
	const [modalAnswer, setModalAnswer] = useState<ModalAnswer>(
		'' as ModalAnswer,
	);

	function handleModalAnswer(answer: ModalAnswer) {
		const validAnswer =
			answer !== 'yes' && answer !== 'no' && answer !== 'ok' && answer !== 'cancel';

		if (validAnswer) {
			throw new Error(`'${answer}' is not a valid answerponse`);
		}
		setModalAnswer(answer);
	}

	const value = {
		modalAnswer,
		handleModalAnswer,
	};

	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
};

export default ModalProvider;
