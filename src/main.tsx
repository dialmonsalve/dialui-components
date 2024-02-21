import React from 'react';
import ReactDOM from 'react-dom/client';

import { router } from './develop/router/App';
import { RouterProvider } from 'react-router-dom';
import { UIProvider } from './providers';
import { AppOptionsProvider } from './develop/hooks/context/appOptions/AppOptionsProvider';

import './develop/devStyles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<UIProvider>
			<AppOptionsProvider>
				<RouterProvider router={router} />
			</AppOptionsProvider>
		</UIProvider>
	</React.StrictMode>,
);
