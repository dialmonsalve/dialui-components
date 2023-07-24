
import { RouteObject, createBrowserRouter } from 'react-router-dom'


import Alerts from '../pages/alerts';
import ButtonsPage from '../pages/buttons';
import HomePage from '../pages/index';
import ModalsPage from '../pages/modalsPage';
import NotFoundPage from '../pages/notFound';
import NotificationsPage from '../pages/Notifications';

import { Layout } from "../components/layout/Layout";

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'alerts',
        element: <Alerts />
      },
      {
        path: 'buttons',
        element: <ButtonsPage />
      },
      {
        path: 'modal',
        element: <ModalsPage />
      },
      {
        path: 'notification',
        element: <NotificationsPage />
      },

    ]
  }
];


// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const router = createBrowserRouter(routes)

