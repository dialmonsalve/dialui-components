import { useRef } from 'react';

import { Info, Danger, Success, Warning } from '../../icons';

import type { Animation, MessageType } from '../../types';

import styles from './modal.module.scss';
import buttons from './buttons.module.scss';

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
							<>
								<button
									type='button'
									className={`${buttons.btn} ${buttons['outline-green']}`}
									onClick={() => setModalResponse('ok')}
								>
									OK
								</button>
							</>
						) : (
							<>
								<button
									type='button'
									className={`${buttons.btn} ${buttons.white}`}
									onClick={() => setModalResponse('yes')}
								>
									YES
								</button>
								<button
									type='button'
									className={`${buttons.btn} ${buttons.green}`}
									onClick={() => setModalResponse('no')}
								>
									not
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Modal;
