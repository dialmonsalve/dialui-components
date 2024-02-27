import { Animation, MessageType } from '../../../types';
import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';

interface Props {
	animation?: Animation;
	type: MessageType;
	description: string;
	title: string;
	handleModalResponse?: (res: 'yes' | 'no' | 'ok' | 'cancel') => void;
}

function openModal(props: Props) {
	const { animation, description, title, type, handleModalResponse } = props;
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
				handleModalResponse={handleModalResponse}
			/>
		</Suspense>,
	);
}

export default openModal;
