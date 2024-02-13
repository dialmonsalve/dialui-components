import { useContext } from 'react';
import { SidebarContext } from '@/hooks/context/sidebar/SidebarContext';

export const useSidebar = () => {
	const context = useContext(SidebarContext);

	if (context === undefined)
		throw new Error('Context is not used inside the parent components');

	return context;
};
