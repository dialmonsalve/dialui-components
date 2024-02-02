import { useRippleButton } from '@/hooks/useRippleButton';

import type { ReactNode, ButtonHTMLAttributes } from 'react';

export interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
	className: string;
	children?: string | ReactNode;
}
const RippleButton = ({ children, type, ...props }: Button) => {
	const { buttonRef } = useRippleButton();

	return (
		<button ref={buttonRef} type={type} {...props}>
			{children}
		</button>
	);
};

export default RippleButton;
