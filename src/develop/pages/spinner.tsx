import  Spinner from '../../components/UI/Spinner';

function SpinnerPage() {
	const prueba = false;
	return prueba ? <Spinner spinnerType='squares' /> : <div>Spinners</div>;
}

export default SpinnerPage;
