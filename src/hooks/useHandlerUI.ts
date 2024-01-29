import { useContext } from "react";
import { HandlerUIContext } from "../context/ui/HandlerUIContext";

export const useHandlerUI = () => {
	const context = useContext(HandlerUIContext);

	if (context === undefined)
		throw new Error("Context is not used inside the parent components");

	return context;
};
