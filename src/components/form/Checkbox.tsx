import type { DetailedHTMLProps, HTMLAttributes, ChangeEvent } from 'react';

import { HASH } from '@/const';

interface Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	name: string;
	checkboxFormState: Record<string, boolean> | boolean;
	className?: string;
	handleCheck: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({
	name,
	checkboxFormState,
	className = '',
	handleCheck,
	...props
}: Props) => {
	const checked = typeof checkboxFormState === 'boolean' ? checkboxFormState : checkboxFormState[name];

	return (
		<div
			className={`${className} checkbox${HASH} ${
				checked ? `checkbox${HASH}__active` : ''
			}`}
			{...props}
		>
			<label>
				<input
					className={`checkbox${HASH}__pulse`}
					onChange={handleCheck}
					type='checkbox'
					name={name}
					checked={checked}
					id={name}
				/>
			</label>
		</div>
	);
};

export default Checkbox;

// style={{ opacity: 1, display: "flex", justifyContent: "flex-start", alignItems: `${checked ? "flex-start" : "flex-end"}`, flexDirection: "column", padding: "7px", fontSize:"12px", fontWeight:900 }} htmlFor={name}
