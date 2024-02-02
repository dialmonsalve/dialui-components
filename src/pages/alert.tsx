import { Alert } from "@/components/UI";
import { useAlert } from "@/hooks/context";

function AlertPage() {
	const { openAlert } = useAlert();
	const click = () => {
		openAlert(20);
	};

	return (
		<>
			<Alert
				message="El usuario ha sido creado exitosamente"
				type="error"
				sideX="left"
				sideY="up"
					
			/>

			<button type="button" onClick={click}>click</button>
		</>
	);
}

export default AlertPage;
