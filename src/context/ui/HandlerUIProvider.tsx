import { ReactNode } from "react";
import { HandlerUIContext } from ".";

import { ModalProvider } from "../modal";
import { AlertProvider } from "../alert";
import { SidebarProvider } from "../sidebar";

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
