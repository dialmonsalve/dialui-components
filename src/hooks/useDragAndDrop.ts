import { useEffect, useState } from 'react';

interface InitialState<T> {
	initialState: T;
}

const useDragAndDrop = <T>({ initialState }: InitialState<T>) => {
	const [entryState, setEntryState] = useState(initialState);

	const [dragItem, setDragItem] = useState<number | undefined>();
	const [dragOverItem, setDragOverItem] = useState<number | undefined>();

	useEffect(() => {
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
	}, [initialState]);

	return {
		entryState,
		dragOverItem,
		dragItem,
		setDragItem,
		setDragOverItem,
		setEntryState,
	};
};

export default useDragAndDrop;
