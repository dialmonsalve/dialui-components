import { HASH } from '@/const';
import type { SpinnerType } from '@/types';

interface Props {
	spinnerType?: SpinnerType;
}
const IconSpinner = ({ spinnerType = 'mouses' }: Props) => {
	if (spinnerType === 'mouses')
		return (
			<div className={`icon-spinner${HASH}`}>
				<div className={`icon-spinner${HASH}__mouses`}>
					<div className={`icon-spinner${HASH}__mouses--1`} />
					<div className={`icon-spinner${HASH}__mouses--2`} />
				</div>
			</div>
		);

	if (spinnerType === 'fleas') {
		return (
			<div className={`icon-spinner${HASH}`}>
				<div className={`icon-spinner${HASH}__fleas`}>
					<div className={`icon-spinner${HASH}__fleas--1`} />
					<div className={`icon-spinner${HASH}__fleas--2`} />
					<div className={`icon-spinner${HASH}__fleas--3`} />
					<div className={`icon-spinner${HASH}__fleas--4`} />
					<div className={`icon-spinner${HASH}__fleas--5`} />
					<div className={`icon-spinner${HASH}__fleas--6`} />
				</div>
			</div>
		);
	}

	if (spinnerType === 'circles') {
		return (
			<div className={`icon-spinner${HASH}`}>
				<div className={`icon-spinner${HASH}__circles`}>
					<div className={`icon-spinner${HASH}__circles--1`} />
					<div className={`icon-spinner${HASH}__circles--2`} />
					<div className={`icon-spinner${HASH}__circles--3`} />
				</div>
			</div>
		);
	}
	if (spinnerType === 'eclipse')
		return (
			<div className={`icon-spinner${HASH}`}>
				<div className={`icon-spinner${HASH}__eclipse`}>
					<div className={`icon-spinner${HASH}__eclipse--1`} />
				</div>
			</div>
		);

	if (spinnerType === 'squares')
		return (
			<div className={`icon-spinner${HASH}`}>
				<div className={`icon-spinner${HASH}__squares`}>
					<div className={`icon-spinner${HASH}__squares--1`} />
					<div className={`icon-spinner${HASH}__squares--2`} />
				</div>
			</div>
		);
};

export default IconSpinner;
