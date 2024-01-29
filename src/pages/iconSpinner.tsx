import { Button } from "@/components/ui";

function IconSpinnerPage() {
	const hola = true;

	return (
		<>
			{/* <Spinner type="classic" /> */}
			<div>
				<Button
					isLoading={hola}
					radius="radius-3"
					size="md-300"
					backgroundColor="black-300"
				>
					Enviar a todos los contactos
				</Button>
			</div>
		</>
	);
}

export default IconSpinnerPage;
