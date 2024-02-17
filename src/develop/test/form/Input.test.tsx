import { act } from 'react-dom/test-utils';
import user from '@testing-library/user-event';
import { cleanup, render, renderHook, screen } from '@testing-library/react';
import { Input } from '../../../components/form';

import { beforeEach } from 'vitest';
import { useInput } from '../../../hooks';

import { ChangeEvent } from 'react';

import '@testing-library/jest-dom';
import { ERROR_INPUT_MESSAGE } from '../helpers/const';

type ChangeEvt = ChangeEvent<HTMLInputElement>;

const form = {
	name: '',
	lastName: '',
	description: '',
	password: '',
};

describe('Input', () => {
	beforeEach(() => {
		cleanup();
	});

	describe('User', () => {
		test('Elements are focused in the right order', async () => {
			user.setup();
			const { result } = renderHook(() => useInput({ initialInput: form }));
			render(
				<>
					<Input
						type='text'
						value={result.current.name}
						placeholder='name'
						name='name'
						onChange={result.current.handleInputChange}
					/>
					<Input
						type='lastName'
						value={result.current.lastName}
						placeholder='last name'
						name='lastName'
						onChange={result.current.handleInputChange}
					/>
					<Input
						type='text'
						value={result.current.description}
						placeholder='description'
						name='description'
						onChange={result.current.handleInputChange}
					/>
					,
				</>,
			);
			const inputName = screen.getByPlaceholderText<HTMLInputElement>('name');
			await user.tab();
			expect(inputName).toHaveFocus();
			await user.tab();
			const inputLastName =
				screen.getByPlaceholderText<HTMLInputElement>('last name');
			expect(inputLastName).toHaveFocus();
			const inputDescription =
				screen.getByPlaceholderText<HTMLInputElement>('description');
			await user.tab();
			expect(inputDescription).toHaveFocus();
		});

		test('should not allow to write', async () => {
			user.setup();
			const { result } = renderHook(() => useInput({ initialInput: form }));
			const { name, handleInputChange } = result.current;
			render(
				<Input
					name='name'
					type='text'
					value={name}
					onChange={handleInputChange}
					placeholder='name'
					disabled
				/>,
			);
			const nameInputElement = screen.getByRole('textbox');

			await user.type(nameInputElement, 'hello');

			expect(result.current.name).toBe('');
		});
	});

	describe('Development', () => {
		test('should reset all input text', () => {
			const { result } = renderHook(() => useInput({ initialInput: form }));
			const { lastName, handleInputChange, resetInput } = result.current;
			render(
				<Input
					type='text'
					value={lastName}
					placeholder='lastName'
					name='lastName'
					onChange={handleInputChange}
				/>,
			);
			act(() =>
				result.current.handleInputChange({
					target: { name: 'lastName', value: 'hello' },
				} as ChangeEvt),
			);
			act(() => {
				resetInput();
			});
			expect(result.current.lastName).toBe(form.lastName);
		});

		test('Should have a input text called name');
		const { result } = renderHook(() => useInput({ initialInput: form }));
		const { name, handleInputChange } = result.current;
		render(
			<Input
				name='name'
				type='text'
				value={name}
				onChange={handleInputChange}
				placeholder='name'
			/>,
		);
		const nameInputElement = screen.getByRole('textbox');
		expect(nameInputElement).toBeDefined();

		test('Should have 3 input texts', () => {
			const { result } = renderHook(() => useInput({ initialInput: form }));
			const { handleInputChange, name, lastName, description } = result.current;
			render(
				<>
					<Input
						name='name'
						type='text'
						value={name}
						onChange={handleInputChange}
						placeholder='name'
					/>
					,
					<Input
						name='lastName'
						type='text'
						value={lastName}
						onChange={handleInputChange}
						placeholder='lastName'
					/>
					,
					<Input
						name='description'
						type='text'
						value={description}
						onChange={handleInputChange}
						placeholder='description'
					/>
					,
				</>,
			);
			const inputTextElements = screen.getAllByRole('textbox');
			expect(inputTextElements.length).toBe(3);
		});

		test('Should have an error message with a simple input', () => {
			const name = '';
			const { result } = renderHook(() => useInput({ initialInput: name }));
			render(
				<Input
					value={result.current.inputState}
					onChange={result.current.handleInputChange}
					name='name'
					type='number'
				/>,
			);
			expect(() => {
				result.current.handleInputChange({
					target: { name: 'name', value: name },
				} as ChangeEvt);
			}).toThrow(ERROR_INPUT_MESSAGE);
		});

		test('Should not allowed autocomplete', () => {
			user.setup();
			const { result } = renderHook(() => useInput({ initialInput: form }));
			const { password, handleInputChange } = result.current;
			render(
				<Input
					name='password'
					type='password'
					value={password}
					onChange={handleInputChange}
					placeholder='Your password'
				/>,
			);

			const inputPass = screen.getByPlaceholderText('Your password');
			expect(inputPass).toHaveProperty('autocomplete', 'off');
		});
	});
});
