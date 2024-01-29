import { Alert } from "@/components/ui";
import { useAlert } from "@/hooks/context";

function AlertPage() {
	const { openAlert } = useAlert();
	const click = () => {
		openAlert(2);
	};

	return (
		<>
			<Alert
				message="El usuario ha sido creado exitosamente"
				type="error"
				sideX="right"
				sideY="up"
				id="hola"
			/>

			<button onClick={click}>click</button>
		</>
	);
}

export default AlertPage;
