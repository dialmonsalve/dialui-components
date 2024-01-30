import { Notification } from '@/components/ui';
import { Checkbox } from '@/components/form';

import { useCheckbox } from '@/hooks/form';

const form = {
	respA: true,
	respB: false,
};

function NotificationPage() {
	const notal = [55];

	const { isChecked, handleCheck } = useCheckbox(form);

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
					handleCheck={handleCheck}
					isChecked={isChecked}
					name='respA'
				/>

				<br />
				<Checkbox
					isChecked={isChecked}
					handleCheck={handleCheck}
					name='respB'
				/>
			</div>
		</>
	);
}

export default NotificationPage;
