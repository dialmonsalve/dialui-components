import { Header } from '../components/layout/Header';
import { Sidebar } from '../components/layout/Sidebar';
import useAppOptions from '../hooks/context/useAppOptions';
import styles from "../devStyles/components/notFound.module.scss"
import NotFound from '../components/NotFound';
import language from '../lang/lang.json';

function NotFoundPage() {
const { theme,  lang} = useAppOptions();	
	return (
		<>
			<Sidebar />
			<div className={`${styles[theme]} ${styles["container-not-found"]}`} >
				<Header />
				<main className={`${styles[theme]} ${styles["not-found"]}`}>
					<h1>{language[lang].notFound.h1}</h1>
					<div className={styles.img}>
						<NotFound />
						</div>	
				</main>
			</div>
		</>
	);
}

export default NotFoundPage;
