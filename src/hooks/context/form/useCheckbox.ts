import { type ChangeEvent, useEffect, useState } from "react";

export const useCheckbox = (
	initialState: Record<string, boolean> | boolean,
) => {
	const [isChecked, setIsChecked] = useState(initialState);

	useEffect(() => {
		setIsChecked(initialState);
	}, [initialState]);

	const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
		const { checked, name } = e.target;

		if (typeof initialState === "boolean") {
			setIsChecked(!isChecked);
			return;
		}

		if (initialState instanceof Object) {
			setIsChecked((prev) => ({
				...(prev as Record<string, boolean>),
				[name]: checked,
			}));
		}
	};

	return {
		isChecked,
		handleCheck,
	};
};
