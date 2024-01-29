import { Modal } from "@/components/ui";
import { useModal } from "@/hooks/context";

function ModalPage() {
	const { setOpenModal } = useModal();

	const openModal = () => {
		setOpenModal();
	};

	return (
		<>
			<Modal
				animation="jumpToDown"
				type="info"
				description="Esto es una descripción de prueba"
				title="Desea eliminar?"
			/>
			<button onClick={openModal}>Open</button>
		</>
	);
}

export default ModalPage;
