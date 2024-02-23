import Button  from "../../components/UI/buttons/ButtonNormal";

function IconSpinnerPage() {
	const hola = true;

	return (
		<>
			<div>
				<Button
					isLoading={hola}
					borderRadius="r-3"
					size="md-200"
					backgroundColor="green-500"
				>
					Enviar a todos los contactos
				</Button>
			</div>
		</>
	);
}

export default IconSpinnerPage;
