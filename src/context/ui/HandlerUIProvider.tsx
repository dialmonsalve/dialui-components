import { ReactNode } from "react";
import { HandlerUIContext } from "./HandlerUIContext";

import { ModalProvider } from "../modal/ModalProvider";
import { AlertProvider } from "../alert/AlertProvider";
import { SidebarProvider } from "../sidebar/SidebarProvider";

export interface Props {
	children: ReactNode;
}

export const ProviderHandlerUI = ({ children }: Props) => {
	return (
		<HandlerUIContext.Provider value={{}}>
			<SidebarProvider>
				<ModalProvider>
					<AlertProvider>{children}</AlertProvider>
				</ModalProvider>
			</SidebarProvider>
		</HandlerUIContext.Provider>
	);
};
