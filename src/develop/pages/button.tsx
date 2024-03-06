import Highlighter from '../components/Highlighter';
import { Button } from '../../';

import useAppOptions from '../hooks/context/useAppOptions';
import { ListItems } from '../components/ListItems';

import buttonsPage from '../constants/buttonsPage';
import language from '../lang/buttons.json';

function ButtonSlideDownPage() {
	const { lang } = useAppOptions();

	return (
		<section>
			<h1>{language[lang].h1}</h1>

			<p>{language[lang].p1}</p>

			<article>
				<h3>{language[lang].h31}</h3>

				<Button backgroundColor='blue-300'>default</Button>

				<Highlighter>
					{`import { Button, ButtonBeat, ButtonRipple, ButtonSquares } from "dialui-components";

export const MyComponent=()=> {
  return (
    <Button> default </Button>
  );
}
`}
				</Highlighter>
			</article>
			<article>
				<h4>Default Props:</h4>
				<ListItems items={buttonsPage.DEFAULT_PROPS_DOM} />
			</article>

			<article>
				<h4>Props:</h4>
				<ListItems items={buttonsPage.ALL_PROPS_DOM} />
			</article>

			<article>
				<h4>ButtonType</h4>
				<p>{language[lang].propButton}</p>
				<ListItems items={buttonsPage.BUTTON_DOM} />
			</article>

			<article>
				<h4>Colors:</h4>
				<p>{language[lang].propColor}</p>
				<ListItems items={buttonsPage.BACKGROUND_COLOR_DOM} />
			</article>

			<article>
				<h4>Size</h4>
				<p> {language[lang].propSize}</p>
				<ListItems items={buttonsPage.SIZE_DOM} />
			</article>

			<article>
				<h4>Radius</h4>
				<p> {language[lang].propRadius}</p>
				<ListItems items={buttonsPage.RADIUS_DOM} />
			</article>

			<article>
				<h4>spinnerType</h4>
				<p> {language[lang].propSpinnerType}</p>
				<ListItems items={buttonsPage.ICON_SPINNER_DOM} />
			</article>

			<article>
				<h4>{language[lang].h41} </h4>
				<ul>
					<li>- hasSpinner: {language[lang].propHasSpinner}</li>
					<li>- isLoading: {language[lang].propIsLoading}</li>
					<li>- disabled: {language[lang].propDisabled}</li>
					<li>- initialAnimation: {language[lang].propHasInitialAnimation}</li>
					<li>- textTransform: {language[lang].propTransform}</li>
					<li>- style: {language[lang].styleProp}</li>
				</ul>
			</article>
			<p>{language[lang].note}</p>
			<p>{language[lang].summary}</p>

			<article>
				<h4>{language[lang].h42}</h4>
				<div>
					<p>ripple Button:</p>
					<Button
						button='ripple'
						borderRadius='r-3'
						backgroundColor='purple-300'
						size='sm-200'
						textTransform='uppercase'
						hasInitialAnimation
					>
						click
					</Button>
				</div>
				<div>
					<p>Squares Button:</p>
					<Button
						button='squares'
						borderRadius='r-3'
						backgroundColor='outline-red'
						size='sm-200'
						textTransform='uppercase'
						hasInitialAnimation
					>
						click
					</Button>
				</div>

				<div>
					<p>beat Button:</p>
					<Button
						button='beat'
						borderRadius='r-3'
						backgroundColor='green-300'
						size='sm-300'
						textTransform='uppercase'
						hasInitialAnimation
					>
						click
					</Button>
				</div>

				<div>
					<p>{language[lang].pIconSpinner}</p>
					<Button
						borderRadius='r-3'
						size='sm-100'
						textTransform='uppercase'
						hasSpinner
						isLoading
					>
						click
					</Button>
				</div>
			</article>
		</section>
	);
}

export default ButtonSlideDownPage;
