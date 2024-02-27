import { Suspense, lazy } from 'react';

import Home from '../pages/index';
import { Skeleton } from '../components/Skeleton';

const IconSpinner = lazy(() => import('../pages/iconSpinner'));
const ButtonPage = lazy(() => import('../pages/button'));
const ModalPage = lazy(() => import('../pages/modal'));
const AlertPage = lazy(() => import('../pages/alert'));
const SpinnerPage = lazy(() => import('../pages/spinner'));
const NotificationPage = lazy(() => import('../pages/notification'));
const FormPage = lazy(() => import('../pages/form'));
const TablePage = lazy(() => import('../pages/table'));

export const UIComponentPages = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: 'icon-spinner',
    element: (
      <Suspense fallback={<Skeleton/>}>
        <IconSpinner />
      </Suspense>
    ),
  },
  {
    path: 'buttons',
    element: (
      <Suspense fallback={<Skeleton/>}>
        <ButtonPage />
      </Suspense>
    ),
  },
  {
    path: 'modal',
    element: (
      <Suspense fallback={<Skeleton/>}>
        <ModalPage />
      </Suspense>
    ),
  },
  {
    path: 'alert',
    element: (
      <Suspense fallback={<Skeleton/>}>
        <AlertPage />
      </Suspense>
    ),
  },
  {
    path: 'spinner',
    element: (
      <Suspense fallback={<Skeleton/>}>
        <SpinnerPage />
      </Suspense>
    ),
  },

  {
    path: 'notification',
    element: (
      <Suspense fallback={<Skeleton/>}>
        <NotificationPage />
      </Suspense>
    ),
  },

  {
    path: 'form',
    element: (
      <Suspense fallback={<Skeleton/>}>
        <FormPage />
      </Suspense>
    ),
  },
  {
    path: 'table',
    element: (
      <Suspense fallback={<Skeleton/>}>
        <TablePage />
      </Suspense>
    ),
  },
]
