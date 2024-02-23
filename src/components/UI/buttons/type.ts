import type { ReactNode } from 'react';
import type { Colors, Size, Radius, SpinnerType } from '../../../types';

export interface ButtonProps {
	backgroundColor?: Colors;
	children?: ReactNode;
	disabled?: boolean;
	hasInitialAnimation?: boolean;
	isLoading?: boolean;
	borderRadius?: Radius;
	size?: Size;
	iconSpinner?: SpinnerType;
	type?: 'submit' | 'button' | 'reset';
	hasSpinner?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
