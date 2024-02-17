import { useState } from "react";
import { CheckboxData } from "../types";

type CheckHandlerResult = [CheckboxData, (name: string) => void];

export const useHandleCheckbox = (
	checkboxesData: CheckboxData,
): CheckHandlerResult => {
	const [checkboxState, setCheckboxState] =
		useState<CheckboxData>(checkboxesData);

	const handleChange = (name: string) => {
		setCheckboxState((prevState) => ({
			...prevState,
			[name]: !prevState[name],
		}));
	};

	return [checkboxState, handleChange];
};
