import { IconSpinner } from '../../../components/UI';
import { render } from '@testing-library/react';

describe('Icon spinner', () => {
	test('Should render all icon spinner components', () => {
		render(
			<>
				<IconSpinner spinnerType='circles' />
				<IconSpinner spinnerType='eclipse' />
				<IconSpinner spinnerType='fleas' />
				<IconSpinner spinnerType='mice' />
				<IconSpinner spinnerType='squares' />
				<IconSpinner spin={false} />
			</>,
		);
	});
});
