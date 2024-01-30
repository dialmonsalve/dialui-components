import type { ReactNode, ButtonHTMLAttributes } from 'react';

import { IconSpinner } from './';
import { RippleButton } from './';

import { HASH } from '@/const';
import type { Colors, Size, Radius, SpinnerType, ButtonStyle } from '@/types';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	backgroundColor?: Colors;
	buttonStyle?: ButtonStyle;
	children?: string | ReactNode;
	disabled?: boolean;
	hasInitialAnimation?: boolean;
	isLoading?: boolean;
	radius?: Radius;
	size?: Size;
	spinnerType?: SpinnerType;
	className?: string;
	type?: 'submit' | 'button' | 'reset';
}

const Button = ({
	backgroundColor = 'blue-200',
	buttonStyle = 'normal',
	children,
	disabled,
	hasInitialAnimation = false,
	isLoading = false,
	radius = 'radius-0',
	size = 'md-100',
	spinnerType = 'eclipse',
	className='',
	type,
	...props
}: Props) => {
	const isDisabled =
		disabled || isLoading
			? `btn-disabled${HASH}`
			: `btn${HASH}__${backgroundColor} ${buttonStyle}${HASH}`;

	const isAnimated = hasInitialAnimation ? `btn${HASH}__animated` : '';

	const ownClassName = `${className} btn${HASH} btn${HASH}__${size} btn${HASH}__${radius} ${isDisabled} ${isAnimated}`;

	const properties = {
		disabled: disabled || isLoading,
		className: ownClassName,
		...props,
	};

	if (buttonStyle !== 'ripple') {
		return (
			<button type={type} {...properties}>
				{buttonStyle === 'squares' && (
					<>
						<span />
						<span />
					</>
				)}
				{!isLoading ? children : <IconSpinner spinnerType={spinnerType} />}
			</button>
		);
	}
	if (buttonStyle === 'ripple') {
		return (
			<RippleButton {...properties}>
				{!isLoading ? children : <IconSpinner spinnerType={spinnerType} />}
			</RippleButton>
		);
	}
};

export default Button;
