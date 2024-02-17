import  TextArea  from './TextArea';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('TextArea', () => {
	beforeEach(() => {
		
	});

	test('should be a textarea', () => {
		render(<TextArea name='area' placeholder='Enter your message'/>);
		const textarea = screen.getByRole('textbox');
		expect(textarea).toBeInTheDocument();
	});

	test('Should change value', async () => {
		render(<TextArea name='area' placeholder='Enter your message' />);
		const user = userEvent.setup();

		const textarea = screen.getByRole<HTMLInputElement>('textbox');

		await user.type(textarea, 'hello');

		expect(textarea.value).toBe('hello');
	});

	test("Total character should not allow numbers lower than 0",async ()=>{
		render(<TextArea name='area' placeholder='Enter your message' totalCharacter={10} />);
		const user = userEvent.setup();

		const textarea = screen.getByRole<HTMLInputElement>('textbox');
		await user.type(textarea, 'hello world');

		const counter = screen.getByText(0)

		expect(counter).toHaveTextContent('0')
	})

	test("Total character should be equal value.length",async ()=>{
		render(<TextArea name='area' placeholder='Enter your message'/>);
		const user = userEvent.setup();

		const textarea = screen.getByRole<HTMLInputElement>('textbox');
		await user.type(textarea, 'hello world');

		const counter = screen.getByText(textarea.value.length)
		expect(counter).toHaveTextContent(textarea.value.length.toString())
	})
});
