import { HASH } from '@utils/hash';
import type { BasicColors } from '../../types';

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
		? `notification-animation${HASH} ${
				`notification${HASH}${backgroundColor}`
		  }`
		: `notification${HASH}__disabled`;

	return (
		<span
			className={`notification${HASH} ${
				[`notification${HASH}__${size}`]
			} ${animation}`}
		>
			<p>{children}</p>
		</span>
	);
};

export default Notification;
