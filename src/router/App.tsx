
import { RouteObject, createBrowserRouter } from 'react-router-dom'

import IconSpinner from '../pages/iconSpinner';
import ButtonPage from '../pages/button';
import HomePage from '../pages/index';
import ModalPage from '../pages/modal';
import NotFoundPage from '../pages/notFound';
import AlertPage from '../pages/alert';
import NavigationLinkPage from '../pages/navigationLink'
import SpinnerPage from '@/pages/spinner';

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
        path: 'icon-spinner',
        element: <IconSpinner />
      },
      {
        path: 'buttons',
        element: <ButtonPage />
      },
      {
        path: 'modal',
        element: <ModalPage />
      },
      {
        path: 'alert',
        element: <AlertPage />
      },

      {
        path: 'navigation-link',
        element: <NavigationLinkPage />
      },
      {
        path: 'spinner',
        element: <SpinnerPage />
      },
    ]
  }
];


// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const router = createBrowserRouter(routes)

