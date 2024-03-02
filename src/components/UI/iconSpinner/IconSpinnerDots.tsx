import { type SpinnerSize } from '../../../types';

import styles from '@/prodStyles/iconSpinner/dots.module.css';

interface Props {
	size?: SpinnerSize;
}
const IconSpinnerDots = ({ size = 'sm' }: Props) => {
	return (
		<span className={styles.dots}>
			<span className={`${styles['dots--1']} ${styles[size]}`} />
			<span className={`${styles['dots--2']} ${styles[size]}`} />
			<span className={`${styles['dots--3']} ${styles[size]}`} />
		</span>
	);
};

export default IconSpinnerDots;
