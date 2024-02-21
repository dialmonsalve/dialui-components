import { createContext } from "react";

interface ContextProps {
	//Properties
	theme: "light" | "dark";

	// Functions
	handleToggleTheme: () => void;
}

export const AppOptionsContext = createContext({} as ContextProps);
