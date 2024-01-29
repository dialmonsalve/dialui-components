import { ReactNode, useReducer } from 'react';
import { SidebarContext, sidebarReducer } from '.';
import { AlertProvider } from '../alert';

export interface Props {
	children: ReactNode;
}

export interface SidebarState {
	isOpenSidebar: boolean;
}

const SIDEBAR_INITIAL_STATE: SidebarState = {
	isOpenSidebar: false,
};

export const SidebarProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(sidebarReducer, SIDEBAR_INITIAL_STATE);

	const openSidebar = () => {
		dispatch({ type: '[Sidebar] - open sidebar' });
	};

	const closeSidebar = () => {
		dispatch({ type: '[Sidebar] - close sidebar' });
	};

	return (
		<SidebarContext.Provider
			value={{
				...state,
				openSidebar,
				closeSidebar,
			}}
		>
			<AlertProvider>{children}</AlertProvider>
		</SidebarContext.Provider>
	);
};
