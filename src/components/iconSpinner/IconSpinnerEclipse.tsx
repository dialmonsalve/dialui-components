import { type SpinnerSize } from '../../types';


import styles from './iconSpinnerEclipse.module.css';

interface Props {
	size?: SpinnerSize;
}

const IconSpinnerEclipse = ({ size = 'sm' }: Props) => {
	return (
		<div className={`${styles.eclipse} ${styles[size]}`}>
			<div className={`${styles['eclipse--1']}`} />
		</div>
	);
};

export default IconSpinnerEclipse;
