import { Checkbox, InputForm, Select, TextArea } from '@/components/form';
import { Button } from '@/components/ui';
import { useCheckbox, useInput, useSelect } from '@/hooks/form';
import { FormEvent } from 'react';

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
	const { newSelectState, selectState, handleSelectChange, resetSelect } =
		useSelect<typeof options>({ initialSelect: [], name: 'MultiSelection' });

	const {
		newSelectState: simpleSelect,
		selectState: simpleState,
		handleSelectChange: handleSimple,
		resetSelect: simpleRest,
	} = useSelect<string | undefined>({
		initialSelect: '',
		name: 'SimpleSelection',
	});

	const {
		inputState,
		handleInputBlur,
		handleInputChange,
		resetInput,
		inputTouched,
	} = useInput(form);

	const { handleCheckboxChange, checkboxState, resetCheckbox } =
		useCheckbox(check);

	const contact = {
		...inputState,
		...checkboxState,
		...selectState,
		...simpleState,
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log({ contact });

		resetInput();
		resetCheckbox();
		resetSelect();
		simpleRest();
	};

	return (
		<form
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '8px',
				width: '50%',
				margin: 'auto auto',
				// padding: '1rem 5rem 4rem',
			}}
			onSubmit={handleSubmit}
			method='POST'
		>
			<InputForm
				type='text'
				value={inputState.name}
				placeholder='name'
				name='name'
				onBlur={handleInputBlur}
				onChange={handleInputChange}
			/>
			<InputForm
				type='text'
				name='lastName'
				value={inputState.lastName}
				placeholder='LastName'
				onBlur={handleInputBlur}
				onChange={handleInputChange}
			/>

			<div style={{ zIndex: 1 }}>
				<Select
					multiple
					options={options}
					onChange={handleSelectChange}
					newSelectState={newSelectState}
				/>
			</div>
			<div>
				<Select
					options={options}
					onChange={handleSimple}
					newSelectState={simpleSelect}
				/>
			</div>
			<br />
			<TextArea
				name='que'
				characterState={inputState.que}
				placeholder='que'
				onChange={handleInputChange}
				onBlur={handleInputBlur}
			/>
			<TextArea
				name='como'
				characterState={inputState.como}
				placeholder='como'
				onChange={handleInputChange}
				onBlur={handleInputBlur}
			/>
			<br />

			<div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
				<Checkbox
					checkboxFormState={checkboxState}
					handleCheck={handleCheckboxChange}
					name='serieA'
				/>
				<Checkbox
					checkboxFormState={checkboxState}
					handleCheck={handleCheckboxChange}
					name='serieB'
				/>
			</div>
			<Button
				type='submit'
				radius='radius-4'
				backgroundColor='green-400'
				// isLoading
				size='w-100'
				spinnerType='mice'
			>
				Enviar
			</Button>
		</form>
	);
};

export default FormControlPage;
