import type { ChangeEvent, TextareaHTMLAttributes } from 'react';

import styles from '../../styles/components/form/textarea.module.css';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	className?: string;
	totalCharacter?: number;
	name: string;
	characterState: string;
}

const TextArea = ({
	characterState,
	name,
	onChange,
	totalCharacter = -50,
	...props
}: Props) => {
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
