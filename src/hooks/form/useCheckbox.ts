import { type ChangeEvent, useEffect, useState } from 'react';

const ERROR_MESSAGE = `The initialCheckbox argument must be of object type, if you want to use this Component with a simple string, number, boolean or other, you must directly use the useState react hook. Example
				
const [isChecked, setIsChecked] = useState(false or true)

<Checkbox 
	isChecked={isChecked}
	handleCheck={()=>setIsChecked(!isChecked)}
	name='check'
/>
`;

const useCheckbox = <T>({ initialCheckbox }: { initialCheckbox: T }) => {
	const [checkboxState, setCheckboxState] = useState(initialCheckbox);

	useEffect(() => {
		setCheckboxState(initialCheckbox);
	}, [initialCheckbox]);

	const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { checked, name } = e.target;

		if (Object.keys(initialCheckbox as Record<string, boolean>).length <= 1) {
			throw new Error(ERROR_MESSAGE);
		}

		if (initialCheckbox instanceof Object) {
			setCheckboxState((prev) => ({
				...prev,
				[name]: checked,
			}));
		}
	};

	const resetCheckbox = () => {
		setCheckboxState(initialCheckbox);
	};

	return {
		...checkboxState,
		checkboxState,
		handleCheckboxChange,
		resetCheckbox,
	};
};

export default useCheckbox
