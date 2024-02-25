import { CSSProperties, DragEvent, ReactNode } from 'react';

import styles from '../../styles/components/UI/dragAndDrop.module.css';
import { BasicColors } from '../../types';

interface Props<T> {
	backgroundColor?: BasicColors;
	index: number;
	sx?: CSSProperties;
	children: ReactNode;
	dragOverItem?: number;
	dragItem?: number;
	entryState: T;
	setEntryState: (entry: T) => void;
	setDragOverItem: (value?: number) => void;
	setDragItem: (value?: number) => void;
}

function DragAndDrop<T>({
	entryState,
	dragItem,
	dragOverItem,
	index,
	backgroundColor,
	sx,
	setEntryState,
	setDragItem,
	setDragOverItem,
	children,
}: Props<T>) {
	const handleDragStart = (index: number) => {
		setDragItem(index);
	};

	const handleDragOver = (event: DragEvent) => {
		event.preventDefault();
	};

	const handleDrop = () => {
		const newEntry = [...(entryState as T[])];
		const newDragItem = newEntry.splice(dragItem || 0, 1);
		newEntry.splice(dragOverItem || 0, 0, ...newDragItem);

		setEntryState(newEntry as T);
	};

	const handleDragEnter = (index?: number) => {
		setDragOverItem(index);
	};

	const handleDragLeave = () => {
		setDragOverItem(undefined);
	};

	const handleDragEnd = () => {
		if (entryState instanceof Array) {
			const newState = entryState
				.map((entry, index) => {
					return {
						...entry,
						positionEntry: index + 1,
					};
				})
				.sort((a, b) => a.positionEntry - b.positionEntry);
			setEntryState(newState as T);
		}
		setDragItem(undefined);
		setDragOverItem(undefined);
	};

	return (
		<div
			className={`${
				dragOverItem === index
					? `${styles['list-item']} ${styles['next-position']}`
					: styles['list-item']
			} ${styles[`list-${backgroundColor}`]}`}
			draggable
			onDragStart={() => handleDragStart(index)}
			onDragOver={handleDragOver}
			onDrop={() => handleDrop()}
			onDragEnter={() => handleDragEnter(index)}
			onDragLeave={handleDragLeave}
			onDragEnd={handleDragEnd}
			style={sx}
		>
			{children}
		</div>
	);
}

export default DragAndDrop;
