import { useRef } from 'react';

import { Info, Danger, Success, Warning } from '../../icons';

import styles from '../../../styles/components/UI/modal.module.css';

import type { Animation, MessageType } from '../../../types';
import { Button } from '..';

interface Props {
	description?: string;
	animation?: Animation;
	title?: string;
	type: MessageType;
	handleModalResponse?: (res: 'yes' | 'no' | 'ok' | 'cancel') => void;
	dataid?: string;
}

const Modal = ({
	description,
	type,
	dataid = 'modal',
	title = type,
	animation = 'fade-in-out',
	handleModalResponse,
}: Props) => {
	const ref = useRef<HTMLDivElement>(null);

	const setModalResponse = (res: 'yes' | 'no' | 'ok' | 'cancel') => {
		handleModalResponse ? handleModalResponse(res) : false;
		closeModal();
	};

	function callback() {
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
			onClick={() => setModalResponse('cancel')}
			className={`${styles.modal} ${styles[`modal-show-${animation}`]}`}
			ref={ref}
			data-testid={dataid}
		>
			<div
				onClick={handleContentClick}
				className={`${styles['modal__container']} ${styles[`modal__${type}`]}`}
			>
				<span
					className={styles.modal__close}
					onClick={() => setModalResponse('cancel')}
				>
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
					<div className={styles.modal__buttons}>
						{type === 'success' || type === 'info' ? (
							<>
								<Button
									buttonStyle='normal'
									backgroundColor='outline-green'
									radius='radius-2'
									size='w-100'
									color='white'
									onClick={() => setModalResponse('ok')}
								>
									OK
								</Button>
							</>
						) : (
							<>
								<Button
									buttonStyle='normal'
									backgroundColor='outline-red'
									radius='radius-2'
									size='w-100'
									color='white'
									onClick={() => setModalResponse('yes')}
								>
									YES
								</Button>
								<Button
									buttonStyle='normal'
									backgroundColor='outline-green'
									radius='radius-2'
									size='w-100'
									color='white'
									onClick={() => setModalResponse('no')}
								>
									NOT
								</Button>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Modal;
