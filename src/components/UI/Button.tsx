import type { ReactNode, ButtonHTMLAttributes } from 'react';

import { IconSpinner } from '.';
import { RippleButton } from '.';

import styles from '@/styles/components/UI/button.module.scss';
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
	type,
	...props
}: Props) => {
	const isDisabled =
		disabled || isLoading
			? styles['btn-disabled']
			: `${styles[`btn__${backgroundColor}`]} ${styles[buttonStyle]}`;

	const isAnimated = hasInitialAnimation ? styles['btn__animated'] : '';

	const ownClassName = `${styles.btn} ${styles[`btn__${size}`]} ${
		styles[`btn__${radius}`]
	} ${isDisabled} ${isAnimated}`;

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
