import Button from '../../components/UI/buttons/Button';
import openAlert from '../../components/UI/alert/openAlert';
import Highlighter from '../components/Highlighter';
import { ListItems } from '../components/ListItems';
import useAppOptions from '../hooks/context/useAppOptions';

import language from '../lang/alert.json';

import alertPage from '../const/alertPage';
import { useState } from 'react';

function AlertPage() {
	const { lang } = useAppOptions();
	const [clickAlert, setClickAlert] = useState(false)

	const handleClick = () => {
		setClickAlert(true)
		const typeMessage = language[lang].message;
		openAlert({
			message: typeMessage,
			type: 'info',
		});
		setTimeout(() => {
			setClickAlert(false)
		}, 2500);
	};

	return (
		<section>
			<h1 >alert</h1>

			<p>{language[lang].p1}</p>

			<article >
				<h3>default alert</h3>

				<Button
					onClick={handleClick}
					backgroundColor='orange-500'
					borderRadius='r-3'
					button='ripple'
					disabled={clickAlert}
				>
					{language[lang].button}
				</Button>

				<Highlighter>
					{`import { openAlert } from "dialui-components";

function MyComponent(){

const handleClick = () => {
	openAlert({
		message: "Share these components",
		type: 'info',
	})
};

return (
		<Button onClick={ handleClick } >	click </Button>
	)
}`}
				</Highlighter>
			</article>

			<article>
				<h4>Default Props:</h4>
				<ListItems items={alertPage.DEFAULT_PROPS_DOM} />
			</article>

			<article>
				<h4>Props:</h4>
				<ListItems items={alertPage.ALL_PROPS_DOM} />
			</article>
		</section>
	);
}

export default AlertPage;
