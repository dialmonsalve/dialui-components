import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router/App.tsx";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { ProviderHandlerUI } from "./context/ui/HandlerUIProvider.tsx";
import { StatusBar } from "./components/ui";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<StatusBar />
		<ProviderHandlerUI>
			{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
			<RouterProvider router={router} />
		</ProviderHandlerUI>
	</React.StrictMode>,
);
