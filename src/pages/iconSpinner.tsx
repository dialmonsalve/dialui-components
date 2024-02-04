import { Button } from "@/components/UI";

function IconSpinnerPage() {
	const hola = false;

	return (
		<>
			<div>
				<Button
					isLoading={hola}
					radius="radius-3"
					size="w-25"
					backgroundColor="black-300"
				>
					Enviar a todos los contactos
				</Button>
			</div>
		</>
	);
}

export default IconSpinnerPage;
