import styles from '@/styles/components/UI/notification.module.scss';
import type { Colors } from '@/types';

interface Props {
	children?: string;
	backgroundColor?: Colors;
	size?: 'sm' | 'md' | 'lg';
	hasNotification: boolean;
}

const Notification = ({
	children,
	hasNotification,
	backgroundColor = 'red-600',
	size = 'md',
}: Props) => {
	const animation = hasNotification
		? `${styles['notification-animation']} ${
				styles[`notification__${backgroundColor}`]
		  }`
		: styles['notification__gray-200'];

	return (
		<span
			className={`${styles.notification} ${
				styles[`notification__${size}`]
			} ${animation}`}
		>
			<p>{children}</p>
		</span>
	);
};

export default Notification;