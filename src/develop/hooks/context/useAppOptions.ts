import { useContext } from 'react';
import { AppOptionsContext } from './appOptions/AppOptionsContext';

const useTheme = () => {
	const context = useContext(AppOptionsContext);

	if (context === undefined)
		throw new Error('Context is not used inside the parent components');

	return {
		theme: context.theme,
		handleToggleTheme: context.handleToggleTheme,
	};
};

export default useTheme