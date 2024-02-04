import { DragEvent, ReactNode, useEffect, useState } from 'react';
import styles from '@/styles/components/UI/dragAndDrop.module.scss';

interface Props {
	initialState: { id: number; content?: string; description: string }[];
	children?: ReactNode;
}
const DragAndDrop = ({ initialState, children }: Props) => {
	const [entryState, setEntryState] = useState(initialState);

	const [dragItemIndex, setDragItemIndex] = useState<number | undefined>();
	const [dragOverItemIndex, setDragOverItemIndex] = useState<
		number | undefined
	>();

	useEffect(() => {
		setEntryState(initialState);
	}, [initialState]);

	const handleDragStart = (index: number) => {
		setDragItemIndex(index);
	};
	const handleDragOver = (event: DragEvent) => {
		event.preventDefault();
	};

	const handleDrop = () => {
		const newEntry = [...entryState];
		const dragItem = newEntry.splice(dragItemIndex || 0, 1);
		newEntry.splice(dragOverItemIndex || 0, 0, ...dragItem);

		setEntryState(newEntry);
	};

	const handleDragEnter = (index?: number) => {
		setDragOverItemIndex(index);
	};

	const handleDragLeave = () => {
		setDragOverItemIndex(undefined);
	};

	const handleDragEnd = () => {
		setDragItemIndex(undefined);
		setDragOverItemIndex(undefined);
	};

	return entryState.map((sport, index) => (
		<li
			key={sport.id}
			className={
				dragOverItemIndex === index
					? `${styles['list-item']} ${styles['next-position']}`
					: styles['list-item']
			}
			draggable
			onDragStart={() => handleDragStart(index)}
			onDragOver={handleDragOver}
			onDrop={() => handleDrop()}
			onDragEnter={() => handleDragEnter(index)}
			onDragLeave={handleDragLeave}
			onDragEnd={handleDragEnd}
		>
			<span>{index + 1}</span>
			<h3>{sport.description}</h3>
			{sport.content && <p>{sport.content}</p>}
			{children}
		</li>
	));
};

export default DragAndDrop;
