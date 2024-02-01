import { useEffect, useState } from 'react';

const ERROR_MESSAGE = `The initial argument must be of object type, if you want to use this Component with a simple string, number, boolean or other, you must directly use the useState react hook. Example
				
const [value, setValue] = useState(string, boolean, e.g.)

<Input
	name="value"
	value={value}
	onChange={()=>setValue(e.target.value)}
	type='text'
/>
	`;

export const useInput = <T>({initialInput}: {initialInput: T}) => {
	const [inputState, setInputState] = useState(initialInput);
	// const [isSubmitted, setIsSubmitted] = useState(false);
	const [inputTouched, setInputTouched] = useState<IsTouched>(null);

	useEffect(() => {
		setInputState(initialInput);
	}, [initialInput]);

	const handleInputChange = (e: ReactChangeEvent) => {
		if (Object.keys(initialInput as Record<string, string>).length <= 1) {
			throw new Error(ERROR_MESSAGE);
		}
		const { name, value } = e.target;

		setInputState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleInputBlur = (e: ReactFocusEvent) => {
		const { name } = e.target;
		setInputTouched((prevIsTouched) => ({ ...prevIsTouched, [name]: true }));
	};

	// const areFieldsValid = (
	//   errors: ErrorMessages<typeof initial | undefined>
	// ) => {
	//   setIsSubmitted(true);
	//   if (errors) {
	//     return false;
	//   }
	//   setIsTouched(null);
	//   setIsSubmitted(false);
	//   return true;
	// };
	const resetInput = () => {
		setInputState(initialInput);
	};

	return {
		inputState,
		// isSubmitted,
		inputTouched,

		handleInputChange,
		resetInput,
		// areFieldsValid,
		handleInputBlur,
	};
};
type IsTouched = { [key: string]: boolean } | null;

type ReactChangeEvent = React.ChangeEvent<Elements>;

type ReactFocusEvent = React.FocusEvent<Elements>;

// type ReactEvent = React.Event<HTMLFormElement>

type Elements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
