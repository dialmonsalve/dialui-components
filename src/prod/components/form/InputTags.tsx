import { useState, KeyboardEvent, type FocusEvent } from 'react';

import styles from '../../styles/components/form/inputTags.module.css';
import inputStyle from '../../styles/components/form/input.module.css';

// !turn off to test
// interface InputTagProps {
// 	placeholder?: string;
// 	tags: string[];
// 	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
// 	setTags: (value: string[]) => void;
// }

//! turn on to test 
interface InputTagTest {
	placeholder?: string;
	initialInputTags:string[]
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

// !turn off to test
// const InputTags = ({ placeholder, onBlur, tags, setTags }: InputTagProps) => {

//! turn on to test 
const InputTags = ({ placeholder, onBlur, initialInputTags }: InputTagTest) => {
	const [value, setValue] = useState('');

	//! turn on to test
	const [tags, setTags] = useState<string[]>(initialInputTags);

	const handleAddTags = (e: KeyboardEvent<HTMLDivElement>) => {

		const valueLowercase = value.trim().toLocaleLowerCase()
		if (valueLowercase === '') return;
		if (tags.includes(valueLowercase)) return;
		if (e.key === 'Enter') {
			setTags([...tags, value]);
			setValue('');
		}
	};
	
	const addToClick = () => {
		const valueLowercase = value.trim().toLocaleLowerCase()
		if (valueLowercase === '') return;
		if (tags.includes(valueLowercase)) return;
		setTags([...tags, valueLowercase]);
	};

	const handleDeleteTags = (compareTag: string) => {
		setTags(tags.filter((oldTag) => oldTag !== compareTag));
	};

	return (
		<>
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
			<button type='button' onClick={addToClick}>
				add
			</button>
			<ul className={styles.tags}>
				{tags.map((tag) => (
					<li role='listitem' className={styles.tags__item} key={tag}>
						<span
							className={styles.tags__badge}
							onClick={() => handleDeleteTags(tag)}
						>
							{tag.trim().toLocaleLowerCase()}
							<span className={styles.tags__remove}>&times;</span>
						</span>
					</li>
				))}
			</ul>
		</>
	);
};

export default InputTags