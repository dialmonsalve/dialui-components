import DragAndDrop from '../../components/UI/DragAndDrop';
import { useDrag } from '../../hooks/useDrag';

const initialState = [
	{
		id: 1,
		title: 'uno',
		position: 1,
		description: 'description numero 1',
	},
	{
		id: 2,
		title: 'dos',
		position: 2,
		description: 'description numero 2',
	},
	{
		id: 3,
		title: 'tres',
		position: 25000,
		description: 'description numero 3',
	},
];
function DragAndDropPage() {
	const {
		dragOverItem,
		entryState,
		handleDragEnd,
		handleDragEnter,
		handleDragLeave,
		handleDragOver,
		handleDragStart,
		handleDrop,
	} = useDrag({ initialState });

	return (
		<div
			style={{ display: 'grid', gap: '10px', padding: '25px', width: '500px' }}
		>
			{entryState.map((entry, index) => (
				<DragAndDrop
					dragOverItem={dragOverItem}
					entry={entry}
					handleDragEnd={handleDragEnd}
					handleDragEnter={handleDragEnter}
					handleDragLeave={handleDragLeave}
					handleDragOver={handleDragOver}
					handleDragStart={handleDragStart}
					handleDrop={handleDrop}
					index={index}
					key={entry.id}
					sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}
					backgroundColor='pink'
				>
					<h4>{entry.title}</h4>
					<h2>{entry.description}</h2>
				</DragAndDrop>
			))}
		</div>
	);
}

export default DragAndDropPage;
