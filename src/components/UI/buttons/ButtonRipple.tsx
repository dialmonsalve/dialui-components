import { useRippleButton } from '../../../hooks/useRippleButton';

import MiceIconsSpinner from '../iconSpinner/IconSpinnerMice';
import FleaIconsSpinner from '../iconSpinner/IconsSpinnerFleas';
import DotIconsSpinner from '../iconSpinner/IconSpinnerDots';
import EclipseIconSpinner from '../iconSpinner/IconSpinnerEclipse';
import SquareIconsSpinner from '../iconSpinner/IconSpinnerSquares';

import styles from '../../../styles/components/buttons/button.module.css';
import styleRipple from '../../../styles/components/buttons/buttonRipple.module.css';

import { ButtonProps } from './type';
import type { IconSpinnerSize } from '../../../types';

const ButtonRipple = ({
	backgroundColor = 'blue-200',
	children,
	disabled = false,
	hasInitialAnimation = false,
	isLoading = false,
	borderRadius = 'r-0',
	size = 'md-100',
	iconSpinner = 'eclipse',
	hasSpinner = false,
	onClick,
	type = 'button',
	textTransform = 'lowercase',
}: ButtonProps) => {
	const { buttonRef } = useRippleButton();

	const mainClasses = `${styles.btn} ${styles[borderRadius]} ${styles[size]} ${styles[textTransform]}`;

	const isDisabled =
		disabled || isLoading
			? styles.disabled
			: `${styles[`btn__${backgroundColor}`]} ${styleRipple.ripple}`;

	const isAnimated = hasInitialAnimation ? styles.animated : '';

	const partialSize = [...size];
	const ISize = (partialSize[0] + partialSize[1]) as IconSpinnerSize;

	return (
		<button
			className={`${mainClasses} ${isDisabled} ${isAnimated}`}
			type={type}
			disabled={disabled || isLoading}
			onClick={onClick}
			ref={buttonRef}
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
