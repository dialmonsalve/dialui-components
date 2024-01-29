import { useRippleButton } from "@/hooks/useRippleButton";

import type { ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className: string;
	children?: string | ReactNode;
}
const RippleButton = ({ children, ...props }: ButtonProps) => {
	const { buttonRef } = useRippleButton();

	return (
		<button ref={buttonRef} {...props}>
			{children}
		</button>
	);
};

export default RippleButton;
