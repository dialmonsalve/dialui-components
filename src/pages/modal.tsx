import { Modal } from '@/components/UI';
import { useModal } from '@/hooks/context';

function ModalPage() {
	const { openModal } = useModal();

	return (
		<>
			<Modal
				animation='jumpToDown'
				type='error'
				description='Esto es una descripción de prueba'
				title='Desea eliminar?'
			/>
			<button type='button' onClick={openModal}>
				Open
			</button>
		</>
	);
}

export default ModalPage;
