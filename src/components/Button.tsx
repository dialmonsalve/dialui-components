import {
	ButtonBeat,
	ButtonNormal,
	ButtonRipple,
	ButtonSlideDown,
	ButtonSquares,
} from './button';

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
				<ButtonNormal
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
				</ButtonNormal>
			);
		case 'ripple':
			return (
				<ButtonRipple
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
				</ButtonRipple>
			);
		case 'squares':
			return (
				<ButtonSquares
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
				</ButtonSquares>
			);
		case 'beat':
			return (
				<ButtonBeat
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
				</ButtonBeat>
			);
		case 'slideDown':
			return (
				<ButtonSlideDown
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
				</ButtonSlideDown>
			);
	}
};

export default Button;
