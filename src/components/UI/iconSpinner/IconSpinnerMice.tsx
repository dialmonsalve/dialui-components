import styles from '../../../styles/components/iconSpinner/mice.module.css';

import { type SpinnerSize } from '../../../types';

interface Props {
	size?: SpinnerSize;
}

const IconSpinnerMice= ({ size = 'sm' }: Props) => {
	return (
		<span className={styles.mice} >
			<span className={`${styles['mice--1']} ${styles[size]}`} />
			<span className={`${styles['mice--2']} ${styles[size]}`} />
		</span>
	);
};

export default IconSpinnerMice;
