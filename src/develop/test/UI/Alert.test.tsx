import Alert from '../../../components/UI/alert/Alert';
import openAlert from '../../../components/UI/alert/openAlert';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

describe('Alert', () => {
	afterEach(() => {
		cleanup();
	});
	test('should open alert', async () => {
		render(
			<div>
				<button
					onClick={() => openAlert({ message: 'warning', type: 'error' })}
					type='button'
				>
					open
				</button>
			</div>,
		);
		const user = userEvent.setup();
		const buttonOPen = screen.getByRole('button', { name: 'open' });
		await user.click(buttonOPen);
		const container = screen.getByTestId('alert');
		expect(container).not.toBeNull();
	});

	test('Should have a hello title', () => {
		render(<Alert message='hello' type='error' duration={2000} />);
		const message = screen.getByText('hello');
		expect(message).toBeInTheDocument();
	});
});
