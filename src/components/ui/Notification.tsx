import { HASH } from "@/const";

import type { Colors } from "@/types";

interface Props {
	children?: string;
	backgroundColor?: Colors;
	size?: "sm" | "md" | "lg";
	hasNotification: boolean;
}

const Notification = ({
	children,
	hasNotification,
	backgroundColor = "red-600",
	size = "md",
}: Props) => {
	const animation = hasNotification
		? `notification-animation${HASH} notification${HASH}__${backgroundColor}`
		: `notification${HASH}__gray-200`;

	return (
		<div
			className={`notification${HASH} notification${HASH}__${size} ${animation}`}
		>
			<p>{children}</p>
		</div>
	);
};

export default Notification;
