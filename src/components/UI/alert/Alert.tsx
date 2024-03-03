import { useEffect, useRef } from 'react';

import type { MessageType } from '../../../types';
import { HASH } from '../../../utils/hash';

import '../../../styles/components/UI/alert.css';

interface Props {
	message: string;
	type: MessageType;
	sideY?: 'up' | 'down';
	sideX?: 'left' | 'right';
	duration?: number;
}
const Alert = ({
	message,
	type,
	sideY = 'up',
	sideX = 'right',
	duration = 2000,
}: Props) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const hideAlert =
			sideX === 'left' ? `hide-alert-left${HASH}` : `hide-alert-right${HASH}`;
		function callback() {
			document.querySelector('#alert')?.remove();
			ref.current?.removeEventListener('animationend', callback);
		}

		function closeModal() {
			ref.current?.classList.add(hideAlert);
			ref.current?.addEventListener('animationend', callback, { once: true });
		}

		setTimeout(() => {
			closeModal();
		}, duration);
	}, [duration]);

	const className = `alert${HASH} alert${HASH}__${type} alert${HASH}__${sideY} alert${HASH}__${sideX}
	} ${`show-alert-${sideX}${HASH}`}`;

	return (
		<div data-testid='alert' className={className} ref={ref}>
			<p className={`alert${HASH}${message}`}>{message}</p>
		</div>
	);
};

export default Alert;
