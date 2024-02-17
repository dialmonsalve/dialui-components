import { Spinner } from '../../components/UI';

function SpinnerPage() {
	const prueba = false;
	return prueba ? <Spinner spinnerType='squares' /> : <div>Spinners</div>;
}

export default SpinnerPage;
