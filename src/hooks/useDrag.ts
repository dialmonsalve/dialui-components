import { type DragEvent, useEffect, useState } from 'react';

interface InitialState<T> {
	initialState: T;
}

export function useDrag<T extends { position: number }[]>({
	initialState,
}: InitialState<T>) {
	const [entryState, setEntryState] = useState(
		initialState.sort((a, b) => a.position - b.position),
	);

	const [dragItemIndex, setDragItemIndex] = useState<number | undefined>();
	const [dragOverItem, setDragOverItemIndex] = useState<number | undefined>();

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
		newEntry.splice(dragOverItem || 0, 0, ...dragItem);

		setEntryState(newEntry as T);
	};

	const handleDragEnter = (index?: number) => {
		setDragOverItemIndex(index);
	};

	const handleDragLeave = () => {
		setDragOverItemIndex(undefined);
	};

	const handleDragEnd = () => {
		const newState = entryState
			.map((entry, index) => {
				return {
					...entry,
					position: index + 1,
				};
			})
			.sort((a, b) => a.position - b.position);
		setEntryState(newState as T);
		setDragItemIndex(undefined);
		setDragOverItemIndex(undefined);
	};
	return {
		entryState,
		dragOverItem,
		handleDragStart,
		handleDragOver,
		handleDrop,
		handleDragEnter,
		handleDragLeave,
		handleDragEnd,
	};
}
