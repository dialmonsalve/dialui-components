import { ChangeEvent, useState } from 'react';
import { render, screen, renderHook, cleanup } from '@testing-library/react';
import user from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import { Checkbox } from '../../../components/form';
import { useCheckbox } from '../../../hooks';

import { ERROR_CHECK_MESSAGE } from '../helpers/const';

type ChangeEvt = ChangeEvent<HTMLInputElement>;
const multiCheck = {
	serieA: false,
	serieB: true,
};

describe('Checkbox', () => {
	afterEach(() => {
		cleanup();
	});

	describe('User', () => {
		test('should reset all the checkbox', async () => {
			user.setup();
			const { result } = renderHook(useCheckbox, {
				initialProps: {
					initialCheckbox: multiCheck,
				},
			});
			const { checkboxState, handleCheckboxChange } = result.current;
			render(
				<Checkbox
					checkboxFormState={checkboxState}
					handleCheck={handleCheckboxChange}
					name='serieA'
				/>,
			);
			const checkbox = screen.getByRole('checkbox');
			await user.click(checkbox);
			act(() => {
				result.current.resetCheckbox();
			});
			expect(result.current.checkboxState).toEqual(multiCheck);
		});

		test('should change from true to false with a multiple checkbox', async () => {
			user.setup();
			const { result } = renderHook(useCheckbox, {
				initialProps: {
					initialCheckbox: multiCheck,
				},
			});
			const { checkboxState, handleCheckboxChange } = result.current;
			render(
				<Checkbox
					checkboxFormState={checkboxState}
					handleCheck={handleCheckboxChange}
					name='serieB'
				/>,
			);
			const checkbox = screen.getByTestId('serieB');
			await user.click(checkbox);
			expect(result.current.checkboxState.serieA).toBeFalsy();
		});

		test('should change from true to false with a simple checkbox', async () => {
			user.setup();
			const isChecked = true;
			const { result } = renderHook(() => {
				const [value, setValue] = useState(isChecked);
				return { value, setValue };
			});
			render(
				<Checkbox
					checkboxFormState={result.current.value}
					handleCheck={() => result.current.setValue(!isChecked)}
					name='isChecked'
				/>,
			);

			const checkbox = screen.getByRole('checkbox');
			await user.click(checkbox);

			expect(result.current.value).toBeFalsy();
		});
	});

	describe('Development', () => {
		test('Should have a checkbox', () => {
			const { result } = renderHook(() =>
				useCheckbox({ initialCheckbox: multiCheck }),
			);
			const { checkboxState, handleCheckboxChange } = result.current;
			render(
				<Checkbox
					checkboxFormState={checkboxState}
					handleCheck={handleCheckboxChange}
					name='serieA'
				/>,
			);
			const checkbox = screen.getByRole('checkbox');
			expect(checkbox).toBeDefined();
		});

		test('Should have an error message with a simple checkbox', () => {
			const errorCheck = true;
			const { result } = renderHook(() =>
				useCheckbox({ initialCheckbox: errorCheck }),
			);
			render(
				<Checkbox
					checkboxFormState={result.current.checkboxState}
					handleCheck={result.current.handleCheckboxChange}
					name='errorCheck'
				/>,
			);
			expect(() => {
				result.current.handleCheckboxChange({
					target: { checked: errorCheck },
				} as ChangeEvt);
			}).toThrow(ERROR_CHECK_MESSAGE);
		});
	});
});
