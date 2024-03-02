import { useRef } from 'react';

import ButtonNormal from '../buttons/ButtonNormal';
import { Info, Danger, Success, Warning } from '../../icons';

import type { Animation, MessageType } from '../../../types';

import styles from '../../../styles/components/UI/modal.module.css';

interface Props {
	description: string;
	animation?: Animation;
	title: string;
	type: MessageType;
	handleModalAnswer?: (answer: 'yes' | 'no' | 'ok' | 'cancel') => void;
}

const Modal = ({
	description,
	type,
	title,
	animation = 'fadeInOut',
	handleModalAnswer,
}: Props) => {
	const ref = useRef<HTMLDivElement>(null);

	const setModalResponse = (answer: 'yes' | 'no' | 'ok' | 'cancel') => {
		handleModalAnswer ? handleModalAnswer(answer) : false;
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
			data-testId='modal'
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

					<h4 className={`${styles['title']} ${styles[`${type}--title`]}`}>
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
								textTransform='uppercase'
							>
								OK
							</ButtonNormal>
						) : (
							<>
								<ButtonNormal
									backgroundColor='white-100'
									borderRadius='r-2'
									size='vw-100'
									onClick={() => setModalResponse('yes')}
									textTransform='uppercase'
								>
									YES
								</ButtonNormal>
								<ButtonNormal
									backgroundColor='green-400'
									borderRadius='r-2'
									size='vw-100'
									onClick={() => setModalResponse('no')}
									textTransform='uppercase'
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
