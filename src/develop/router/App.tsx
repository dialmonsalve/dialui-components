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
const DragAndDropPage = lazy(() => import('../pages/dragDrop'));
const TablePage = lazy(() => import('../pages/table'));

const FONT_SIZE = '35px';

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
					<Suspense
						fallback={<div style={{ fontSize: FONT_SIZE }}>Loading...</div>}
					>
						<IconSpinner />,
					</Suspense>
				),
			},
			{
				path: 'buttons',
				element: (
					<Suspense
						fallback={<div style={{ fontSize: FONT_SIZE }}>Loading...</div>}
					>
						<ButtonPage />,
					</Suspense>
				),
			},
			{
				path: 'modal',
				element: (
					<Suspense
						fallback={<div style={{ fontSize: FONT_SIZE }}>Loading...</div>}
					>
						<ModalPage />,
					</Suspense>
				),
			},
			{
				path: 'alert',
				element: (
					<Suspense
						fallback={<div style={{ fontSize: FONT_SIZE }}>Loading...</div>}
					>
						<AlertPage />,
					</Suspense>
				),
			},
			{
				path: 'spinner',
				element: (
					<Suspense
						fallback={<div style={{ fontSize: FONT_SIZE }}>Loading...</div>}
					>
						<SpinnerPage />,
					</Suspense>
				),
			},

			{
				path: 'notification',
				element: (
					<Suspense
						fallback={<div style={{ fontSize: FONT_SIZE }}>Loading...</div>}
					>
						<NotificationPage />,
					</Suspense>
				),
			},
			{
				path: 'drag-and-drop',
				element: (
					<Suspense
						fallback={<div style={{ fontSize: FONT_SIZE }}>Loading...</div>}
					>
						<DragAndDropPage />,
					</Suspense>
				),
			},
			{
				path: 'form',
				element: (
					<Suspense
						fallback={<div style={{ fontSize: FONT_SIZE }}>Loading...</div>}
					>
						<FormPage />,
					</Suspense>
				),
			},
			{
				path: 'table',
				element: (
					<Suspense
						fallback={<div style={{ fontSize: FONT_SIZE }}>Loading...</div>}
					>
						<TablePage />,
					</Suspense>
				),
			},
		],
	},
];

export const router = createBrowserRouter(routes);
