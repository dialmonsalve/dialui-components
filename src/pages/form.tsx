import {
	Checkbox,
	Input,
	InputTags,
	Select,
	TextArea,
} from '../prod/components/form';
import { Button } from '../prod/components/UI';
import {
	useCheckbox,
	useInput,
	useInputTags,
	useSelect,
} from '../prod/hooks/form';
import { type FormEvent } from 'react';

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

const databaseTags: string[] = [
	// 'harry',
	// 'hola',
	// 'cincuenta',
	// 'setenta',
	// 'ochenta',
	// 'noventa',
	// 'cien',
	// 'cientodiez',
	// 'cientosetenta',
	// 'cientoochenta',
	// 'Pepe',
	// 'berta',
	// 'aurelio',
	// 'doscientossetenta',
	// 'doscientosochentano',
];

const FormControlPage = () => {
	const { selectState, handleSelectChange, resetSelect } = useSelect<
		typeof multiOptions
	>({
		initialSelect: ['VENTAS'],
	});

	const {
		selectState: simpleSelect,
		handleSelectChange: handleSimple,
		resetSelect: simpleRest,
	} = useSelect<string | undefined>({
		initialSelect: '',
	});

	const { inputState, handleInputChange, resetInput } = useInput({
		initialInput: form,
	});

	const { handleCheckboxChange, checkboxState, resetCheckbox } = useCheckbox({
		initialCheckbox: check,
	});

	const { tagsState, handleInputTagsChange, resetInputTags } = useInputTags({
		initialInputTags: databaseTags,
	});
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const contact = {
			...inputState,
			...checkboxState,
			profile: [...selectState],
			election: simpleSelect,
			tags: [...tagsState],
		};
		console.log(contact);

		resetInput();
		resetCheckbox();
		resetSelect();
		simpleRest();
		resetInputTags();
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
			<Input
				type='text'
				value={inputState.name}
				placeholder='Name'
				name='name'
				onChange={handleInputChange}
				disabled
				/>
			<Input
				type='text'
				name='lastName'
				value={inputState.lastName}
				placeholder='LastName'
				onChange={handleInputChange}
				disabled
			/>
			<Input
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
					selectState={selectState}
				/>
			</div>
			<div>
				<Select
					options={simpleOptions}
					onChange={handleSimple}
					selectState={simpleSelect}
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

			<InputTags
				placeholder='Tags'
				tags={tagsState}
				setTags={handleInputTagsChange}
				
			/>

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
