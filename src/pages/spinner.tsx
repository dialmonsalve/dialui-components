import { Spinner } from '@/components/ui';

function SpinnerPage() {
	const prueba = false;
	return prueba ? <Spinner spinnerType='lp' /> : <div>Spinners</div>;
}

export default SpinnerPage;
