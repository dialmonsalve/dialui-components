import type { BasicColors } from '../types';

import styles from './notification.module.css';

interface Props {
	children?: string;
	backgroundColor?: BasicColors;
	size?: 'sm' | 'md' | 'lg';
	hasNotification: boolean;
}

const Notification = ({
	children,
	hasNotification,
	backgroundColor = 'red',
	size = 'md',
}: Props) => {
	const animation = hasNotification
		? `${styles["notification-animation"]}
				${styles[backgroundColor]}
		  }`
		: styles.disabled;

	return (
		<span className={`${styles.notification} ${styles[size]} ${animation}`}>
			<p>{children}</p>
		</span>
	);
};

export default Notification;
