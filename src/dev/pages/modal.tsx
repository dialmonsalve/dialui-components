import openModal from '../../components/UI/modal/openModal';

function ModalPage() {
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
