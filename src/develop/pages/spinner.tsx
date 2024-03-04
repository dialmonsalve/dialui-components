import { useState } from 'react';
import Highlighter from '../components/Highlighter';
import { Button, Select, Spinner } from '../../';

import useAppOptions from '../hooks/context/useAppOptions';
import { ListItems } from '../components/ListItems';

import spinnerPage from '../const/spinnerPage';
import language from '../lang/spinner.json';
import { SpinnerType } from '../../app/types';

function SpinnerPage() {
	const [openSpinner, setOpenSpinner] = useState(false);
	const [animation, setAnimation] = useState('halfSpinner');
	const { lang } = useAppOptions();

	const handleSpinner = () => {
		setOpenSpinner(true);

		setTimeout(() => {
			setOpenSpinner(false);
		}, 2000);
	};

	return (
		<section>
			{openSpinner && <Spinner spinner={animation as SpinnerType} />}
			<h1>spinner</h1>
			<p>{language[lang].p1}</p>

			<article>
				<h2>DEMO</h2>

				<div style={{ width: '25rem' }}>
					<Select
						options={spinnerPage.OPTION_SPINNER}
						onChange={setAnimation}
						selectState={animation}
					/>
				</div>

				<Button
					backgroundColor='yellow-200'
					borderRadius='r-4'
					textTransform='uppercase'
					onClick={handleSpinner}
				>
					click
				</Button>
			</article>

			<article>
				<Highlighter>
					{`import { Spinner } from "dialui-components";

export const  MyComponent = () => {

return (
	<Spinner />
	)
}`}
				</Highlighter>
			</article>

			<article>
				<h4>Default Props:</h4>
				<ListItems items={spinnerPage.DEFAULT_PROPS_DOM} />
			</article>

			<article>
				<h4>Props:</h4>
				<ListItems items={spinnerPage.ALL_PROPS_DOM} />
			</article>
		</section>
	);
}

export default SpinnerPage;
