import { useContext } from 'react';
import UIContext  from '../../context/ui/UIContext';

const useUserInterface = () => {
	const context = useContext(UIContext);

	if (context === undefined)
		throw new Error('Context is not used inside the parent components');

	return context;
};

export default useUserInterface;
