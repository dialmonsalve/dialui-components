import Notification from '../../../components/UI/Notification';
import { render } from '@testing-library/react';

describe('Button', () => {
	test('Should render notification component', () => {
		render(
			<>
				<Notification hasNotification />
				<Notification hasNotification={false} />
			</>,
		);
	});
});
