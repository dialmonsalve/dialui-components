import { useRippleButton } from '@/hooks/useRippleButton';

import type { ReactNode, ButtonHTMLAttributes } from 'react';

export interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
	className: string;
	children?: string | ReactNode;
}
const RippleButton = ({ children, ...props }: Button) => {
	const { buttonRef } = useRippleButton();

	return (
		<button ref={buttonRef} type='button' {...props}>
			{children}
		</button>
	);
};

export default RippleButton;
