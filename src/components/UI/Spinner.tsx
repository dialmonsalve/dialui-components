
import { HalfRounded } from '../icons/HalfRounded';
import { Needle } from '../icons/Needle';
import { LP } from '../icons/LP';

import styles from '@/styles/components/UI/spinner.module.scss';

import { SpinnerType } from '@/types';
import Mientras from './Mientras';

interface Props {
	spinnerType?: SpinnerType | 'half-spinner' | 'lp';
}

const Spinner = ({ spinnerType }: Props) => {

	console.log(styles['spinner__content--loading']);
	
	
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
					<div className={styles['icon-spinner__mice']}>
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
					<Mientras spinnerType={spinnerType} />
					<p className={styles['spinner__content--loading']}>Loading ...</p>
				</div>
			</div>
		);
	}
};

export default Spinner;
