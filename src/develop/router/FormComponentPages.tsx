import { Suspense, lazy } from 'react';

const CheckboxPage = lazy(() => import('../pages/checkbox'));
const InputPage = lazy(() => import('../pages/input'));
const InputTagsPage = lazy(() => import('../pages/inputTags'));
const SelectPage = lazy(() => import('../pages/select'));
const TextareaPage = lazy(() => import('../pages/textarea'));

export const FormComponentPages = [
	{
		path: 'checkbox',
		element: (
			<Suspense fallback={<></>}>
				<CheckboxPage />
			</Suspense>
		),
	},
	{
		path: 'input',
		element: (
			<Suspense fallback={<></>}>
				<InputPage />
			</Suspense>
		),
	},
	{
		path: 'input-tags',
		element: (
			<Suspense fallback={<></>}>
				<InputTagsPage />
			</Suspense>
		),
	},
	{
		path: 'select',
		element: (
			<Suspense fallback={<></>}>
				<SelectPage />
			</Suspense>
		),
	},
	{
		path: 'textarea',
		element: (
			<Suspense fallback={<></>}>
				<TextareaPage />
			</Suspense>
		),
	},
];
