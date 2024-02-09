import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router/App.tsx";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { ProviderHandlerUI } from "./context/ui/HandlerUIProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ProviderHandlerUI>
			<RouterProvider router={router} />
		</ProviderHandlerUI>
	</React.StrictMode>,
);
