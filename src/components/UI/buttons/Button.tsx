import ButtonNormal from './ButtonNormal';
import ButtonBeat from './ButtonBeat';
import ButtonRipple from './ButtonRipple';
import ButtonSlideDown from './ButtonSlideDown';
import ButtonSquares from './ButtonSquares';

import { ButtonProps } from './type';
import "@/develop/sass/components/buttons/button.scss"

type ButtonType = |'normal' | 'squares' | 'beat' | 'ripple' | 'slideDown'

interface Props extends ButtonProps {
	button?: ButtonType
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
		style,
		size,
		type,
		textTransform
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
				style={style}
				textTransform={textTransform}
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
				style={style}
				textTransform={textTransform}
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
				style={style}
				textTransform={textTransform}
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
				style={style}
				textTransform={textTransform}
			>
				{children}
			</ButtonSlideDown>
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
				style={style}
				textTransform={textTransform}
			>
				{children}
			</ButtonSquares>
		);
	}
};

export default Button;
