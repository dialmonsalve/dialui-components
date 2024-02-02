import type { DetailedHTMLProps, HTMLAttributes, ChangeEvent } from 'react';

import styles from '@/styles/components/form/checkbox.module.scss';

interface Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	name: string;
	checkboxFormState: Record<string, boolean> | boolean;
	handleCheck: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({
	checkboxFormState,
	name,
	handleCheck,
	...props
}: Props) => {
	const checked =
		typeof checkboxFormState === 'boolean'
			? checkboxFormState
			: checkboxFormState[name];

	return (
		<div
			className={`${styles['checkbox']} ${
				checked ? `${styles['checkbox__active']}` : ''
			}`}
			{...props}
		>
			<label>
				<input
					className={styles['checkbox__pulse']}
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
