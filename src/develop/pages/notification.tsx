import useAppOptions from '../hooks/context/useAppOptions';
import Notification from '../../components/UI/Notification';
import Highlighter from '../components/Highlighter';
import { ListItems } from '../components/ListItems';

import buttonsPage from '../const/buttonsPage';
import notificationPage from '../const/notificationPage';
import language from '../lang/notification.json';

function NotificationPage() {
	const { lang } = useAppOptions();

	const totalNotifications = 1;

	return (
		<section>
			<h1>{language[lang].h1}</h1>
			<p>{language[lang].p1}</p>

			<article>
				<h3>default alert</h3>

				<Notification hasNotification={totalNotifications > 0}>
					{totalNotifications > 10 ? '+99' : totalNotifications.toString()}
				</Notification>

				<Highlighter>
					{`import { Notification } from "dialui-components";

export const MyComponent = () => {
  const totalNotifications = 1;

  return (
    <Notification hasNotification={totalNotifications > 0}>
      {totalNotifications > 10 ? "+99" : totalNotifications.toString()}
    </Notification>
  );
};`}
				</Highlighter>
			</article>

			<article>
				<h4>Default Props:</h4>
				<ListItems items={notificationPage.DEFAULT_PROPS_DOM} />
			</article>

			<article>
				<h4>Props:</h4>
				<ListItems items={notificationPage.ALL_PROPS_DOM} />
			</article>

			<article>
				<h4>Colors:</h4>
				<p>{language[lang].propColor}</p>
				<ListItems items={buttonsPage.BACKGROUND_COLOR_DOM} />
			</article>
		</section>
	);
}

export default NotificationPage;
