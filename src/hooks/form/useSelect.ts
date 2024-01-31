
import { useState } from 'react';

type SingleSelectProps = {
	// multiple?: false;
	valueState?: string;
	// handleSelectChange: (value: string | undefined) => void;
};
type MultipleSelectProps = {
	// multiple: true;
	valueState: string[];
	// handleSelectChange: (value: string[]) => void;
};
type SelectProps = {
	options: string[];
} & (SingleSelectProps | MultipleSelectProps);

export const useSelect = <T extends string | string[] | undefined>(
	initialForm: T,
) => {
	const [valueState, setValueState] = useState<T>(initialForm);

	return {
		valueState,
    
		handleSelectChange: (o:any) => setValueState(o),
		formSelect: Array.isArray(valueState)
			? { formSelect: [...valueState] }
			: [valueState],
		setValueState,
	};
};
