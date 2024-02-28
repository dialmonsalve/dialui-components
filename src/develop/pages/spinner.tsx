import { useState } from 'react';
import Spinner from '../../components/UI/Spinner';
import Highlighter from '../components/Highlighter';
import { ListItems } from '../components/ListItems';
import spinnerPage from '../const/spinnerPage';
import Select from '../../components/form/Select';
import Button from '../../components/UI/buttons/Button';
import { SpinnerType } from '../../types';

import language from "../lang/spinner.json"
import useAppOptions from '../hooks/context/useAppOptions';

function SpinnerPage() {
	const [openSpinner, setOpenSpinner] = useState(false);
	const [animation, setAnimation] = useState<string | undefined>(
		'half-spinner',
	);
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

				<div style={{ zIndex: 2, width: '25rem' }}>
					<Select
						options={spinnerPage.OPTION_SPINNER}
						onChange={setAnimation}
						selectState={animation}
					/>
				</div>

				<Button
					backgroundColor='yellow-400'
					borderRadius='r-4'
					textTransform='uppercase'
					onClick={handleSpinner}
				>
					click
				</Button>
			</article>

			<article>
				<h3>default spinner</h3>

				<Highlighter>
					{`import { Spinner } from "dialui-components"

function MyComponent(){

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
