import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import NotFoundPage from '../pages/notFound';
import { FormComponentPages } from './FormComponentPages';
import { UIComponentPages } from './UIComponentPages';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [
			...UIComponentPages,
			...FormComponentPages
		],
	},
];

export const router = createBrowserRouter(routes);
