import { Spinner } from '../prod/components/UI';

function SpinnerPage() {
	const prueba = false;
	return prueba ? <Spinner spinnerType='squares' /> : <div>Spinners</div>;
}

export default SpinnerPage;
