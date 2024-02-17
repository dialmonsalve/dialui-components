import { useState } from 'react';

const useSelect = <T extends string | string[] | undefined>({
	initialSelect,
}: { initialSelect: T }) => {
	const [selectState, setSelectState] = useState<T>(initialSelect);

	const handleSelectChange = (o: T) => setSelectState(o);

	const resetSelect = () => {
		setSelectState(initialSelect);
	};

	return {
		selectState,
		handleSelectChange,
		resetSelect,
	};
};

export default useSelect