import { useState, KeyboardEvent, type FocusEvent } from 'react';
import Button from '../../../components/button/ButtonNormal';

import styles from '../../sass/components/inputTags.module.scss';
import inputStyle from '../../sass/components/input.module.scss';

interface InputTagTest {
	placeholder?: string;
	initialInputTags: string[];
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

const InputTags = ({ placeholder, onBlur, initialInputTags }: InputTagTest) => {
	const [value, setValue] = useState('');

	const [tags, setTags] = useState<string[]>(initialInputTags);

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
		<div className={styles.container}>
			<div className={styles["container-input"]}>
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
					backgroundColor='green-200'
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
		</div>
	);
};

export default InputTags;
