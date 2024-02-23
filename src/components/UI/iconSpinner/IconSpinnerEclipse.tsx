import styles from '../../../styles/components/iconSpinner/eclipse.module.css';

import { type IconSpinnerSize } from '../../../types';

interface Props {
	size?: IconSpinnerSize;
}

const IconSpinnerEclipse = ({ size = 'sm' }: Props) => {
	return (
		<div className={`${styles['eclipse']} ${styles[`eclipse__${size}`]}`}>
			<div className={`${styles['eclipse--1']} ${styles[size]}`} />
		</div>
	);
};

export default IconSpinnerEclipse;
