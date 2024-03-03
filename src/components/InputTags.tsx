import { useState, KeyboardEvent, type FocusEvent } from 'react';

import styles from './inputTags.module.scss';
import inputStyle from './input.module.scss';

interface InputTagProps {
	placeholder?: string;
	tags: string[];
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
	setTags: (value: any[]) => void;
}

const InputTags = ({ placeholder, onBlur, tags, setTags }: InputTagProps) => {
	const [value, setValue] = useState('');

	const handleAddTags = (e: KeyboardEvent<HTMLDivElement>) => {
		const valueLowercase = value.trim().toLocaleLowerCase();
		if (valueLowercase === '') return;
		if (tags.includes(valueLowercase)) return;
		if (e.key === 'Enter') {
			setTags([...tags, value]);
			setValue('');
		}
	};

	const addToClick = () => {
		const valueLowercase = value.trim().toLocaleLowerCase();
		if (valueLowercase === '') return;
		if (tags.includes(valueLowercase)) return;
		setTags([...tags, valueLowercase]);
		setValue('');
	};

	const handleDeleteTags = (compareTag: string) => {
		setTags(tags.filter((oldTag) => oldTag !== compareTag));
	};

	const disabled = value.length > 0 ? styles.background : styles['disabled'];

	return (
		<div className={styles.container}>
			<div className={styles['container-input']}>
				<input
					className={inputStyle.input}
					type='text'
					name='tag'
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onKeyDown={(e) => {
						e.key === 'Enter' && e.preventDefault();
						handleAddTags(e);
					}}
					placeholder={placeholder}
					onBlur={onBlur}
				/>
				<button
					type='button'
					disabled={value.length === 0}
					className={`${styles.btn} ${disabled}`}
					onClick={addToClick}
				>
					Add
				</button>
			</div>

			<ul className={styles.tags}>
				{tags.map((tag) => (
					<li
						className={styles.tags__badge}
						key={tag}
						onClick={() => handleDeleteTags(tag)}
					>
						{tag.trim().toLocaleLowerCase()}
						<span className={styles.tags__remove}>&times;</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default InputTags;
