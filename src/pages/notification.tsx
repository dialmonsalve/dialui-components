import { Notification } from "@/components/ui";
import { Checkbox } from "@/components/ui/form";

import { useCheckbox } from "@/hooks/context/form";

const form = {
	respA: true,
	respB: false,
};

function NotificationPage() {
	const notal = [];

	const { isChecked, handleCheck } = useCheckbox(form);

	console.log({ isChecked: navigator.languages[1] });

	return (
		<>
			<Notification
				hasNotification={notal.length > 0}
				size="sm"
				backgroundColor="blue-500"
			>
				{notal.length === 0 ? "+99" : notal.length.toString()}
			</Notification>
			<br />
			<br />

			<Notification hasNotification backgroundColor="outline-white" size="md">
				{notal.length === 0 ? "+99" : notal.length.toString()}
			</Notification>
			<br />

			<Notification
				hasNotification={notal.length > 0}
				backgroundColor="outline-white"
				size="lg"
			>
				{notal.length === 0 ? "+99" : notal.length.toString()}
			</Notification>
			<br />

			<br />
			<br />

			<br />
			<div style={{ width: "380px" }}>
				<Checkbox
					handleCheck={handleCheck}
					isChecked={isChecked}
					name="respA"
					label="monsalve sadfasdfsadf asd"
				/>

				<br />
				<Checkbox
					isChecked={isChecked}
					handleCheck={handleCheck}
					name="respB"
					label="diego"
				/>
			</div>
		</>
	);
}

export default NotificationPage;
