import { useEffect, useRef } from 'react';

import styles from '../../../styles/components/UI/alert.module.css';
import type { MessageType } from '@/types';

interface Props {
	message: string;
	type: MessageType;
	sideY?: 'up' | 'down';
	sideX?: 'left' | 'right';
	duration?: number;
	testid?:string
}

const Alert = ({
	message,
	type,
	testid="alert",
	sideY = 'up',
	sideX = 'right',
	duration = 2000,
}: Props) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const hideAlert =
			sideX === 'left' ? styles['hide-alert-left'] : styles['hide-alert-right'];
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

	const className = `${styles.alert} ${styles[`alert__${type}`]} ${
		styles[`alert__${sideY}`]
	} ${styles[`alert__${sideX}`]} ${styles[`show-alert-${sideX}`]}`;

	return (
		<div className={className} ref={ref} data-testid={testid} >
			<p className={`${styles.alert__message}`}>{message}</p>
		</div>
	);
};

export default Alert;
