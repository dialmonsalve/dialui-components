// import { Checkbox, InputForm, Select, TextArea } from '@/components/form';
import { Checkbox } from '@/components/form';
import { Button } from '@/components/ui';
import { useCheckbox, useInputForm, useSelect } from '@/hooks/form';
import { FormEvent, useState } from 'react';

import { Select } from '@/components/form/Select';

const form = {
	name: '',
	lastName: '',
	que: '',
	como: '',
};

const check = {
	serieA: false,
	serieB: false,
};

const options = ['diego', 'alejandro', 'monsalve', 'estrada'];

const FormControlPage = () => {
	// const [value, setValue] = useState<typeof options>([]);

	// const [value, setValue] = useState([])

	const { valueState, handleSelectChange, formSelect, setValueState } = useSelect<string>("");

	console.log(formSelect);

	// const {
	// 	formState,
	// 	handleInputBlur,
	// 	handleInputChange,
	// 	resetInputForm,
	// 	isTouched,
	// } = useInputForm(form);

	const { handleCheck, isChecked, resetCheckbox } = useCheckbox(check);

	// const contact = {
	// 	...formState,
	// 	...isChecked,
	// };

	// const handleSubmit = (e: FormEvent) => {
	// 	e.preventDefault();
	// 	console.log({ contact });

	// 	resetInputForm();
	// 	resetCheckbox();
	// };

	return (
		// <>
		// 	style={{
		// 		display: 'flex',
		// 		flexDirection: 'column',
		// 		gap: '8px',
		// 		width: '50%',
		// 		margin: 'auto auto',
		// 	}}
		// 	onSubmit={handleSubmit}
		// 	method='POST'
		// >
		// 	<InputForm
		// 		type='text'
		// 		value={formState.name}
		//     placeholder='name'
		// 		name='name'
		// 		onBlur={handleInputBlur}
		// 		onChange={handleInputChange}
		// 	/>
		// 	<InputForm
		// 		type='text'
		// 		name='lastName'
		// 		value={formState.lastName}
		//     placeholder='LastName'
		// 		onBlur={handleInputBlur}
		// 		onChange={handleInputChange}
		// 	/>
		// 	<TextArea
		// 		name='que'
		// 		characterState={formState.que}
		//     placeholder='que'
		// 		onChange={handleInputChange}
		// 		onBlur={handleInputBlur}
		// 	/>
		// 	<TextArea
		// 		name='como'
		// 		characterState={formState.como}
		//     placeholder='como'
		// 		onChange={handleInputChange}
		// 		onBlur={handleInputBlur}
		// 	/>

		// 	<Button
		// 		type='submit'
		// 		radius='radius-4'
		// 		backgroundColor='green-400'
		//     isLoading
		// 		size='w-100'
		//     spinnerType='mice'
		// 	>
		// 		Enviar
		// 	</Button>
		<>
			<div>
				<Select
					// multiple
					// onChange={(o) => setValue(o)}
					options={options}
					onChange={(o)=>handleSelectChange(o)}
					valueState={valueState}
				/>
			</div>
			<br />
			<br />
			<br />

			<div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
				<Checkbox
					isChecked={isChecked}
					handleCheck={handleCheck}
					name='serieA'
				/>
				<Checkbox
					isChecked={isChecked}
					handleCheck={handleCheck}
					name='serieB'
				/>
			</div>
		</>
	);
};

export default FormControlPage;
