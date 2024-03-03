import type { ChangeEvent } from 'react';

import '../../styles/components/form/checkbox.css';
import { HASH } from '../../utils/hash';

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
			className={`checkbox${HASH} ${
				checked ? `checkbox${HASH}__active` : ''
			}`}
			data-testid={'container'}
		>
			<label>
				<input
					className={`checkbox${HASH}__pulse`}
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
