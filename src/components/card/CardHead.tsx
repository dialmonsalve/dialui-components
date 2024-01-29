import { ReactNode } from "react";
import { AlignItems, type Content } from "@/types";

interface Props {
	alignItems?: AlignItems;
	color?: string;
	justifyContent?: Content;
	children?: ReactNode | ReactNode[];
}

export const CardHead = ({
	alignItems = "center",
	color = "white",
	justifyContent = "space-between",
	children,
	...props
}: Props) => {
	return (
		<div
			className="card__head"
			style={{ alignItems, justifyContent, color }}
			{...props}
		>
			{children}
		</div>
	);
};
