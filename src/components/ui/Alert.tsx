import { useAlert } from '@/hooks/context';
import type { CSSProperties } from 'react';

import { HASH } from '@/const';
import type { MessageType } from '@/types';

interface Props {
	message: string;
	type: MessageType;
	sideY?: 'up' | 'down';
	sideX?: 'left' | 'right';
	duration?: number;
	style?: CSSProperties;
	className?: string;
}

const Alert = ({
	message,
	type,
	style,
	className = '',
	sideY = 'up',
	sideX = 'right',
	...props
}: Props) => {
	const hideAlert =
		sideX === 'left' ? `hide-alert-left${HASH}` : `hide-alert-right${HASH}`;

	const { isOpenAlert } = useAlert();

	const showAlert = isOpenAlert ? `show-alert${HASH}` : hideAlert;

	return (
		<div
			className={`${className} alert${HASH} alert${HASH}__${type} alert${HASH}__${sideY} alert${HASH}__${sideX} ${showAlert}`}
			style={style}
			{...props}
		>
			<p className={`alert${HASH}__message`}>{message}</p>
		</div>
	);
};

export default Alert;
