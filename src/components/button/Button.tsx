import Normal from './ButtonNormal';
import SlideDown from './ButtonSlideDown';
import Ripple from './ButtonRipple';
import Squares from './ButtonSquares';
import Beat from './ButtonBeat';

import { ButtonProps } from '@/app/types/type';

interface Props extends ButtonProps {
	button?: 'normal' | 'beat' | 'slideDown' | 'squares' | 'ripple';
}

const Button = ({
	backgroundColor,
	borderRadius,
	children,
	hasInitialAnimation,
	disabled,
	hasSpinner,
	iconSpinner,
	isLoading,
	size,
	style,
	textTransform,
	type,
	button = 'normal',
	onClick,
}: Props) => {
	switch (button) {
		case 'normal':
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
		case 'ripple':
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
		case 'squares':
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
		case 'beat':
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
		case 'slideDown':
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
