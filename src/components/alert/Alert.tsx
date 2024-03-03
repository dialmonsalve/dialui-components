import { useEffect, useRef } from 'react';

import type { MessageType } from '../../types';

import styles from './alert.module.scss';

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

	const className = `${styles.alert} ${styles[type]} ${styles[sideY]} ${styles[sideX]} ${styles[`show-alert-${sideX}`]}`;

	return (
		<div data-testid='alert' className={className} ref={ref}>
			<p className={styles.message}>{message}</p>
		</div>
	);
};

export default Alert;
