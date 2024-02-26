import type { CSSProperties, ReactNode } from 'react';
import type { Colors, Size, Radius, SpinnerType } from '../../../types';

export interface ButtonProps {
	backgroundColor?: Colors;
	borderRadius?: Radius;
	children?: ReactNode;
	disabled?: boolean;
	hasInitialAnimation?: boolean;
	hasSpinner?: boolean;
	iconSpinner?: SpinnerType;
	isLoading?: boolean;
	size?: Size;
	style?: CSSProperties;
	type?: 'submit' | 'button' | 'reset';
	textTransform?: 'capitalize' | 'lowercase' | 'uppercase';
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
