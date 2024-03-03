import { Suspense } from 'react';
import MiceIconsSpinner from '../iconSpinner/IconSpinnerMice';
import FleaIconsSpinner from '../iconSpinner/IconSpinnerFleas';
import DotIconsSpinner from '../iconSpinner/IconSpinnerDots';
import EclipseIconSpinner from '../iconSpinner/IconSpinnerEclipse';
import SquareIconsSpinner from '../iconSpinner/IconSpinnerSquares';

import { ButtonProps } from '../../types/type';
import type { SpinnerSize } from '../../types';

import styles from './buttonNormal.module.css';
import beat from './buttonBeat.module.css';

const ButtonBeat = ({
	backgroundColor = 'blue-200',
	children,
	disabled = false,
	hasInitialAnimation = false,
	isLoading = false,
	borderRadius = 'r-0',
	size = 'sm-100',
	iconSpinner = 'eclipse',
	hasSpinner = false,
	style,
	type = 'button',
	onClick,
	textTransform = 'lowercase',
}: ButtonProps) => {
	const mainClasses = `${styles.btn} ${styles[borderRadius]} ${styles[size]} ${styles[textTransform]}`;

	const isDisabled =
		disabled || isLoading
			? `${styles.disabled}`
			: `${styles[`btn__${backgroundColor}`]} ${beat.beat}`;

	const isAnimated = hasInitialAnimation ? `${styles.animated}` : '';

	const partialSize = [...size];
	const ISize = (partialSize[0] + partialSize[1]) as SpinnerSize;

	return (
		<Suspense>
			<button
				className={`${mainClasses} ${isDisabled} ${isAnimated}`}
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
		</Suspense>
	);
};

export default ButtonBeat;
