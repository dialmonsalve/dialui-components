import { ReactNode } from 'react';
import { HandlerUIContext } from './HandlerUIContext';

import { ModalProvider } from '../modal/ModalProvider';
import { SidebarProvider } from '../sidebar/SidebarProvider';

export interface Props {
	children: ReactNode;
}

export const ProviderHandlerUI = ({ children }: Props) => {
	return (
		<HandlerUIContext.Provider value={{}}>
			<SidebarProvider>
				<ModalProvider>{children}</ModalProvider>
			</SidebarProvider>
		</HandlerUIContext.Provider>
	);
};
