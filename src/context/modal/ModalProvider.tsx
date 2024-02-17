import { ReactNode, useState } from 'react';
import  ModalContext  from './ModalContext';

export interface Props {
	children: ReactNode;
}

type ModalResponse = 'ok' | 'yes' | 'no' | 'cancel';

export const ModalProvider = ({ children }: Props) => {
	const [modalResponse, setModalResponse] = useState<ModalResponse>(
		'' as ModalResponse,
	);

	function handleModalResponse(res: ModalResponse) {
		const validResponse =
			res !== 'yes' && res !== 'no' && res !== 'ok' && res !== 'cancel';
			
		if (validResponse) {
			throw new Error(`'${res}' is not a valid response`);
		}
		setModalResponse(res);
	}

	const value = {
		modalResponse,
		handleModalResponse,
	};

	return (
		<ModalContext.Provider value={value}>
			{children}
		</ModalContext.Provider>
	);
};