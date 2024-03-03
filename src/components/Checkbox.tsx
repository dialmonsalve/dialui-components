import type { ChangeEvent } from 'react';

import styles from './checkbox.module.scss';

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
			className={`${styles.checkbox} ${
				checked ? styles.active : ''
			}`}
			data-testid={'container'}
		>
			<label>
				<input
					className={styles.pulse}
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
