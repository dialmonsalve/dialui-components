import useAppOptions from '../hooks/context/useAppOptions';
import Button from '../../components/UI/buttons/Button';

import language from '../lang/buttons.json';
import Highlighter from '../components/Highlighter';
import { ListItems } from '../components/ListItems';
import buttonsPage from '../const/buttonsPage';

function ButtonSlideDownPage() {
	const { lang } = useAppOptions();

	return (
		<section>
			<h1 className='h1'>{language[lang].h1}</h1>

			<p className='p'>{language[lang].p1}</p>

			<article className='article'>
				<h3 className='h3'>{language[lang].h31}</h3>

				<Button>default</Button>

				<Highlighter>
					{`import { Button } from "dialui-components"

function MyComponent(){
	return (
		<Button >	default </Button>
		)
	}`}
				</Highlighter>
				
			</article>
			<article>
				<h4 className='h3'>Default Props:</h4>
				<ListItems items={buttonsPage.DEFAULT_PROPS_DOM} />
			</article>

			<article>
				<h4 className='h3'>Props:</h4>
				<ListItems items={buttonsPage.ALL_PROPS_DOM} />
			</article>

			<article>
				<h4 className='h3'>button:</h4>
				<p className='p'>{language[lang].propButton}</p>
				<ListItems items={buttonsPage.BUTTON_DOM} />
			</article>

			<article>
				<h4 className='h3'>Colors:</h4>
				<p className='p'>{language[lang].propColor}</p>
				<ListItems items={buttonsPage.BACKGROUND_COLOR_DOM} />
			</article>

			<article>
				<h4 className='h3'>Size</h4>
				<p className='p'> {language[lang].propSize}</p>
				<ListItems items={buttonsPage.SIZE_DOM} />
			</article>

			<article>
				<h4 className='h3'>Radius</h4>
				<p className='p'> {language[lang].propRadius}</p>
				<ListItems items={buttonsPage.RADIUS_DOM} />
			</article>

			<article >
				<h4 className='h3'>spinnerType</h4>
				<p className='p'> {language[lang].propSpinnerType}</p>
				<ListItems items={buttonsPage.ICON_SPINNER_DOM} />
			</article>

			<article>
				<h4 className='h3'>{lang === 'es' ? 'demás:' : ' rest:'} </h4>
				<ul className='ul'>
					<li className='p'>- hasSpinner: {language[lang].propHasSpinner}</li>
					<li className='p'>- isLoading: {language[lang].propIsLoading}</li>
					<li className='p'>- disabled: {language[lang].propDisabled}</li>
					<li className='p'>
						- initialAnimation: {language[lang].propHasInitialAnimation}
					</li>
					<li className='p'>- textTransform: {language[lang].propTransform}</li>
					<li className='p'>- style: {language[lang].styleProp}</li>
				</ul>
			</article>
			<p className='p'>{language[lang].note}</p>

			<article className='article'>
				<h4 className='h3'>{lang === 'es' ? 'algunos ejemplos:' : 'some examples:'}</h4>
				<div>
					<p className='p'>ripple Button:</p>
					<Button
						button='ripple'
						borderRadius='r-3'
						backgroundColor='purple-500'
						size='sm-200'
						textTransform='uppercase'
						hasInitialAnimation
					>
						click
					</Button>
				</div>
				<div>
					<p className='p'>Squares Button:</p>
					<Button
						button='squares'
						borderRadius='r-3'
						backgroundColor='red-500'
						size='sm-200'
						textTransform='uppercase'
						hasInitialAnimation
					>
						click
					</Button>
				</div>

				<div>
					<p className='p'>beat Button:</p>
					<Button
						button='beat'
						borderRadius='r-3'
						backgroundColor='green-500'
						size='sm-300'
						textTransform='uppercase'
						hasInitialAnimation
					>
						click
					</Button>
				</div>

				<div>
					<p className='p'>
						{lang === 'es'
							? 'Botón con icono eclipse cargando'
							: 'Button with eclipse loading spin:'}
					</p>
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
