import { type SpinnerSize } from '../../../types';

import styles from '@/prodStyles/iconSpinner/fleas.module.css';

interface Props {
	size?: SpinnerSize;
}

const IconsSpinnerFleas = ({ size = 'sm' }: Props) => {
	return (
		<span className={styles.fleas}>
			<span className={`${styles['fleas--1']} ${styles[size]}`} />
			<span className={`${styles['fleas--2']} ${styles[size]}`} />
			<span className={`${styles['fleas--3']} ${styles[size]}`} />
			<span className={`${styles['fleas--4']} ${styles[size]}`} />
			<span className={`${styles['fleas--5']} ${styles[size]}`} />
			<span className={`${styles['fleas--6']} ${styles[size]}`} />
		</span>
	);
};

export default IconsSpinnerFleas;
