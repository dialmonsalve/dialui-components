import type { DetailedHTMLProps, HTMLAttributes, ChangeEvent } from 'react';

import { HASH } from '@/const';

interface Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	name: string;
	isChecked: Record<string, boolean> | boolean;
	className?: string;
	handleCheck: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({
	name,
	isChecked,
	className,
	handleCheck,
	...props
}: Props) => {
	const checked = typeof isChecked === 'boolean' ? isChecked : isChecked[name];

	return (
		<div className={`checkbox${HASH}`}>
			<div
				className={`checkbox${HASH}__checked ${
					checked ? `checkbox${HASH}__active` : ''
				} ${className}`}
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
		</div>
	);
};

export default Checkbox;

// style={{ opacity: 1, display: "flex", justifyContent: "flex-start", alignItems: `${checked ? "flex-start" : "flex-end"}`, flexDirection: "column", padding: "7px", fontSize:"12px", fontWeight:900 }} htmlFor={name}
