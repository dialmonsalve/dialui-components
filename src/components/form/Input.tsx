import type { FocusEvent, ChangeEvent, HTMLInputTypeAttribute } from 'react';

import '../../styles/components/form/input.css';
import { HASH } from '../../utils/hash';

interface Props {
	type: HTMLInputTypeAttribute;
	name: string;
	value: string | number;
	disabled?: boolean;
	placeholder?: string;
	autoComplete?: 'on' | 'off';
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
	onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Input = ({
	type,
	name,
	value,
	placeholder,
	autoComplete,
	onBlur,
	onChange,
	disabled = false,
}: Props) => {
	return (
		<input
			className={`input${HASH} ${
				disabled ? `input${HASH}__disabled}` : ''
			}`}
			type={type}
			name={name}
			value={value}
			placeholder={placeholder}
			disabled={disabled}
			onChange={onChange}
			onBlur={onBlur}
			autoComplete={type === 'password' ? 'off' : autoComplete}
		/>
	);
};

export default Input;
