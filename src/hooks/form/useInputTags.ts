import { useEffect, useState } from 'react';

export const useInputTags = ({
	initialInputTag,
}: { initialInputTag: string[] }) => {
	const [tagsState, setTagsState] = useState(initialInputTag);

	useEffect(() => {
		setTagsState(initialInputTag);
	}, [initialInputTag]);

	const resetInputTags = () => setTagsState(initialInputTag);

	return {
		tagsState,
		handleInputTagsChange: setTagsState,
		resetInputTags,
	};
};
