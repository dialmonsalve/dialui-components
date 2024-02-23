import ButtonNormal from './ButtonNormal';
import ButtonBeat from './ButtonBeat';
import ButtonFilled from './ButtonFilled';
import ButtonRipple from './ButtonRipple';
import ButtonSlideDown from './ButtonSlideDown';
import ButtonSquares from './ButtonSquares';
import { ButtonProps } from './type';

interface Props extends ButtonProps {
	button: 'normal' | 'squares' | 'filled' | 'beat' | 'ripple' | 'slideDown';
}
const Button = (props: Props) => {
	const {
		button = 'normal',
		borderRadius,
		backgroundColor,
		children,
		disabled,
		hasInitialAnimation,
		hasSpinner,
		iconSpinner,
		isLoading,
		onClick,
		size,
		type,
	} = props;
	if (button === 'normal') {
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
				type={type}
			>
				{children}
			</ButtonNormal>
		);
	}
	if (button === 'ripple') {
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
				type={type}
			>
				{children}
			</ButtonRipple>
		);
	}
	if (button === 'beat') {
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
				type={type}
			>
				{children}
			</ButtonBeat>
		);
	}
	if (button === 'slideDown') {
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
				type={type}
			>
				{children}
			</ButtonSlideDown>
		);
	}
	if (button === 'filled') {
		return (
			<ButtonFilled
				backgroundColor={backgroundColor}
				borderRadius={borderRadius}
				disabled={disabled}
				hasInitialAnimation={hasInitialAnimation}
				hasSpinner={hasSpinner}
				iconSpinner={iconSpinner}
				isLoading={isLoading}
				onClick={onClick}
				size={size}
				type={type}
			>
				{children}
			</ButtonFilled>
		);
	}

	if (button === 'squares') {
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
				type={type}
			>
				{children}
			</ButtonSquares>
		);
	}
};

export default Button;
