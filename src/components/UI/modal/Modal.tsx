import { useRef } from 'react';

import { Info, Danger, Success, Warning } from '../../icons';

import styles from '../../../styles/components/UI/modal.module.css';

import type { Animation, MessageType } from '../../../types';
import ButtonNormal from '../buttons/ButtonNormal';

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
				className={`${styles.container} ${styles[type]}`}
			>
				<span
					className={styles.close}
					onClick={() => setModalResponse('cancel')}
				>
					X
				</span>
				<div className={styles.content}>
					<div className={styles['container-img']}>
						{type === 'info' && <Info className={styles['img']} />}
						{type === 'error' && <Danger className={styles['img']} />}
						{type === 'success' && <Success className={styles['img']} />}
						{type === 'warning' && <Warning className={styles['img']} />}
					</div>

					<h4
						className={`${styles['title']} ${styles[`${type}--title`]}`}
					>
						{title}
					</h4>

					<p className={styles['description']}>{description}</p>
					<div className={styles.buttons}>
						{type === 'success' || type === 'info' ? (
							<ButtonNormal
								backgroundColor='outline-green'
								borderRadius='r-2'
								size='vw-100'
								onClick={() => setModalResponse('ok')}
							>
								OK
							</ButtonNormal>
						) : (
							<>
								<ButtonNormal
									backgroundColor='outline-white'
									borderRadius='r-2'
									size='vw-100'
									onClick={() => setModalResponse('yes')}
								>
									YES
								</ButtonNormal>
								<ButtonNormal
									backgroundColor='outline-green'
									borderRadius='r-2'
									size='vw-100'
									onClick={() => setModalResponse('no')}
								>
									NOT
								</ButtonNormal>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Modal;
