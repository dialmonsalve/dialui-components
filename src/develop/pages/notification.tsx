import { Notification } from '../../components/UI';
import { Checkbox } from '../../components/form';

import { useCheckbox } from '../../hooks';

const form = {
	respA: true,
	respB: false,
};

function NotificationPage() {
	const notal = [55];
	const { handleCheckboxChange, checkboxState,  } =
		useCheckbox({initialCheckbox: form});

	return (
		<>
			<Notification
				hasNotification={notal.length > 0}
				size='sm'
				backgroundColor='blue-500'
			>
				{notal.length === 0 ? '+99' : notal.length.toString()}
			</Notification>
			<br />
			<br />

			<Notification hasNotification backgroundColor='outline-white' size='md'>
				{notal.length === 0 ? '+99' : notal.length.toString()}
			</Notification>

			<br />
			<Notification
				hasNotification={notal.length > 0}
				backgroundColor='red-600'
				size='lg'
			>
				{notal.length === 0 ? '+99' : notal.length.toString()}
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
