import styles from '../../../styles/components/iconSpinner/fleas.module.css';

import { type IconSpinnerSize } from '../../../types';

interface Props {
	size?: IconSpinnerSize;
}

const IconsSpinnerFleas = ({ size = 'sm' }: Props) => {
	return (
		<span className={`${styles['fleas']} ${styles[`fleas__${size}`]}`}>
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
