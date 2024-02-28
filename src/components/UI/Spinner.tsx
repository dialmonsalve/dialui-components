import IconSpinnerSquares from './iconSpinner/IconSpinnerSquares';
import IconSpinnerDots from './iconSpinner/IconSpinnerDots';
import IconSpinnerEclipse from './iconSpinner/IconSpinnerEclipse';
import IconsSpinnerFleas from './iconSpinner/IconsSpinnerFleas';
import IconSpinnerMice from './iconSpinner/IconSpinnerMice';

import { HalfRounded, Needle, LP } from '../icons/';

import { SpinnerType } from '../../types';
import styles from '../../styles/components/UI/spinner.module.css';

interface Props {
	spinner?: SpinnerType | 'half-spinner' | 'lp';
}

const Spinner = ({ spinner = 'half-spinner' }: Props) => {
	if (spinner === 'half-spinner') {
		return (
			<div className={styles.spinner}>
				<HalfRounded className={styles['spinner__half-spinner']} />

				<p className={styles['spinner__loading']}> Loading...</p>
			</div>
		);
	}
	if (spinner === 'lp') {
		return (
			<div className={styles['spinner']}>
				<div className={styles['spinner__lp']}>
					<div className={styles['spinner__needle']}>
						<Needle />
					</div>
					<div className={styles['spinner__lp-load']}>
						<LP />
					</div>
				</div>
				<p className={styles['spinner__loading']}>Loading ...</p>
			</div>
		);
	} else {
		if (spinner === 'squares') {
			return (
				<div className={styles['spinner']}>
					<IconSpinnerSquares size='lg' />
					<p className={styles['spinner__loading']}>Loading ...</p>
				</div>
			);
		}
		if (spinner === 'dots') {
			return (
				<div className={styles['spinner']}>
					<IconSpinnerDots size='lg' />
					<p className={styles['spinner__loading']}>Loading ...</p>
				</div>
			);
		}
		if (spinner === 'eclipse') {
			return (
				<div className={styles['spinner']}>
					<IconSpinnerEclipse size='lg' />
					<p className={styles['spinner__loading']}>Loading ...</p>
				</div>
			);
		}
		if (spinner === 'fleas') {
			return (
				<div className={styles['spinner']}>
					<IconsSpinnerFleas size='lg' />
					<p className={styles['spinner__loading']}>Loading ...</p>
				</div>
			);
		}
		if (spinner === 'mice') {
			return (
				<div className={styles['spinner']}>
					<IconSpinnerMice size='lg' />
					<p className={styles['spinner__loading']}>Loading ...</p>
				</div>
			);
		}
	}
};

export default Spinner;
