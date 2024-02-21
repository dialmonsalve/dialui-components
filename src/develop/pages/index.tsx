import Highlighter from '../components/Highlighter';

import lang from '../lang/lang.json';

function HomePage() {
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
		<>
			<h1 className='h1'>{lang.en.home}</h1>
			<Highlighter>{codeString}</Highlighter>
		</>
	);
}

export default HomePage;
