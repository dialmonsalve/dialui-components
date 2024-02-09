import { ReactNode, useState } from 'react';
import { ModalContext } from './ModalContext';

export interface Props {
	children: ReactNode;
}

type ModalResponse = 'ok' | 'yes' | 'no';

export const ModalProvider = ({ children }: Props) => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [modalResponse, setModalResponse] = useState<ModalResponse>(
		'' as ModalResponse,
	);

	const openModal = () => {
		setIsOpenModal(true);
	};

	const closeModal = () => {
		setIsOpenModal(false);
	};

	const handleModalResponse = (res: ModalResponse) => {
		if (res !== 'yes' && res !== 'no' && res !== 'ok') {
			throw new Error(`'${res}' is not a valid response`);
		}
		setModalResponse(res);
	};

	const value = {
		isOpenModal,
		modalResponse,
		openModal,
		closeModal,
		handleModalResponse,
	};

	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
}
