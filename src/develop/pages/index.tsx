import Highlighter from '../components/Highlighter';
import useAppOptions from '../hooks/context/useAppOptions';

import language from '../lang/lang.json';

function HomePage() {
	const { lang } = useAppOptions();
	const codeString = `
	import { Button } from "dialui-components";
	
	<Button
		buttonStyle="ripple"
		backgroundColor="blue-200"
		size="sm-100"
		radius="radius-3"
		spinnerType="fleas"
		onClick={() => console.log("click")}
		isLoading
	>
		Send message
	</Button>
	`;
	return (
		<section className={`section-home`}>
			<h1 className='h1'>{language[lang].home.h1}</h1>

			<Highlighter language='shell'>{language[lang].home.install}</Highlighter>
			<Highlighter>{codeString}</Highlighter>
		</section>
	);
}

export default HomePage;
