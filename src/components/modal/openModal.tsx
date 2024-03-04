import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';

import { Animation, MessageType } from '../../app/types';

interface Props {
	animation?: Animation;
	type?: MessageType;
	description: string;
	title: string;
	handleModalAnswer?: (answer: 'yes' | 'no' | 'ok' | 'cancel') => void;
}

function openModal(props: Props) {
	const { animation, description, title, type="info", handleModalAnswer } = props;
	const Modal = lazy(() => import('./Modal'));
	const modalDiv = document.createElement('div');
	modalDiv.id = 'modal';
	document.body.appendChild(modalDiv);
	const root = createRoot(modalDiv);

	root.render(
		<Suspense fallback={<></>}>
			<Modal
				animation={animation}
				type={type}
				description={description}
				title={title}
				handleModalAnswer={handleModalAnswer}
			/>
		</Suspense>,
	);
}

export default openModal;
