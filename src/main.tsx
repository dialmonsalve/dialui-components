import React from 'react';
import ReactDOM from 'react-dom/client';

import { router } from './router/App.tsx';
import { RouterProvider } from 'react-router-dom';
import { ProviderHandlerUI } from './prod/context/ui/HandlerUIProvider.tsx';
import { SidebarProvider } from './hooks/context/sidebar/SidebarProvider.tsx';

import './devsass/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ProviderHandlerUI>
			<SidebarProvider>
				<RouterProvider router={router} />
			</SidebarProvider>
		</ProviderHandlerUI>
	</React.StrictMode>,
);
