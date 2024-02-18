import { Notification } from '../../components/UI';
import { Checkbox } from '../../components/form';

import { useCheckbox } from '../../hooks';

const form = {
	respA: true,
	respB: false,
};

function NotificationPage() {
	const totalNotifications = [55];
	const { handleCheckboxChange, checkboxState,  } =
		useCheckbox({initialCheckbox: form});

	return (
		<>
			<Notification
				hasNotification={totalNotifications.length > 0}
				size='sm'
				backgroundColor='blue-500'
			>
				{totalNotifications.length === 0 ? '+99' : totalNotifications.length.toString()}
			</Notification>
			<br />
			<br />

			<Notification hasNotification backgroundColor='outline-white' size='md'>
				{totalNotifications.length === 0 ? '+99' : totalNotifications.length.toString()}
			</Notification>

			<br />
			<Notification
				hasNotification={totalNotifications.length > 0}
				backgroundColor='red-600'
				size='lg'
			>
				{totalNotifications.length === 0 ? '+99' : totalNotifications.length.toString()}
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
