import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';

import { MessageType } from '@/prod/types';

interface Props {
	message: string;
	type: MessageType;
	sideY?: 'up' | 'down';
	sideX?: 'left' | 'right';
  duration?:number
}


function openAlert(props: Props) {
	const { message, type,  sideX, sideY, duration } = props;
	const Alert = lazy(() => import('./Alert'));
	const modalDiv = document.createElement('div');
	modalDiv.id = 'alert';
	document.body.appendChild(modalDiv);
	const root = createRoot(modalDiv);

	root.render(
		<Suspense fallback={<></>}>
			<Alert
				message={message}
				type={type}
				sideX={sideX}
				sideY={sideY}
        duration={duration}
			/>
		</Suspense>,
	);
}

export default openAlert;
