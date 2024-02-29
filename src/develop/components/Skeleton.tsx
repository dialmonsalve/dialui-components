import useAppOptions from '../../develop/hooks/context/useAppOptions';
import styles from '../devStyles/components/skeleton.module.scss';

export const Skeleton = () => {
	const { theme } = useAppOptions();

	return (
		<section className={`${styles[theme]} ${styles.section}`}>
			<h1 className={`${styles[theme]} ${styles.h1}`} />
			<p className={`${styles[theme]} ${styles.p}`} />
			<article className={`${styles[theme]} ${styles.article}`} />
			<article className={`${styles[theme]} ${styles.article}`} />
			<article className={`${styles[theme]} ${styles.article}`} />
		</section>
	);
};
