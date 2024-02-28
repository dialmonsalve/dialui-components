import Highlighter from '../components/Highlighter';
import { ListItems } from '../components/ListItems';
import useAppOptions from '../hooks/context/useAppOptions';

import language from '../lang/icon-spinner.json';

import iconPage from '../const/iconSpinnerPage';
import IconSpinner from '../../components/UI/iconSpinner/IconSpinner';

function IconSpinnerPage() {
	const { lang } = useAppOptions();
	return (
		<section>
			<h1>icon spinner</h1>
			<p>{language[lang].p1}</p>

			<article>
				<h3>{language[lang].defaultSpinner}</h3>
				<IconSpinner iconSpinner='eclipse' size='sm' />
				<Highlighter>
					{`import { IconSpinner } from "dialui-components"

function MyComponent(){

return (
		<IconSpinner/>
	)
}`}
				</Highlighter>
			</article>

			<article>
				<h4>Default Props:</h4>
				<ListItems items={iconPage.DEFAULT_PROPS_DOM} />
			</article>

			<article>
				<h4>Props:</h4>
				<ListItems items={iconPage.PROPS_DOM} />
			</article>

			<article>
				<h4>SpinnerType:</h4>
				<p>{language[lang].propSpin}</p>
				<ListItems items={iconPage.SPINNER_TYPE_DOM} />
			</article>

			<article>
				<h4>SpinnerSize:</h4>
				<p>{language[lang].propSpinSize}</p>
				<ListItems items={iconPage.SPINNER_SIZE_DOM} />
			</article>

			<article>
				<h4>{language[lang].h41}</h4>
				<p>dots</p>
				<IconSpinner iconSpinner='dots' size='md' />
				<p>fleas</p>
				<IconSpinner iconSpinner='fleas' size='md' />
				<p>mice</p>
				<IconSpinner iconSpinner='mice' size='md' />
				<p>squares</p>
				<IconSpinner iconSpinner='squares' size='md' />
			</article>
		</section>
	);
}

export default IconSpinnerPage;
