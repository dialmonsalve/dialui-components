import { HalfRounded } from '../icons/HalfRounded';
import { Needle } from '../icons/Needle';
import { LP } from '../icons/LP';

import { SpinnerType } from '@/types';

import styles from '../../styles/components/UI/spinner.module.css';
import { IconSpinner } from '.';

interface Props {
	spinnerType?: SpinnerType | 'half-spinner' | 'lp';
}

const Spinner = ({ spinnerType }: Props) => {
	if (spinnerType === 'half-spinner') {
		return (
			<div className={styles.spinner}>
				<HalfRounded className={styles['spinner__half-spinner']} />

				<p className={styles['spinner__loading']}> Loading...</p>
			</div>
		);
	} else if (spinnerType === 'lp') {
		return (
			<div className={styles['spinner']}>
				<div className={styles['spinner__lp']}>
					<div className={styles['spinner__needle']}>
						<Needle />
					</div>
					<div className={styles['spinner__lp-load']}>
						<LP />
					</div>
					<p>Loading...</p>
				</div>
			</div>
		);
	} else {
		return (
			<div className={styles['spinner']}>
				<div className={styles['spinner__content']}>
					<IconSpinner spinnerType={spinnerType} spin={false} />
					<p className={styles['spinner__content--loading']}>Loading ...</p>
				</div>
			</div>
		);
	}
};

export default Spinner;
