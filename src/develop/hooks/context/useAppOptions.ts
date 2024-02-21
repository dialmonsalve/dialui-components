import { useContext } from 'react';
import { AppOptionsContext } from './appOptions/AppOptionsContext';

const useTheme = () => {
	const context = useContext(AppOptionsContext);

	if (context === undefined)
		throw new Error('Context is not used inside the parent components');

	return {
		theme: context.theme,
		lang: context.lang,
		handleToggleTheme: context.handleToggleTheme,
		handleToggleLang: context.handleToggleLang,
	};
};

export default useTheme;
