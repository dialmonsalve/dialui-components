import styles from '../../../styles/components/iconSpinner/squares.module.css';

import { type IconSpinnerSize } from '../../../types';

interface Props {
	size?: IconSpinnerSize;
}

const IconSpinnerSquares = ({ size = 'sm' }: Props) => {
	return (
		<span className={styles.squares}>
			<span className={`${styles['squares--1']} ${styles[size]}`} />
			<span className={`${styles['squares--2']} ${styles[size]}`} />
		</span>
	);
};

export default IconSpinnerSquares;
