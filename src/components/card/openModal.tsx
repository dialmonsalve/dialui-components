import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';

function openModal() {
	const Modal = lazy(() => import('./LazyModal'));
	const modalDiv = document.createElement('div');
	modalDiv.id = 'modal';
	document.body.appendChild(modalDiv);
	const root = createRoot(modalDiv);

	root.render(
		<Suspense fallback={<></>}>
			<Modal
				root={root}
				animation='jumpToDown'
				type='error'
				description='Esto es una descripción de prueba'
				title='Desea eliminar?'
			/>
		</Suspense>,
	);
}

export default openModal;
