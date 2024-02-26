import { Suspense, lazy } from 'react';

import Home from '../pages/index';

import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import NotFoundPage from '../pages/notFound';

const IconSpinner = lazy(() => import('../pages/iconSpinner'));
const ButtonPage = lazy(() => import('../pages/button'));
const ModalPage = lazy(() => import('../pages/modal'));
const AlertPage = lazy(() => import('../pages/alert'));
const SpinnerPage = lazy(() => import('../pages/spinner'));
const NotificationPage = lazy(() => import('../pages/notification'));
const FormPage = lazy(() => import('../pages/form'));
const TablePage = lazy(() => import('../pages/table'));

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'icon-spinner',
				element: (
					<Suspense fallback={<></>}>
						<IconSpinner />
					</Suspense>
				),
			},
			{
				path: 'buttons',
				element: (
					<Suspense fallback={<></>}>
						<ButtonPage />
					</Suspense>
				),
			},
			{
				path: 'modal',
				element: (
					<Suspense fallback={<></>}>
						<ModalPage />
					</Suspense>
				),
			},
			{
				path: 'alert',
				element: (
					<Suspense fallback={<></>}>
						<AlertPage />
					</Suspense>
				),
			},
			{
				path: 'spinner',
				element: (
					<Suspense fallback={<></>}>
						<SpinnerPage />
					</Suspense>
				),
			},

			{
				path: 'notification',
				element: (
					<Suspense fallback={<></>}>
						<NotificationPage />
					</Suspense>
				),
			},

			{
				path: 'form',
				element: (
					<Suspense fallback={<></>}>
						<FormPage />
					</Suspense>
				),
			},
			{
				path: 'table',
				element: (
					<Suspense fallback={<></>}>
						<TablePage />
					</Suspense>
				),
			},
		],
	},
];

export const router = createBrowserRouter(routes);
