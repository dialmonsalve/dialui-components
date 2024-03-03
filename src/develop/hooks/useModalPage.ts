import { useState } from 'react';
import useAppOptions from './context/useAppOptions';
import openModal from '../../components/modal/openModal';
import { MessageType, Animation } from '../../types';

import modalPage from '../const/modalPage';

export const useModalPage = () => {
	const [modalAnswer, setModalAnswer] = useState('');
	const [animation, setAnimation] = useState(modalPage.ANIMATIONS[8]);
	const [typeModal, setTypeModal] = useState('info');
	const { lang } = useAppOptions();

	const title = lang === 'es' ? 'borrar tarea' : 'delete task';
	const description =
		lang === 'es' ? '¿Seguro que desea eliminar?' : 'Do you want to delete?';

	function handleClickModal() {
		openModal({
			description,
			title,
			type: typeModal as MessageType,
			handleModalAnswer: setModalAnswer,
			animation: animation as Animation,
		});
	}

	return {
		modalAnswer,
		animation,
		typeModal,
		lang,
		handleClickModal,
		setAnimation,
		setTypeModal,
	};
};
