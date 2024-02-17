import React from 'react';
import ReactDOM from 'react-dom/client';

import { router } from './dev/router/App.tsx';
import { RouterProvider } from 'react-router-dom';
import { UIProvider } from './context/ui/UIProvider.tsx';
import { SidebarProvider } from './dev/hooks/context/sidebar/SidebarProvider.tsx';


import './dev/devStyles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<UIProvider>
			<SidebarProvider>
				<RouterProvider router={router} />
			</SidebarProvider>
		</UIProvider>
	</React.StrictMode>,
);
