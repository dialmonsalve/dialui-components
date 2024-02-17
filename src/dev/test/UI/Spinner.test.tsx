import { Spinner } from '../../../components/UI';
import { render } from '@testing-library/react';

describe('Button', () => {
	test('Should render spinner component', () => {
		render(
			<>
				<Spinner spinnerType='eclipse' />
				<Spinner spinnerType='circles' />
				<Spinner spinnerType='fleas' />
				<Spinner spinnerType='half-spinner' />
				<Spinner spinnerType='lp' />
				<Spinner spinnerType='squares' />
				<Spinner spinnerType='mice' />
			</>,
		);
	});
});
