import { useFormPage } from '../hooks/useFormPage';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';
import Select from '../../components/Select';
import InputTags from '../../components/InputTags';
import TextArea from '../../components/Textarea';
import openAlert from '../../components/alert/openAlert';

import {Button} from '../../';

const FormControlPage = () => {
	const {
		lang,
		checkboxState,
		inputState,
		multiOptions,
		selectState,
		simpleOptions,
		simpleSelect,
		tagsState,
		loading,
		handleCheckboxChange,
		handleInputChange,
		handleInputTagsChange,
		handleSelectChange,
		handleSimple,
		handleLoading,
	} = useFormPage();
	return (
		<section>
			<h1>{lang === 'es' ? 'formulario de ejemplo' : 'form example'}</h1>

			<form
				className='form'
				onSubmit={(e) => {
					e.preventDefault();
					openAlert({
						message: 'testing...',
						type: 'info',
					});
					handleLoading();
				}}
			>
				<Input
					type='text'
					value={inputState.name}
					placeholder='Name'
					name='name'
					onChange={handleInputChange}
				/>
				<Input
					type='text'
					name='lastName'
					value={inputState.lastName}
					placeholder='LastName'
					onChange={handleInputChange}
				/>
				<Input
					type='phone'
					name='phone'
					value={inputState.phone}
					placeholder='Phone'
					onChange={handleInputChange}
				/>

				<div className='checks'>
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

				<Select
					multiple
					options={multiOptions}
					onChange={handleSelectChange}
					selectState={selectState}
					zIndex={2}
				/>

				<Select
					options={simpleOptions}
					onChange={handleSimple}
					selectState={simpleSelect}
				/>

				<InputTags
					placeholder='Tags'
					tags={tagsState}
					setTags={handleInputTagsChange}
				/>

				<TextArea
					name='description'
					value={inputState.description}
					placeholder='Description'
					onChange={handleInputChange}
				/>

				<Button
					type='submit'
					borderRadius='r-4'
					backgroundColor='purple-200'
					size='sm-200'
					iconSpinner='fleas'
					textTransform='uppercase'
					hasSpinner
					isLoading={loading}
				>
					send
				</Button>
			</form>
		</section>
	);
};

export default FormControlPage;
