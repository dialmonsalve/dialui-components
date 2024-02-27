import { useState } from "react";
import useAppOptions from "./context/useAppOptions";
import openModal from "../../components/UI/modal/openModal";
import { MessageType, Animation } from "../../types";

type Response = 'yes' | 'no' | 'ok' | 'cancel';
export const useButtonPage = () => {

  const [response, handleResponse] = useState('' as Response);
	const [animation, setAnimation] = useState<string | undefined>('fade-in-out');
	const [typeModal, setTypeModal] = useState<string | undefined>('info');
	const { lang } = useAppOptions();

	const title = lang === 'es' ? 'borrar tarea' : 'delete task';
	const description =
		lang === 'es' ? '¿Seguro que desea eliminar?' : 'Do you want to delete?';

	function handleModal() {
		openModal({
			description,
			title,
			type: typeModal as MessageType,
			handleModalResponse: handleResponse,
			animation: animation as Animation,
		});
	}

  return {
    response,
    animation,
    typeModal,
    lang,
    handleModal,
    setAnimation,
    setTypeModal

  }
}
