import MiceIconsSpinner from '../iconSpinner/IconSpinnerMice';
import FleaIconsSpinner from '../iconSpinner/IconsSpinnerFleas';
import DotIconsSpinner from '../iconSpinner/IconSpinnerDots';
import EclipseIconSpinner from '../iconSpinner/IconSpinnerEclipse';
import SquareIconsSpinner from '../iconSpinner/IconSpinnerSquares';

import { ButtonProps } from './type';
import type { SpinnerSize } from '../../../types';
import { HASH } from '@/utils/hash';

import '@/prodStyles/buttons/buttonBeat.css';

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
	const mainClasses = `btn${HASH} ${borderRadius}${HASH} ${size}${HASH} btn${HASH}__${textTransform}}`;

	const isDisabled =
		disabled || isLoading
			? `btn${HASH}__disabled`
			: `btn${HASH}__${backgroundColor} beat${HASH}`;

	const isAnimated = hasInitialAnimation ? `btn${HASH}__animated` : '';

	const partialSize = [...size];
	const ISize = (partialSize[0] + partialSize[1]) as SpinnerSize;

	return (
		<button
			className={`${mainClasses} ${isDisabled} ${isAnimated}`}
			type={type}
			disabled={disabled || isLoading}
			onClick={onClick}
			style={style}
		>
			{children}
			{hasSpinner && isLoading ? (
				<span className={`btn${HASH}__ico`}>
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

export default ButtonBeat;
