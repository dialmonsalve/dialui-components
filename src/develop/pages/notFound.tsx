import { Header } from '../components/layout/Header';
import { Sidebar } from '../components/layout/Sidebar';
import useAppOptions from '../hooks/context/useAppOptions';
import styles from '../devStyles/pages/notFound.module.scss';
import NotFound from '../components/icons/NotFound';
import language from '../lang/lang.json';

function NotFoundPage() {
	const { theme, lang } = useAppOptions();
	return (
		<>
			<Sidebar />
			<div className={`${theme} container`}>
				<Header />
				<main className={`${theme} main`}>
					<section className={`${styles['not-found']}`}>
						<h1 className='h1' >{language[lang].notFound.h1}</h1>
						<div className={styles.img}>
							<NotFound />
						</div>
					</section>
				</main>
			</div>
		</>
	);
}

export default NotFoundPage;
