import { useRef } from 'react';

import { Info, Danger, Success, Warning } from '../icons';

import styles from '@/styles/components/UI/modal.module.scss';

import type { Animation, MessageType } from '@/types';
import { type Root } from 'react-dom/client';

interface Props {
	description?: string;
	animation?: Animation;
	title?: string;
	type: MessageType;
	root: Root;
}

const Modal = ({
	description,
	type,
	title = type,
	animation = 'fade-in-out',
	root,
	...props
}: Props) => {
	const ref = useRef<HTMLDivElement>(null);

	function callback(e: AnimationEvent) {
		root.unmount();
		document.querySelector('#modal')?.remove();
		ref.current?.removeEventListener('animationend', callback);
	}

	function closeModal() {
		ref.current?.classList.add(`${styles[`modal-hide-${animation}`]}`);
		ref.current?.addEventListener('animationend', callback, { once: true });
	}

	const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation(); // Stop event propagation
	};

	return (
		<div
			{...props}
			onClick={closeModal}
			className={`${styles.modal} ${styles[`modal-show-${animation}`]}`}
			ref={ref}
		>
			<div
				onClick={handleContentClick}
				className={`${styles['modal__container']} ${styles[`modal__${type}`]}`}
			>
				<span className={styles.modal__close} onClick={closeModal}>
					X
				</span>
				<div className={styles.modal__content}>
					<div className={styles['modal__content--cont-img']}>
						{type === 'info' && (
							<Info className={styles['modal__content--img']} />
						)}
						{type === 'error' && (
							<Danger className={styles['modal__content--img']} />
						)}
						{type === 'success' && (
							<Success className={styles['modal__content--img']} />
						)}
						{type === 'warning' && (
							<Warning className={styles['modal__content--img']} />
						)}
					</div>

					<h4
						className={`${styles['modal__content--title']} ${
							styles[`modal__${type}--title`]
						}`}
					>
						{title}
					</h4>

					<p className={styles['modal__content--description']}>{description}</p>
				</div>
			</div>
		</div>
	);
};
export default Modal;
