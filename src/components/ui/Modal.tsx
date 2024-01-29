import { useModal } from '@/hooks/context';
import { Button } from './';
import { Info, Danger, Success, Warning } from '../icons';
import { HASH } from '@/const';

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
	const { setBtnYesNo, setBtnOk, closeModal, isOpenModal } = useModal();

	const handleContentClick = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		e.stopPropagation(); // Stop event propagation
	};

	const handleBtnYesNo = (res: 'yes' | 'no') => {
		setBtnYesNo(res);
		closeModal();
	};

	const handleBtnOk = () => {
		setBtnOk();
		closeModal();
	};

	const classOpenModal = isOpenModal
		? `modal-show-${animation}${HASH}`
		: `modal-hide-${animation}${HASH}`;

	return (
		<div
			{...props}
			onClick={closeModal}
			className={`modal${HASH} ${classOpenModal}`}
		>
			<div
				onClick={handleContentClick}
				className={`modal${HASH}__container modal${HASH}__${type}`}
			>
				<span className={`modal${HASH}__close`} onClick={closeModal}>
					X
				</span>
				<div className={`modal${HASH}__content`}>
					<div className={`modal${HASH}__content--cont-img`}>
						{type === 'info' && (
							<Info className={`modal${HASH}__content--img`} />
						)}
						{type === 'error' && (
							<Danger className={`modal${HASH}__content--img`} />
						)}
						{type === 'success' && (
							<Success className={`modal${HASH}__content--img`} />
						)}
						{type === 'warning' && (
							<Warning className={`modal${HASH}__content--img`} />
						)}
					</div>

					<h4 className={`modal${HASH}__content--title modal${HASH}__${type}--title`}>
						{title}
					</h4>

					<p className={`modal${HASH}__content--description`}>{description}</p>
					<div className={`modal${HASH}__buttons`}>
						{type === 'success' || type === 'info' ? (
							<>
								<Button
									buttonStyle='ripple'
									backgroundColor='outline-green'
									radius='radius-2'
									size='w-50'
									color='white'
									onClick={handleBtnOk}
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
									onClick={() => handleBtnYesNo('yes')}
								>
									YES
								</Button>
								<Button
									buttonStyle='ripple'
									backgroundColor='outline-green'
									radius='radius-2'
									size='w-100'
									color='white'
									onClick={() => handleBtnYesNo('no')}
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
