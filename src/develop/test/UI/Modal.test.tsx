import  Modal  from '../../../components/UI/modal/Modal';
import openModal from '../../../components/UI/modal/openModal';
import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { act } from 'react-dom/test-utils';

describe('Modal', () => {
	test('Should set variable state to cancel', async () => {
		const { result } = renderHook(() => {
			const [respond, handleModalAnswer] = useState('');
			return {
				respond,
				handleModalAnswer,
			};
		});
		const { handleModalAnswer } = result.current;
		render(
			<>
				<div>
					<Modal
						animation={'jumpToDown'}
						title='Test'
						description='Test description'
						type='error'
						handleModalAnswer={handleModalAnswer}
					/>
				</div>
			</>,
		);
		const buttonClose = screen.getByText(/X/);

		act(() => handleModalAnswer('cancel'));

		fireEvent.click(buttonClose);

		expect(result.current.respond).toBe('cancel');
	});

	test('Should set variable state to OK', async () => {
		const { result } = renderHook(() => {
			const [respond, handleModalAnswer] = useState('');
			return {
				respond,
				handleModalAnswer,
			};
		});
		const { handleModalAnswer } = result.current;
		render(
			<>
				<div>
					<Modal
						animation={'jumpToDown'}
						title='Test'
						description='Test description'
						type='warning'
						handleModalAnswer={handleModalAnswer}
					/>
				</div>
			</>,
		);
		const buttonYes = screen.getByText(/yes/i);
		const buttonNot = screen.getByText(/not/i);

		act(() => handleModalAnswer('yes'));
		fireEvent.click(buttonYes);

		expect(result.current.respond).toBe('yes');

		act(() => handleModalAnswer('no'));
		fireEvent.click(buttonNot);

		expect(result.current.respond).toBe('no');
	});

	test('Should set variable state to yes - no', async () => {
		const { result } = renderHook(() => {
			const [respond, handleModalAnswer] = useState('');
			return {
				respond,
				handleModalAnswer,
			};
		});
		const { handleModalAnswer } = result.current;
		render(
			<>
				<div>
					<Modal
						animation={'jumpToDown'}
						title='Test'
						description='Test description'
						type='info'
						handleModalAnswer={handleModalAnswer}
					/>
				</div>
			</>,
		);
		const buttonOk = screen.getByText(/ok/i);
		act(() => handleModalAnswer('ok'));
		fireEvent.click(buttonOk);

		expect(result.current.respond).toBe('ok');
	});

	test('should openModal', async () => {
		render(
			<button
				type='button'
				onClick={() =>
					openModal({
						animation: 'fadeInOut',
						type: 'info',
						description: 'description',
						title: 'info',
					})
				}
			>
				open
			</button>,
		);
		const user = userEvent.setup();
		const buttonOpen = screen.getByRole('button', { name: 'open' });

		await user.click(buttonOpen);

		const container = screen.getByTestId(/modal/i);

		expect(container).not.toBeNull();
	});
});
