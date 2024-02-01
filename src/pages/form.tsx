import { Checkbox, InputForm, Select, TextArea } from '@/components/form';
import { Button } from '@/components/ui';
import { useCheckbox, useInput, useSelect } from '@/hooks/form';
import { FormEvent } from 'react';

const form = {
	name: '',
	lastName: '',
	phone: '',
	description: '',
};

const check = {
	serieA: false,
	serieB: true,
};

const multiOptions = ['COMPRAS', 'VENTAS', 'LOGISTICA', 'CONTABILIDAD'];
const simpleOptions = ['UNO', 'DOS', 'TRES', 'CUATRO'];

const FormControlPage = () => {
	const { newSelectState, selectState, handleSelectChange, resetSelect } =
		useSelect<typeof multiOptions>({ initialSelect: [], name: 'MultiSelection' });

	const {
		newSelectState: simpleSelect,
		selectState: simpleState,
		handleSelectChange: handleSimple,
		resetSelect: simpleRest,
	} = useSelect<string | undefined>({
		initialSelect: '',
		name: 'SimpleSelection',
	});

	const { inputState, handleInputChange, resetInput } = useInput(form);

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
				placeholder='Name'
				name='name'
				onChange={handleInputChange}
			/>
			<InputForm
				type='text'
				name='lastName'
				value={inputState.lastName}
				placeholder='LastName'
				onChange={handleInputChange}
			/>
			<InputForm
				type='phone'
				name='phone'
				value={inputState.phone}
				placeholder='Phone'
				onChange={handleInputChange}
			/>

			<div style={{ zIndex: 1 }}>
				<Select
					multiple
					options={multiOptions}
					onChange={handleSelectChange}
					newSelectState={newSelectState}
				/>
			</div>
			<div>
				<Select
					options={simpleOptions}
					onChange={handleSimple}
					newSelectState={simpleSelect}
				/>
			</div>
			<br />
			<TextArea
				name='description'
				characterState={inputState.description}
				placeholder='Description'
				onChange={handleInputChange}
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
