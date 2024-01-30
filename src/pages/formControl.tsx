import { Checkbox, InputForm, TextArea } from '@/components/form';
import { Button } from '@/components/ui';
import { useCheckbox, useInputForm } from '@/hooks/form';
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

const FormControlPage = () => {
	const {
		formState,
		handleInputBlur,
		handleInputChange,
		resetInputForm,
		isTouched,
	} = useInputForm(form);

	const { handleCheck, isChecked, resetCheckbox } = useCheckbox(check);

	const contact = {
		...formState,
		...isChecked,
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log({ contact });

		resetInputForm();
		resetCheckbox();
	};

	return (
		<form
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '8px',
				width: '50%',
				margin: 'auto auto',
			}}
			onSubmit={handleSubmit}
			method='POST'
		>
			<InputForm
				type='text'
				value={formState.name}
        placeholder='name'
				name='name'
				onBlur={handleInputBlur}
				onChange={handleInputChange}
			/>
			<InputForm
				type='text'
				name='lastName'
				value={formState.lastName}
        placeholder='LastName'
				onBlur={handleInputBlur}
				onChange={handleInputChange}
			/>
			<TextArea
				name='que'
				characterState={formState.que}
        placeholder='que'
				onChange={handleInputChange}
				onBlur={handleInputBlur}
			/>
			<TextArea
				name='como'
				characterState={formState.como}
        placeholder='como'
				onChange={handleInputChange}
				onBlur={handleInputBlur}
			/>

			<Checkbox isChecked={isChecked} handleCheck={handleCheck} name='serieA' />
			<Checkbox isChecked={isChecked} handleCheck={handleCheck} name='serieB' />

			<Button
				type='submit'
				radius='radius-4'
				backgroundColor='green-400'
				buttonStyle='ripple'
        isLoading
        spinnerType='mice'
			>
				Enviar
			</Button>
		</form>
	);
};

export default FormControlPage;
