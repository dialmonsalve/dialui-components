import Notification from '../../components/UI/Notification';
import { Skeleton } from '../components/Skeleton';



function NotificationPage() {
	
	const totalNotifications = 100;

	return (
		<>
			{/* <Notification
				hasNotification={totalNotifications > 0}
				size='sm'
				backgroundColor='blue-500'
			>
				{totalNotifications > 10 ? '+99' : totalNotifications.toString()}
			</Notification>
			<br />
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
			<br /> */}
		</>
	);
}

export default NotificationPage;
