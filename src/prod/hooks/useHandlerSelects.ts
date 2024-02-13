import { useState } from "react";
import type { Colors, SelectData, Size } from "@/prod/types";

type SelectsHandlerResult = {
	selectState: SelectData<Colors | Size>;
	handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const useHandlerSelects = (
	selectData: SelectData<Colors | Size>,
): SelectsHandlerResult => {
	const [selectState, setSelectState] =
		useState<SelectData<Colors | Size>>(selectData);

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;

		setSelectState((prevState) => ({
			...prevState,
			[name]: value as Colors,
		}));
	};

	return {
		selectState,
		handleChange,
	};
};
