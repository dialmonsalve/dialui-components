import {
	Checkbox,
	InputForm,
	InputTags,
	Select,
	TextArea,
} from '@/components/form';
import { Button } from '@/components/ui';
import { useCheckbox, useInput, useSelect } from '@/hooks/form';
import { FormEvent, useState } from 'react';

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
	const { selectState, handleSelectChange, resetSelect } = useSelect<
		typeof multiOptions
	>({
		initialSelect: [],
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

	const [tags, setTags] = useState<string[]>([]);

	const resetTags = () => {
		setTags([]);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const contact = {
			...inputState,
			...checkboxState,
			profile: [...selectState],
			election: simpleSelect,
			tags: [...tags],
		};
		console.log(contact);

		resetInput();
		resetCheckbox();
		resetSelect();
		simpleRest();
		resetTags();
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

			<InputTags optionTags={tags} onChange={setTags} />

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
