import React from 'react';
import ReactDOM from 'react-dom/client';

import { router } from './develop/router/App';
import { RouterProvider } from 'react-router-dom';
import { UIProvider } from './providers';
import { SidebarProvider } from './develop/hooks/context/sidebar/SidebarProvider';


import './develop/devStyles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<UIProvider>
			<SidebarProvider>
				<RouterProvider router={router} />
			</SidebarProvider>
		</UIProvider>
	</React.StrictMode>,
);
