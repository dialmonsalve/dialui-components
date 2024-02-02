import styles from '@/styles/components/UI/iconSpinner.module.scss';
import type { SpinnerType } from '@/types';

interface Props {
	spinnerType?: SpinnerType;
	isIcon?: false;
}
const IconSpinner = ({ spinnerType = 'mice' }: Props) => {
	if (spinnerType === 'mice')
		return (
			<div className={styles['icon-spinner']}>
				<div className={styles['icon-spinner__mice']}>
					<div className={styles['icon-spinner__mice--1']} />
					<div className={styles['icon-spinner__mice--2']} />
				</div>
			</div>
		);

	if (spinnerType === 'fleas') {
		return (
			<div className={styles['icon-spinner']}>
				<div className={styles['icon-spinner__fleas']}>
					<div className={styles['icon-spinner__fleas--1']} />
					<div className={styles['icon-spinner__fleas--2']} />
					<div className={styles['icon-spinner__fleas--3']} />
					<div className={styles['icon-spinner__fleas--4']} />
					<div className={styles['icon-spinner__fleas--5']} />
					<div className={styles['icon-spinner__fleas--6']} />
				</div>
			</div>
		);
	}

	if (spinnerType === 'circles') {
		return (
			<div className={styles['icon-spinner']}>
				<div className={styles['icon-spinner__circles']}>
					<div className={styles['icon-spinner__circles--1']} />
					<div className={styles['icon-spinner__circles--2']} />
					<div className={styles['icon-spinner__circles--3']} />
				</div>
			</div>
		);
	}
	if (spinnerType === 'eclipse')
		return (
			<div className={styles['icon-spinner']}>
				<div className={styles['icon-spinner__eclipse']}>
					<div className={styles['icon-spinner__eclipse--1']} />
				</div>
			</div>
		);

	if (spinnerType === 'squares')
		return (
			<div className={styles['icon-spinner']}>
				<div className={styles['icon-spinner__squares']}>
					<div className={styles['icon-spinner__squares--1']} />
					<div className={styles['icon-spinner__squares--2']} />
				</div>
			</div>
		);
};

export default IconSpinner;
