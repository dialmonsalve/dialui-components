import Notification from '../../components/UI/Notification';
import Checkbox from '../../components/form/Checkbox';

import { useCheckbox } from '../../hooks';

const form = {
	respA: true,
	respB: false,
};

function NotificationPage() {
	const totalNotifications = 5;
	const { handleCheckboxChange, checkboxState } = useCheckbox({
		initialCheckbox: form,
	});

	return (
		<>
			<Notification
				hasNotification={totalNotifications > 0}
				size='sm'
				backgroundColor='blue-500'
			>
				{totalNotifications > 10 ? '+99' : totalNotifications.toString()}
			</Notification>
			<br />
			<br />

			<Notification hasNotification backgroundColor='outline-white' size='md'>
				{totalNotifications > 10 ? '+99' : totalNotifications.toString()}
			</Notification>

			<br />
			<Notification
				hasNotification={totalNotifications > 0}
				backgroundColor='red-600'
				size='lg'
			>
				{totalNotifications > 10 ? '+99' : totalNotifications.toString()}
			</Notification>
			<br />

			<br />
			<br />

			<br />
			<div style={{ width: '380px' }}>
				<Checkbox
					handleCheck={handleCheckboxChange}
					name='respA'
					checkboxFormState={checkboxState}
				/>

				<br />
				<Checkbox
					checkboxFormState={checkboxState}
					handleCheck={handleCheckboxChange}
					name='respB'
				/>
			</div>
		</>
	);
}

export default NotificationPage;
