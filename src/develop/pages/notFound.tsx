import { Header } from '../components/layout/Header';
import { Sidebar } from '../components/layout/Sidebar';
import useAppOptions from '../hooks/context/useAppOptions';
import styles from '../devStyles/pages/notFound.module.scss';
import NotFound from '../components/icons/NotFound';

function NotFoundPage() {
	const { theme, lang } = useAppOptions();
	return (
		<div className='container' >
			<Sidebar />
		
				<Header />
				<main className={`main ${theme}`}>
					<section className={`${styles['not-found']}`}>
						<h1>
							{lang === 'en'
								? '404️ Página no encontrada'
								: '404 page not found'}
						</h1>
						<div className={styles.img}>
							<NotFound />
						</div>
					</section>
				</main>
		</div>
	);
}

export default NotFoundPage;
