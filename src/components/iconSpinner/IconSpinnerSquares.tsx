import { type SpinnerSize } from '../../types';

import styles from './iconSpinnerSquares.module.scss';

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
