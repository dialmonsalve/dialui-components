import { useState, KeyboardEvent, type FocusEvent } from 'react';

import styles from '../../styles/components/form/inputTags.module.css';
import inputStyle from '../../styles/components/form/input.module.css';

interface InputTagProps {
	optionTags: string[];
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
	onChange: (value: string[]) => void;
	placeholder?: string;
}

const InputTags = ({
	optionTags,
	placeholder,
	onChange,
	onBlur,
}: InputTagProps) => {
	const [value, setValue] = useState('');

	const handleAddTags = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') {
			if (optionTags.includes(value.trim().toLocaleLowerCase())) return;
			onChange([...optionTags, value]);
			setValue('');
		}
	};
	const handleDeleteTags = (compareTag: string) => {
		onChange(optionTags.filter((oldTag) => oldTag !== compareTag));
	};

	return (
		<>
			<input
				className={inputStyle.input}
				type='text'
				name='tag'
				value={value}
				onBlur={onBlur}
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={(e) => {
					e.key === 'Enter' && e.preventDefault();
					handleAddTags(e);
				}}
				placeholder={placeholder}
			/>
			<ul className={styles.tags}>
				<li className={styles.tags__item}>
					{optionTags.map((tag) => (
						<span
							className={styles.tags__badge}
							key={tag}
							onClick={() => handleDeleteTags(tag)}
						>
							{tag}
							<span className={styles.tags__remove}>&times;</span>
						</span>
					))}
				</li>
			</ul>
		</>
	);
};
export default InputTags;
