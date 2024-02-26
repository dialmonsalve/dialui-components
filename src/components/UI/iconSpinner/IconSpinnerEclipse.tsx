import styles from '../../../styles/components/iconSpinner/eclipse.module.css';

import { type IconSpinnerSize } from '../../../types';

interface Props {
	size?: IconSpinnerSize;
}

const IconSpinnerEclipse = ({ size = 'sm' }: Props) => {
	return (
		<div className={`${styles.eclipse} ${styles[size]}`}>
			<div className={`${styles['eclipse--1']}`} />
		</div>
	);
};

export default IconSpinnerEclipse;
