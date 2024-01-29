import { IconSpinner } from './';

import { HalfRounded } from '../icons/HalfRounded';
import { Needle } from '../icons/Needle';
import { LP } from '../icons/LP';

import { HASH } from '@/const';

import { SpinnerType } from '@/types';

interface Props {
	spinnerType?: SpinnerType | 'half-spinner' | 'lp';
}

const Spinner = ({ spinnerType }: Props) => {
	if (spinnerType === 'half-spinner') {
		return (
			<div className={`spinner${HASH}`}>
				<HalfRounded className={`spinner${HASH}__half-spinner`} />

				<p className={`spinner${HASH}__loading`}> Loading...</p>
			</div>
		);
	} else if (spinnerType === 'lp') {
		return (
			<div className={`spinner${HASH}`}>
				<div className={`spinner${HASH}__lp`}>
					<div className={`spinner${HASH}__needle`}>
						<Needle />
					</div>
					<div className={`icon-spinner${HASH}__mouses`}>
						<LP />
					</div>
					<p>Loading...</p>
				</div>
			</div>
		);
	} else {
		return (
			<div className={`spinner${HASH}`}>
				<div className={`spinner${HASH}__content`}>
					<IconSpinner spinnerType={spinnerType} />
					<p className={`spinner${HASH}__content--loading`}>Loading ...</p>
				</div>
			</div>
		);
	}
};

export default Spinner;
