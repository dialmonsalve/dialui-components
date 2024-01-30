import { type ChangeEvent, useEffect, useState } from 'react';

const ERROR_MESSAGE = `The initialForm argument must be of object type, if you want to use this Component with a simple string, number, boolean or other, you must directly use the useState react hook. Example
				
const [isChecked, setIsChecked] = useState(false or true)

<Checkbox 
	isChecked={isChecked}
	handleCheck={()=>setIsChecked(!isChecked)}
	name='check'
/>
`;

export const useCheckbox = <T>(initialForm: T) => {
	const [isChecked, setIsChecked] = useState(initialForm);

	useEffect(() => {
		setIsChecked(initialForm);
	}, [initialForm]);

	const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
		const { checked, name } = e.target;

		if (Object.keys(initialForm as Record<string, boolean>).length <= 1) {
			throw new Error(ERROR_MESSAGE);
		}

		if (initialForm instanceof Object) {
			setIsChecked((prev) => ({
				...prev,
				[name]: checked,
			}));
		}
	};

	const resetCheckbox = () => {
		setIsChecked(initialForm);
	};

	return {
		isChecked,
		handleCheck,
		resetCheckbox
	};
};
