import { useCallback } from 'react';
import MiceIconsSpinner from '../iconSpinner/IconSpinnerMice';
import FleaIconsSpinner from '../iconSpinner/IconSpinnerFleas';
import DotIconsSpinner from '../iconSpinner/IconSpinnerDots';
import EclipseIconSpinner from '../iconSpinner/IconSpinnerEclipse';
import SquareIconsSpinner from '../iconSpinner/IconSpinnerSquares';

import { ButtonProps } from '../../app/types/type';
import type { SpinnerSize } from '../../app/types';

import styles from './buttonNormal.module.css';
import slideDown from './buttonSlideDown.module.css';

const ButtonSlideDown = ({
	backgroundColor = 'blue-200',
	children,
	disabled = false,
	hasInitialAnimation = false,
	isLoading = false,
	borderRadius = 'r-0',
	size = 'sm-100',
	iconSpinner = 'eclipse',
	hasSpinner = false,
	onClick,
	type = 'button',
	textTransform = 'lowercase',
	style,
}: ButtonProps) => {
	const isDisabled = useCallback(
		() => disabled || isLoading,
		[disabled, isLoading],
	);

	const isAnimated = useCallback(
		() => hasInitialAnimation,
		[hasInitialAnimation],
	);

	const mainClasses = `${styles.btn} ${styles[borderRadius]} ${styles[size]} ${styles[textTransform]}`;
	const background = `${styles[`btn__${backgroundColor}`]} ${
		slideDown['slide-down']
	}`;

	const partialSize = [...size];
	const ISize = (partialSize[0] + partialSize[1]) as SpinnerSize;

	return (
		<button
			className={`${mainClasses} 
			${isDisabled() ? styles.disabled : background} 
			${isAnimated() ? styles.animated : ''}`}
			type={type}
			disabled={disabled || isLoading}
			onClick={onClick}
			style={style}
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

export default ButtonSlideDown;
