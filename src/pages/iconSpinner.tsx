import { Button } from "../prod/components/UI";

function IconSpinnerPage() {
	const hola = true;

	return (
		<>
			<div>
				<Button
					isLoading={hola}
					radius="radius-3"
					size="md-200"
					backgroundColor="green-500"
					style={{textTransform:"uppercase"}}
				>
					Enviar a todos los contactos
				</Button>
			</div>
		</>
	);
}

export default IconSpinnerPage;
