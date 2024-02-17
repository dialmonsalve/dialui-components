import { useContext } from "react";
import { UIContext } from "../context/ui/UIContext";


export const useHandlerUI = () => {
	const context = useContext(UIContext);

	if (context === undefined)
		throw new Error("Context is not used inside the parent components");

	return context;
};
