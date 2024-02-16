import { ReactNode } from 'react';
import { UIContext } from './UIContext';

import { ModalProvider } from '../modal/ModalProvider';

export interface Props {
	children: ReactNode;
}

export const UIProvider = ({ children }: Props) => {
	return (
		<UIContext.Provider value={{}}>
				<ModalProvider>{children}</ModalProvider>
		</UIContext.Provider>
	);
};
