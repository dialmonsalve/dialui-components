import { Suspense, lazy } from 'react';
import { Skeleton } from '../components/Skeleton';

const CheckboxPage = lazy(() => import('../pages/checkbox'));
const InputPage = lazy(() => import('../pages/input'));
const InputTagsPage = lazy(() => import('../pages/inputTags'));
const SelectPage = lazy(() => import('../pages/select'));
const TextareaPage = lazy(() => import('../pages/textarea'));

export const FormComponentPages = [
	{
		path: 'checkbox',
		element: (
			<Suspense fallback={<Skeleton/>}>
				<CheckboxPage />
			</Suspense>
		),
	},
	{
		path: 'input',
		element: (
			<Suspense fallback={<Skeleton/>}>
				<InputPage />
			</Suspense>
		),
	},
	{
		path: 'input-tags',
		element: (
			<Suspense fallback={<Skeleton/>}>
				<InputTagsPage />
			</Suspense>
		),
	},
	{
		path: 'select',
		element: (
			<Suspense  fallback={<Skeleton/>}>
				<SelectPage />
			</Suspense>
		),
	},
	{
		path: 'textarea',
		element: (
			<Suspense  fallback={<Skeleton/>}>
				<TextareaPage />
			</Suspense>
		),
	},
];
