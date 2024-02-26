import Checkbox from '../../components/form/Checkbox';

import Input from '../../components/form/Input';
import InputTags from '../../components/form/InputTags';

import Select from '../../components/form/Select';
import TextArea from '../../components/form/TextArea';

import Button from '../../components/UI/buttons/ButtonNormal';
import { useCheckbox, useInput, useInputTags, useSelect } from '../../hooks';
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

const databaseTags: string[] = [];

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
				borderRadius='r-4'
				backgroundColor='green-400'
				// isLoading
				size='vw-100'
				iconSpinner='mice'
			>
				Enviar
			</Button>
		</form>
	);
};

export default FormControlPage;
