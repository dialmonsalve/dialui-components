import { DragAndDrop } from '@/components/UI';

const entries = [
	{
		id: 1,
		content: 'uno',
	},
	{
		id: 2,
		content: 'dos',
	},
	{
		id: 3,
		content: 'tres',
	},
	{
		id: 4,
		content: 'cuatro',
	},
	{
		id: 5,
		content: 'cinco',
	},
	{
		id: 6,
		content: 'seis',
	},
	{
		id: 7,
		content: 'siete',
	},
	{
		id: 8,
		content: 'ocho',
	},
	{
		id: 9,
		content: 'nueve',
	}
];
function DragAndDropPage() {
	return (
		<>
			{/* <Drag /> */}

{/* <OtroDrag /> */}

<DragAndDrop initialState={entries} />
			{/* <NewDrag /> */}

		</>
	);
}

export default DragAndDropPage;
