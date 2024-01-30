import { useEffect, useState } from 'react';

const ERROR_MESSAGE = `The initialForm argument must be of object type, if you want to use this Component with a simple string, number, boolean or other, you must directly use the useState react hook. Example
				
const [value, setValue] = useState(string, boolean, e.g.)

<InputForm
	name="value"
	value={value}
	onChange={()=>setValue(e.target.value)}
	type='text'
/>
	`;

export const useInputForm = <T>(initialForm: T) => {
	const [formState, setFormState] = useState(initialForm);
	// const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [isTouched, setIsTouched] = useState<IsTouched>(null);

	useEffect(() => {
		setFormState(initialForm);
	}, [initialForm]);

	const handleInputChange = (e: ReactChangeEvent) => {
		if (Object.keys(initialForm as Record<string, string>).length <= 1) {
			throw new Error(ERROR_MESSAGE);
		}
		const { name, value } = e.target;

		setFormState((prevFormState) => ({
			...prevFormState,
			[name]: value,
		}));
	};

	const handleInputBlur = (e: ReactFocusEvent) => {
		const { name } = e.target;
		setIsTouched((prevIsTouched) => ({ ...prevIsTouched, [name]: true }));
	};

	// const areFieldsValid = (
	//   errors: ErrorMessages<typeof initialForm | undefined>
	// ) => {
	//   setIsFormSubmitted(true);
	//   if (errors) {
	//     return false;
	//   }
	//   setIsTouched(null);
	//   setIsFormSubmitted(false);
	//   return true;
	// };
	const resetInputForm = () => {
		setFormState(initialForm);
	};

	return {
		formState,
		// isFormSubmitted,
		isTouched,

		handleInputChange,
		resetInputForm,
		// areFieldsValid,
		handleInputBlur,
	};
};
type IsTouched = { [key: string]: boolean } | null;

type ReactChangeEvent = React.ChangeEvent<Elements>;

type ReactFocusEvent = React.FocusEvent<Elements>;

// type ReactFormEvent = React.FormEvent<HTMLFormElement>

type Elements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
