import { createContext } from "react";

interface ContextProps {
	//Properties
	theme: "light" | "dark";

	// Functions
	handleToggleTheme: () => void;
}

export const ThemeContext = createContext({} as ContextProps);
