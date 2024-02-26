import styles from '../../../styles/components/iconSpinner/dots.module.css';

import { type IconSpinnerSize } from '../../../types';

interface Props {
	size?: IconSpinnerSize;
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
