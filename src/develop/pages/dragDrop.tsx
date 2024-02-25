import DragAndDrop from '../../components/UI/DragAndDrop';
import useDragAndDrop from '../../hooks/useDragAndDrop';

const initialState = [
	{
		id: 1,
		title: 'uno',
		description: 'description numero 1',
	},
	{
		id: 2,
		title: 'dos',		
		description: 'description numero 2',
	},
	{
		id: 3,
		title: 'tres',
		description: 'description numero 3',
	},
];
function DragAndDropPage() {
	const {
		dragItem,
		dragOverItem,
		entryState,
		setDragItem,
		setDragOverItem,
		setEntryState,
	} = useDragAndDrop({ initialState });
	return (
		<div
			style={{
				display: 'flex',
				gap: '10px',
				padding: '25px',

			}}
		>
			{entryState.map((entry, index) => (
				<DragAndDrop
					key={entry.id}
					index={index}
					entryState={entryState}
					dragItem={dragItem}
					dragOverItem={dragOverItem}
					setEntryState={setEntryState}
					setDragItem={setDragItem}
					setDragOverItem={setDragOverItem}
					backgroundColor='orange'
				>
					<h1>{entry.title}</h1>
					<p>{entry.description}</p>
				</DragAndDrop>
			))}
		</div>
	);
}

export default DragAndDropPage;
