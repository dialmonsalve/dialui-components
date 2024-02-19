import { useContext } from 'react';
import { ThemeContext } from './sidebar/ThemeContext';

const useTheme = () => {
	const context = useContext(ThemeContext);

	if (context === undefined)
		throw new Error('Context is not used inside the parent components');

	return {
		theme: context.theme,
		handleToggleTheme: context.handleToggleTheme,
	};
};

export default useTheme