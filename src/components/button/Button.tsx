import Normal from './ButtonNormal';
import SlideDown from './ButtonSlideDown';
import Ripple from './ButtonRipple';
import Squares from './ButtonSquares';
import Beat from './ButtonBeat';

import { ButtonProps } from '../../app/types/type';

interface Props extends ButtonProps {
	button?: 'normal' | 'beat' | 'slideDown' | 'squares' | 'ripple';
}

const Button = ({
	backgroundColor = 'blue-100',
	borderRadius = 'r-2',
	children,
	hasInitialAnimation,
	disabled,
	hasSpinner,
	iconSpinner,
	isLoading,
	size = 'sm-100',
	style,
	textTransform = 'lowercase',
	type = 'button',
	button = 'normal',
	onClick,
}: Props) => {
	if (button === 'normal') {
		return (
			<Normal
				backgroundColor={backgroundColor}
				borderRadius={borderRadius}
				disabled={disabled}
				hasInitialAnimation={hasInitialAnimation}
				hasSpinner={hasSpinner}
				iconSpinner={iconSpinner}
				isLoading={isLoading}
				onClick={onClick}
				size={size}
				style={style}
				textTransform={textTransform}
				type={type}
			>
				{children}
			</Normal>
		);
	}

	if (button === 'ripple') {
		return (
			<Ripple
				backgroundColor={backgroundColor}
				borderRadius={borderRadius}
				disabled={disabled}
				hasInitialAnimation={hasInitialAnimation}
				hasSpinner={hasSpinner}
				iconSpinner={iconSpinner}
				isLoading={isLoading}
				onClick={onClick}
				size={size}
				style={style}
				textTransform={textTransform}
				type={type}
			>
				{children}
			</Ripple>
		);
	}
	if (button === 'squares') {
		return (
			<Squares
				backgroundColor={backgroundColor}
				borderRadius={borderRadius}
				disabled={disabled}
				hasInitialAnimation={hasInitialAnimation}
				hasSpinner={hasSpinner}
				iconSpinner={iconSpinner}
				isLoading={isLoading}
				onClick={onClick}
				size={size}
				style={style}
				textTransform={textTransform}
				type={type}
			>
				{children}
			</Squares>
		);
	}
	if (button === 'beat') {
		return (
			<Beat
				backgroundColor={backgroundColor}
				borderRadius={borderRadius}
				disabled={disabled}
				hasInitialAnimation={hasInitialAnimation}
				hasSpinner={hasSpinner}
				iconSpinner={iconSpinner}
				isLoading={isLoading}
				onClick={onClick}
				size={size}
				style={style}
				textTransform={textTransform}
				type={type}
			>
				{children}
			</Beat>
		);
	}
	if (button === 'slideDown') {
		return (
			<SlideDown
				backgroundColor={backgroundColor}
				borderRadius={borderRadius}
				disabled={disabled}
				hasInitialAnimation={hasInitialAnimation}
				hasSpinner={hasSpinner}
				iconSpinner={iconSpinner}
				isLoading={isLoading}
				onClick={onClick}
				size={size}
				style={style}
				textTransform={textTransform}
				type={type}
			>
				{children}
			</SlideDown>
		);
	}
};

export default Button;
