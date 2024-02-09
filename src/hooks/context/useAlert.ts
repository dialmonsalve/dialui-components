import { useContext } from 'react';
import { AlertContext } from '../../context/alert/AlertContext';

export const useAlert = () => {
	const context = useContext(AlertContext);

	if (context === undefined)
		throw new Error('Context is not used inside the parent components');

	return context;
};
