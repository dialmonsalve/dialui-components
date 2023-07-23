import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './router/App.tsx';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import { ProviderHandlerAnimations } from './context/ui/HandlerAnimationsProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProviderHandlerAnimations >
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <RouterProvider router={router} />
    </ProviderHandlerAnimations>
  </React.StrictMode>,
)
