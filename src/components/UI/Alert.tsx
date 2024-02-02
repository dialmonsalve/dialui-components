import { useAlert } from '@/hooks/context';

import styles from '@/styles/components/UI/alert.module.scss';
import type { MessageType } from '@/types';

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
	...props
}: Props) => {
	const hideAlert =
		sideX === 'left'
			? styles['hide-alert-left']
			: styles['hide-alert-right'];

	const { isOpenAlert } = useAlert();

	const showAlert = isOpenAlert ? `${styles['show-alert']}` : hideAlert;

	const className = `${styles.alert} ${styles[`alert__${type}`]} ${
		styles[`alert__${sideY}`]
	} ${styles[`alert__${sideX}`]} ${showAlert}`;

	return (
		<div className={className} {...props}>
			<p className={`${styles.alert__message}`}>{message}</p>
		</div>
	);
};

export default Alert;
