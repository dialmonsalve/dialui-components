import openModal from '../../components/UI/modal/openModal';
import useModal from '../../hooks/context/useModal';

function ModalPage() {


	const modal = useModal()

	console.log(modal.modalResponse);
	
	
	function handleModal() {
		openModal({
			animation: 'jumpToDown',
			description: 'Desea Eliminar?',
			title: 'Eliminar Usuario',
			type: 'info',
		});
	}

	return (
		<>
			<button type='button' onClick={handleModal}>
				Open
			</button>
		</>
	);
}

export default ModalPage;
