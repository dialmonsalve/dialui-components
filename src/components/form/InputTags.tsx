import { useState, KeyboardEvent, type FocusEvent } from 'react';

interface InputTagProps {
	optionTags: string[];
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
	onChange: (value: string[]) => void;
}

const InputTags = ({ optionTags, onChange, onBlur }: InputTagProps) => {
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
				className='input-tags'
				type='text'
				name='tag'
				value={value}
				onBlur={onBlur}
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={(e) => {
					e.key === 'Enter' && e.preventDefault();
					handleAddTags(e);
				}}
			/>
			<ul className='tags' >
				<li className='tags__item'>
					{optionTags.map((tag) => (
						<span
							className='tags__badge'
							key={tag}
							onClick={() => handleDeleteTags(tag)}
						>
							{tag}
							<span className='tags__remove'>&times;</span>
						</span>
					))}
				</li>
			</ul>
		</>
	);
};
export default InputTags;
