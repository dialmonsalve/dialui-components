import Beat from './ButtonBeat';
import Normal from './ButtonNormal';
import Ripple from './ButtonRipple';
import SlideDown from './ButtonSlideDown';
import Squares from './ButtonSquares';

import './buttonNormal.module.css';
import { ButtonProps } from '../../types/type';

type ButtonType = 'normal' | 'squares' | 'beat' | 'ripple' | 'slideDown';

interface Props extends ButtonProps {
	button?: ButtonType;
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
		textTransform,
	} = props;
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
				type={type}
				style={style}
				textTransform={textTransform}
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
				type={type}
				style={style}
				textTransform={textTransform}
			>
				{children}
			</Ripple>
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
				type={type}
				style={style}
				textTransform={textTransform}
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
				type={type}
				style={style}
				textTransform={textTransform}
			>
				{children}
			</SlideDown>
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
				type={type}
				style={style}
				textTransform={textTransform}
			>
				{children}
			</Squares>
		);
	}
};

export default Button;
