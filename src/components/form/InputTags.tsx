import { useState, KeyboardEvent, type FocusEvent } from 'react';

import styles from '../../styles/components/form/inputTags.module.css';
import inputStyle from '../../styles/components/form/input.module.css';
import Button from '../UI/buttons/ButtonNormal';

interface InputTagProps {
	placeholder?: string;
	tags: string[];
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
	setTags: (value: string[]) => void;
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

	return (
		<>
			<div className={styles.container}>
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
				<Button
					disabled={value.length === 0}
					type='button'
					onClick={addToClick}
					borderRadius='r-2'
					backgroundColor='green-400'
					textTransform='uppercase'
					size='sm-100'
				>
					add
				</Button>
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
		</>
	);
};

export default InputTags;
