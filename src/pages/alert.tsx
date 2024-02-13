import openAlert from '../prod/components/UI/alert/openAlert';

function AlertPage() {
	const click = () => {

		const database = false
		const typeError = database ? 'error' : 'info';
		const typeMessage = database ? "Usuario no autorizado para la acción" : "Usuario eliminado con éxito" 
		openAlert({
			message: typeMessage,
			type: typeError,
			// sideX: 'right',
			// sideY: 'down',
			// duration: 4000,
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
