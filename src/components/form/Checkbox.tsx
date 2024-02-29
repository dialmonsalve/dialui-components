import type { ChangeEvent } from 'react';

import styles from '../../styles/components/form/checkbox.module.css';

interface Props  {
	name: string;
	checkboxFormState: Record<string, boolean> | boolean;
	handleCheck: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({
	checkboxFormState,
	name,
	handleCheck,
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
			data-testid={'container'}
		>
			<label>
				<input
					className={styles['checkbox__pulse']}
					onChange={handleCheck}
					type='checkbox'
					name={name}
					checked={checked}
					id={name}
					data-testid={name}
				/>
			</label>
		</div>
	);
};

export default Checkbox;
