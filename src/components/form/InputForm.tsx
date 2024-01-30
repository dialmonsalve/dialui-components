import type {
	FocusEvent,
	ChangeEvent,
	InputHTMLAttributes,
	HTMLInputTypeAttribute,
} from 'react';

import { HASH } from '@/const';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	type: HTMLInputTypeAttribute;
	name: string;
	value: string | number | readonly string[] | undefined;
	disabled?: boolean;
	placeholder?: string;
	className?: string;
	autoComplete?: 'on' | 'off';
	ontBlur?: (e: FocusEvent<HTMLInputElement>) => void;
	onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const InputForm = ({
	type,
	name,
	value,
	placeholder,
	className = '',
	autoComplete,
	onBlur,
	onChange,
	disabled = false,
	...props
}: Props) => {
	return (
		<input
			className={`${className} input${HASH} ${
				disabled ? `input${HASH}-disabled` : ''
			}`}
			type={type}
			name={name}
			value={value}
			placeholder={placeholder}
			disabled={disabled}
			onChange={onChange}
			onBlur={onBlur}
			autoComplete={type === 'password' ? 'off' : autoComplete}
			{...props}
		/>
	);
};

export default InputForm;
