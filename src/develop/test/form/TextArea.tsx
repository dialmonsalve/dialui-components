import {  useState, type ChangeEvent, type TextareaHTMLAttributes } from 'react';

import styles from '../../../components/textarea.module.scss';



interface PropsTest extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string;
	totalCharacter?: number;
	name: string;
	placeholder?: string;
}
const TextArea = ({
	name,
	placeholder,
	totalCharacter = 0,
	...props
}: PropsTest) => {
	const [characterState, setCharacterState] = useState('');

	const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setCharacterState(e.target.value);
	};


	const total =
		totalCharacter > 0
			? totalCharacter - characterState?.length
			: characterState?.length;

	const isTotal = totalCharacter > 0 && total < 0 ? 0 : total;

	return (
		<>
			<textarea
				onChange={onChange}
				value={characterState}
				name={name}
				className={styles['text-area']}
				placeholder={placeholder}
				{...props}
			/>
			<span
				className={`${styles['text-area__value']} ${
					styles[`${isTotal === 0 ? 'text-area__red' : 'text-area__green'}`]
				} `}
			>
				{isTotal}
			</span>
		</>
	);
};

export default TextArea;
