import { AnchorHTMLAttributes, MouseEvent } from "react";
import type { Colors, Size, Radius } from "@/prod/types";
import { NavLink } from "react-router-dom";

export interface NavigationProps
	extends AnchorHTMLAttributes<HTMLAnchorElement> {
	backgroundColor?: Colors;
	children?: string;
	radius?: Radius;
	size?: Size;
	to: string;
}
function navigate(href: string) {
	window.history.pushState({}, "", href);
	// const navigationEvent = new Event("pushstate")
	// window.dispatchEvent(navigationEvent)
}

export const NavigationLink = ({
	backgroundColor = "blue-200",
	children,
	radius = "radius-0",
	size = "md-100",
	to,
	target,
	...props
}: NavigationProps) => {
	const handleClick = (
		e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
	) => {
		const isMainEvent = e.button === 0;
		const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;
		const isManageableEvent = target === undefined || target === "_self";

		if (isMainEvent && isManageableEvent && !isModifiedEvent) {
			// e.preventDefault()
			navigate(to);
		}
	};

	const className = `btn btn__${size} btn__${radius} btn__${backgroundColor}`;

	return (
		<NavLink
			to={to}
			className={className}
			onClick={handleClick}
			target={target}
			style={({ isActive }) => {
				return {
					backgroundColor: isActive
						? " rgba(131, 11, 164, 0.213)"
						: backgroundColor,
				};
			}}
			{...props}
		>
			{children}
		</NavLink>
	);
};
