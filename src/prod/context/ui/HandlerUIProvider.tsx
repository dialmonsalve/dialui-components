import { ReactNode } from 'react';
import { HandlerUIContext } from './HandlerUIContext';

import { ModalProvider } from '../modal/ModalProvider';

export interface Props {
	children: ReactNode;
}

export const ProviderHandlerUI = ({ children }: Props) => {
	return (
		<HandlerUIContext.Provider value={{}}>
				<ModalProvider>{children}</ModalProvider>
		</HandlerUIContext.Provider>
	);
};
