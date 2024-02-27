import  Button  from '../../components/UI/buttons/Button';
import openAlert from '../../components/UI/alert/openAlert';
import Highlighter from '../components/Highlighter';
import { ListItems } from '../components/ListItems';
import useAppOptions from '../hooks/context/useAppOptions';

import alertPage from '../const/alertPage';

function AlertPage() {
	const { lang } = useAppOptions();

	const handleClick = () => {
		const typeMessage =
			lang === 'en' ? 'User has been deleted' : 'Usuario eliminado con éxito';
		openAlert({
			message: typeMessage,
			type: 'info',
			sideX:"left"
		});
	};

	const p = "Este componente te permitirá darle una respuesta visual al usuario final cuando complete una acción. La alerta se carga de manera perezosa"

	const pEng= "This component will allow you to give visual feedback to the end user when they complete an action. Alert loads lazily"

	return (
		<section>
			<h1 className='h1'>alert</h1>

			<p className='p'>{lang === "es" ? p : pEng}</p>

			<article className='article'>
				<h3 className='h3'>default alert</h3>

				<Button
					onClick={handleClick}
					backgroundColor='orange-500'
					borderRadius='r-3'
					button='ripple'
				>
					{lang === 'en' ? 'show me!' : 'muéstrame'}
				</Button>

				<Highlighter>
					{`import { openAlert } from "dialui-components"

function MyComponent(){

const handleClick = () => {
	openAlert({
		message: "Share these components",
		type: 'info',
	})
}

return (
		<Button onClick={ handleClick } >	click </Button>
	)
}`}
				</Highlighter>
			</article>

			<article>
				<h4 className='h3'>Default Props:</h4>
				<ListItems items={alertPage.DEFAULT_PROPS_DOM} />
			</article>

			<article>
				<h4 className='h3'>Props:</h4>
				<ListItems items={alertPage.ALL_PROPS_DOM} />
			</article>

		</section>
	);
}

export default AlertPage;
