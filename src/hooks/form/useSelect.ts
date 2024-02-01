import { useState } from 'react';

export const useSelect = <T extends string | string[] | undefined>({
	initialSelect,
	name,
}: { initialSelect: T; name: string }) => {
	const [newSelectState, setNewSelectState] = useState<T>(initialSelect);

	const handleSelectChange = (o: T) => setNewSelectState(o);

	const resetSelect = () => {
		setNewSelectState(initialSelect);
	};

	const nameClean = name.replace(/\s/g, '');

	const selectState =
		Array.isArray(newSelectState) && name
			? { [nameClean]: [...newSelectState] }
			: { [nameClean]: newSelectState };

	return {
		selectState,
		newSelectState,
		handleSelectChange,
		resetSelect,
	};
};
