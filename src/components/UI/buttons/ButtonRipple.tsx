import { ReactNode } from 'react';
import { useRippleButton } from '../../../hooks/useRippleButton';

import MiceIconsSpinner from '../iconSpinner/IconSpinnerMice';
import FleaIconsSpinner from '../iconSpinner/IconsSpinnerFleas';
import DotIconsSpinner from '../iconSpinner/IconSpinnerDots';
import EclipseIconSpinner from '../iconSpinner/IconSpinnerEclipse';
import SquareIconsSpinner from '../iconSpinner/IconSpinnerSquares';

import type {
	ButtonStyle,
	Colors,
	IconSpinnerSize,
	Radius,
	Size,
	SpinnerType,
} from '../../../types';

import styles from '../../../styles/components/buttons/button.module.css';
import styleRipple from '../../../styles/components/buttons/buttonRipple.module.css';

interface Props {
	backgroundColor?: Colors;
	buttonStyle?: ButtonStyle;
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

const ButtonRipple = ({
	backgroundColor = 'blue-200',
	children,
	disabled,
	hasInitialAnimation = false,
	isLoading = false,
	borderRadius = 'r-0',
	size = 'md-100',
	iconSpinner = 'eclipse',
	hasSpinner = false,
	onClick,
	type,
}: Props) => {
	const { buttonRef } = useRippleButton();

	const isDisabled =
		disabled || isLoading
			? styles['btn-disabled']
			: `${styles[`btn__${backgroundColor}`]}`;

	const isAnimated = hasInitialAnimation ? styles['btn__animated'] : '';

	const properties = {
		disabled: disabled || isLoading,
		onClick,
	};

	const partialSize = [...size];
	const ISize = (partialSize[0] + partialSize[1]) as IconSpinnerSize;

	return (
		<button
			ref={buttonRef}
			type={type}
			className={`${styles.btn} ${styleRipple.ripple} ${styles[borderRadius]} ${styles[size]} ${isDisabled} ${isAnimated}`}
			{...properties}
		>
			{children}
			{hasSpinner && isLoading ? (
				<span className={styles.ico}>
					{iconSpinner === 'mice' && <MiceIconsSpinner size={ISize} />}
					{iconSpinner === 'fleas' && <FleaIconsSpinner size={ISize} />}
					{iconSpinner === 'dots' && <DotIconsSpinner size={ISize} />}
					{iconSpinner === 'eclipse' && <EclipseIconSpinner size={ISize} />}
					{iconSpinner === 'squares' && <SquareIconsSpinner size={ISize} />}
				</span>
			) : (
				<></>
			)}
		</button>
	);
};

export default ButtonRipple;
