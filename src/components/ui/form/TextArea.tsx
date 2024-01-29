import type { ChangeEvent, TextareaHTMLAttributes } from 'react';

import { HASH } from '@/const';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	handleChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	className?: string;
	totalCharacter?: number;
	characterState: string;
}

const TextArea = ({
	className,
	characterState,
	handleChange,
	totalCharacter = 0,
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
				onChange={handleChange}
				className={`text-area${HASH} ${className}`}
				{...props}
			/>
			<span
				className={`text-area${HASH}--value`}
				style={{ color: `${isTotal === 0 ? 'red' : 'green'}` }}
			>
				{isTotal}
			</span>
		</>
	);
};

export default TextArea;
