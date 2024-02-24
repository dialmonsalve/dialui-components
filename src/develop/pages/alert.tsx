import openAlert from '../../components/UI/alert/openAlert';

function AlertPage() {
	const click = () => {
		const database = false;
		const typeMessage = database
			? 'Usuario no autorizado para la acción'
			: 'Usuario eliminado con éxito';
		openAlert({
			message: typeMessage,
			type: 'error',
			sideX: 'right',
			sideY: 'down',
			duration: 4000,
		});
	};

	return (
		<>
			<button type='button' onClick={click}>
				click
			</button>
		</>
	);
}

export default AlertPage;
