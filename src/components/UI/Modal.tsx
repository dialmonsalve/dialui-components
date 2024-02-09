import { useModal } from '@/hooks/context';
import { Button } from '.';
import { Info, Danger, Success, Warning } from '../icons';

import styles from '@/styles/components/UI/modal.module.scss';

import type { Animation, MessageType } from '@/types';

interface Props {
	description?: string;
	animation?: Animation;
	title?: string;
	type: MessageType;
}

const Modal = ({
	description,
	type,
	title = type,
	animation = 'fade-in-out',
	...props
}: Props) => {
	const { closeModal, isOpenModal, handleModalResponse } = useModal();

	const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation(); // Stop event propagation
	};

	const setModalResponse = (res: 'yes' | 'no' | 'ok') => {
		handleModalResponse(res);
		closeModal()
	};

	const classOpenModal = isOpenModal
		? styles[`modal-show-${animation}`]
		: styles[`modal-hide-${animation}`];

	return (
		<div
			{...props}
			onClick={closeModal}
			className={`${styles.modal} ${classOpenModal}`}
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
					<div className={styles.modal__buttons}>
						{type === 'success' || type === 'info' ? (
							<>
								<Button
									buttonStyle='ripple'
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
									buttonStyle='ripple'
									backgroundColor='outline-red'
									radius='radius-2'
									size='w-100'
									color='white'
									onClick={() => setModalResponse('yes')}
								>
									YES
								</Button>
								<Button
									buttonStyle='ripple'
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
