import { DragAndDrop } from '../../../components/UI';
import { render } from '@testing-library/react';

const entries = [
	{
		id: 1,
		description: 'uno',
	},
	{
		id: 2,
		description: 'dos',
	},
	{
		id: 3,
		description: 'tres',
	},
];

describe('Drag and drop', () => {
	test('Should render drag and drop component', () => {
		render(<DragAndDrop initialState={entries} />);
	});
});
