import { useEffect, useState } from 'react';

export const useInputTags = ({
	initialInputTags,
}: { initialInputTags: string[] }) => {
	const [tagsState, setTagsState] = useState(initialInputTags);

	useEffect(() => {
		setTagsState(initialInputTags);
	}, [initialInputTags]);

	const resetInputTags = () => setTagsState(initialInputTags);

	return {
		tagsState,
		handleInputTagsChange: setTagsState,
		resetInputTags,
	};
};