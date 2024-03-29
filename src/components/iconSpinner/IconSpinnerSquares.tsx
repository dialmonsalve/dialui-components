import { type SpinnerSize } from '../../app/types';

import styles from './iconSpinnerSquares.module.css';

interface Props {
	size?: SpinnerSize;
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
