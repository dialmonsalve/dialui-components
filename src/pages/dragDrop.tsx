import { DragAndDrop } from '../prod/components/UI';

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
	{
		id: 4,
		description: 'cuatro',
	},
	{
		id: 5,
		description: 'cinco',
	},
	{
		id: 6,
		description: 'seis',
	},
	{
		id: 7,
		description: 'siete',
	},
	{
		id: 8,
		description: 'ocho',
	},
	{
		id: 9,
		description: 'nueve',
	},
	{
		id: 10,
		description: 'diez',
	},
];
function DragAndDropPage() {
	return (
		<>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
				<DragAndDrop initialState={entries} />
			</div>
		</>
	);
}

export default DragAndDropPage;
