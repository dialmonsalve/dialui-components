import { Colors } from "@/types";

interface Props {
	children?: string;
	backgroundColor?: Colors;
	size?: "sm" | "md" | "lg";
	hasNotification: boolean;
	className?: string;
}

const Notification = ({
	children,
	hasNotification,
	className,
	backgroundColor = "red-600",
	size = "md",
}: Props) => {
	const animation = hasNotification
		? `notification-animation notification__${backgroundColor}`
		: "notification__gray-200";

	return (
		<div
			className={`notification notification__${size} ${animation} ${className}`}
		>
			<p>{children}</p>
		</div>
	);
};

export default Notification;
