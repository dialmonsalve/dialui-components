import Button from '../../components/UI/buttons/Button';

function IconSpinnerPage() {
	const hola = false;

	return (
		<>
			<div>
				<Button
					isLoading={hola}
					button='ripple'
					hasSpinner
					iconSpinner='fleas'
					borderRadius='r-3'
					size='md-100'
					backgroundColor='green-500'
				>
					Enviar
				</Button>
			</div>
		</>
	);
}

export default IconSpinnerPage;
