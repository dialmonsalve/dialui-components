import { Modal } from '@/prod/components/UI';
import openModal from '@/prod/components/UI/modal/openModal';
import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { act } from 'react-dom/test-utils';

describe('Modal', () => {
	test('Should set variable state to cancel', async () => {
		const { result } = renderHook(() => {
			const [respond, handleModalResponse] = useState('');
			return {
				respond,
				handleModalResponse,
			};
		});
		const { handleModalResponse } = result.current;
		render(
			<>
				<div>
					<Modal
						animation={'jumpToDown'}
						title='Test'
						description='Test description'
						type='error'
						handleModalResponse={handleModalResponse}
					/>
				</div>
			</>,
		);
		const buttonClose = screen.getByText(/X/);

		act(() => handleModalResponse('cancel'));

		fireEvent.click(buttonClose);

		expect(result.current.respond).toBe('cancel');
	});

	test('Should set variable state to OK', async () => {
		const { result } = renderHook(() => {
			const [respond, handleModalResponse] = useState('');
			return {
				respond,
				handleModalResponse,
			};
		});
		const { handleModalResponse } = result.current;
		render(
			<>
				<div>
					<Modal
						animation={'jumpToDown'}
						title='Test'
						description='Test description'
						type='warning'
						handleModalResponse={handleModalResponse}
					/>
				</div>
			</>,
		);
		const buttonYes = screen.getByText(/yes/i);
		const buttonNot = screen.getByText(/not/i);

		act(() => handleModalResponse('yes'));
		fireEvent.click(buttonYes);

		expect(result.current.respond).toBe('yes');

		act(() => handleModalResponse('no'));
		fireEvent.click(buttonNot);

		expect(result.current.respond).toBe('no');
	});

	test('Should set variable state to yes - no', async () => {
		const { result } = renderHook(() => {
			const [respond, handleModalResponse] = useState('');
			return {
				respond,
				handleModalResponse,
			};
		});
		const { handleModalResponse } = result.current;
		render(
			<>
				<div>
					<Modal
						animation={'jumpToDown'}
						title='Test'
						description='Test description'
						type='info'
						handleModalResponse={handleModalResponse}
					/>
				</div>
			</>,
		);
		const buttonOk = screen.getByText(/ok/i);
		act(() => handleModalResponse('ok'));
		fireEvent.click(buttonOk);

		expect(result.current.respond).toBe('ok');
	});

	test('should openModal', async () => {
		render(
			<button
				type='button'
				onClick={() =>
					openModal({
						animation: 'fade-in-out',
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
