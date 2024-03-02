import type { ChangeEvent, FocusEvent } from 'react';

import styles from '@/prodStyles/form/textarea.module.css';

interface Props {
	name: string;
	disabled?: boolean;
	onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	placeholder?: string;
	totalChars?: number;
	value: string;
	onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({
	value,
	name,
	placeholder,
	disabled,
	totalChars = 0,
	onChange,
	onBlur,
}: Props) => {
	const total = totalChars > 0 ? totalChars - value?.length : value?.length;

	const isTotal = totalChars > 0 && total < 0 ? 0 : total;

	return (
		<div className={styles.container} >
			<textarea
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				name={name}
				className={styles['text-area']}
				placeholder={placeholder}
				disabled={disabled}
			/>
			<span
				className={`${styles['text-area__value']} ${
					styles[`${isTotal === 0 ? 'text-area__red' : 'text-area__green'}`]
				} `}
			>
				{isTotal}
			</span>
		</div>
	);
};

export default Textarea;
