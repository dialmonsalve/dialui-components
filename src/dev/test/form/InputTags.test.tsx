import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputTags } from '../../../components/form';

import '@testing-library/jest-dom';

const initialInputTags: string[] = [];

describe('Input Tags', () => {
	afterEach(() => {
		cleanup();
	});

	beforeEach(() => {
		render(<InputTags initialInputTags={initialInputTags} />);
	});
	test('Should have a input', () => {
		const inputText = screen.getByRole('textbox');
		expect(inputText).toBeDefined();
	});


	test('Should have a button add', () => {
		const buttonAdd = screen.getByRole('button', { name: 'add' });
		expect(buttonAdd).toBeDefined();
	});

	test('Should allow type and clear the input', async () => {
		const user = userEvent.setup();

		const inputText = screen.getByRole<HTMLInputElement>('textbox');

		await user.type(inputText, 'hello');
		await user.keyboard('[Enter]');

		expect(inputText.value).toBe('');
	});

	test('should not have an list item', async () => {
		const user = userEvent.setup();

		const inputText = screen.getByRole<HTMLInputElement>('textbox');
		await user.type(inputText, 'hello');

		const listItem = screen.queryByRole('listitem');

		expect(listItem).toBeNull();
	});

	test('should have an list item', async () => {
		const user = userEvent.setup();

		const inputText = screen.getByRole('textbox');
		await user.type(inputText, 'hello');

		const buttonShow = screen.getByRole('button', { name: 'add' });
		await user.click(buttonShow);

		const listItem = screen.queryAllByRole('listitem');
		expect(listItem.length).toBe(1);
	});

	test('should have two list item', async () => {
		const user = userEvent.setup();

		const inputText = screen.getByRole<HTMLInputElement>('textbox');

		await user.type(inputText, 'hello');
		await user.keyboard('[Enter]');

		await user.type(inputText, 'world');
		await user.keyboard('[Enter]');

		const listItem = screen.queryAllByRole('listitem');

		expect(listItem.length).toBe(2);
	});

	test('should not have the same tag', async () => {
		const user = userEvent.setup();

		const inputText = screen.getByRole<HTMLInputElement>('textbox');

		await user.type(inputText, 'world');
		await user.keyboard('[Enter]');

		await user.type(inputText, 'world');
		await user.keyboard('[Enter]');

		const listItem = screen.queryAllByRole('listitem');

		expect(listItem).toHaveLength(1);
	});

	test('should not allow insert white space', async () => {
		const user = userEvent.setup();

		const inputText = screen.getByRole<HTMLInputElement>('textbox');
		await user.type(inputText, ' ');

		const buttonShow = screen.getByRole('button', { name: 'add' });
		await user.click(buttonShow);

		const listItem = screen.queryAllByRole('listitem');
		expect(listItem.length).toBe(0);
	});

	test('should not allow insert values with spaces', async () => {
		const user = userEvent.setup();

		const inputText = screen.getByRole<HTMLInputElement>('textbox');
		await user.type(inputText, ' HELLO           ');

		const buttonShow = screen.getByRole('button', { name: 'add' });
		await user.click(buttonShow);

		const spanItem = screen.queryByText('hello');
		expect(spanItem).toHaveTextContent("hello");
	});

	test('Should allow to erase a tag', async () => {
		const user = userEvent.setup();
		const inputText = screen.getByRole<HTMLInputElement>('textbox');

		await user.type(inputText, 'hello');
		await user.keyboard('[Enter]');

		const buttonClear = screen.getByText('hello');

		await user.click(buttonClear);

		const listItem = screen.queryAllByRole('listitem');
		expect(listItem.length).toBe(0);
	});
});
