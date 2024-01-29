import { Button } from "@/components/ui";

function ButtonPage() {
	const click = (number: number) => {
		console.log(number);
	};

	return (
		<div>
			<Button
				buttonStyle="slide-down"
				backgroundColor="blue-200"
				size="sm-100"
				radius="radius-3"
				spinnerType="fleas"
				onClick={() => click(5)}
				isLoading
			>
				CINCO
			</Button>
			<br />
			<Button
				buttonStyle="slide-down"
				backgroundColor="green-400"
				size="sm-200"
				radius="radius-3"
				spinnerType="squares"
			>
				Enviar
			</Button>
			<br />
			<Button
				spinnerType="squares"
				backgroundColor="outline-blue"
				size="sm-300"
				radius="radius-3"
				buttonStyle="beat"
			>
				Enviar
			</Button>
			<br />
			<Button
				buttonStyle="filled"
				backgroundColor="red-200"
				size="md-100"
				radius="radius-1"
				spinnerType="eclipse"
				isLoading
			>
				Enviar
			</Button>
			<br />
			<Button
				buttonStyle="filled"
				backgroundColor="red-400"
				size="md-200"
				radius="radius-3"
				spinnerType="squares"
			>
				Enviar
			</Button>
			<br />
			<Button
				buttonStyle="filled"
				spinnerType="mouses"
				backgroundColor="red-600"
				size="md-300"
				radius="radius-5"
			>
				Enviar
			</Button>
			<br />
			<Button
				buttonStyle="filled"
				spinnerType="squares"
				backgroundColor="purple-200"
				size="lg-100"
				radius="radius-3"
			>
				Enviar
			</Button>
			<br />
			<Button
				buttonStyle="ripple"
				spinnerType="squares"
				backgroundColor="purple-400"
				size="lg-200"
				radius="radius-3"
			>
				Enviar
			</Button>
			<br />
			<Button
				buttonStyle="squares"
				spinnerType="mouses"
				backgroundColor="purple-400"
				size="lg-300"
				radius="radius-3"
			>
				Enviar
			</Button>
			<br />
			<Button
				buttonStyle="squares"
				spinnerType="squares"
				backgroundColor="black-200"
				size="w-25"
				radius="radius-3"
			>
				Enviar
			</Button>
			<br />
			<Button
				buttonStyle="ripple"
				backgroundColor="black-300"
				size="w-50"
				radius="radius-3"
				spinnerType="squares"
			>
				Enviar
			</Button>
			<br />
			<Button
				buttonStyle="ripple"
				backgroundColor="pink-400"
				size="w-75"
				isLoading
				radius="radius-3"
				spinnerType="squares"
			>
				Enviar
			</Button>
			<br />
			<Button
				buttonStyle="slide-down"
				backgroundColor="red-400"
				size="w-100"
				radius="radius-3"
				spinnerType="squares"
			>
				Enviar
			</Button>
		</div>
	);
}

export default ButtonPage;
