import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './router/App.tsx';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import { ProviderHandlerUI } from './context/ui/HandlerUIProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProviderHandlerUI >
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <RouterProvider router={router} />
    </ProviderHandlerUI>
  </React.StrictMode>,
)
