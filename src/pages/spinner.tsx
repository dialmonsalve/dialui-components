import { Spinner } from '@/components/ui';

function SpinnerPage() {
	const prueba = false;
	return prueba ? <Spinner spinnerType='mice' /> : <div>Spinners</div>;
}

export default SpinnerPage;
