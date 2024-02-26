import useAppOptions from '../hooks/context/useAppOptions';
import Button from '../../components/UI/buttons/Button';

import language from '../lang/buttons.json';
import Highlighter from '../components/Highlighter';
import { ReactNode } from 'react';

function ButtonSlideDownPage() {
	const { lang, theme } = useAppOptions();

	return (
		<section>
			<h1 className='h1'>{language[lang].h1}</h1>

			<p className='p'>{language[lang].p1}</p>

			<article className='article'>
				<h3 className='h3'>{language[lang].h31}</h3>

				<Button>default</Button>

				<Highlighter>
					{`import {Button} from "dialui-components"

function MyComponent(){
	return (
		<Button >	default </Button>
		)
	}`}
				</Highlighter>
			</article>
			<article className='article'>
				<h4 className='h3'>Default Props:</h4>
				<ul className={`${theme} code`}>
					<List label='button= '>'normal'</List>
					<List label='backgroundColor = '>'blue-200'</List>
					<List label='disabled = '>false</List>
					<List label='hasInitialAnimation = '>false</List>
					<List label='isLoading = '>false</List>
					<List label='borderRadius = '>'r-0'</List>
					<List label='size = '>'sm-100'</List>
					<List label='iconSpinner = '>'eclipse'</List>
					<List label='hasSpinner = '>false</List>
					<List label='type = '>'button'</List>
					<List label='textTransform = '>'lowercase'</List>
				</ul>
			</article>

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

			<article>
				<h4 className='h3'>Props:</h4>
				<ul className={`${theme} code`}>
					<List label='button?: '>
						'normal' | 'squares' | 'beat' | 'ripple' | 'slideDown'
					</List>
					<List label='backgroundColor?: '>Colors</List>
					<List label='borderRadius?: '> Radius </List>
					<List label='children?: '> ReactNode</List>
					<List label='hasSpinner?: '> boolean</List>
					<List label='isLoading?: '>boolean </List>
					<List label='disabled?: '> boolean</List>
					<List label='iconSpinner?: '> SpinnerType</List>
					<List label='hasInitialAnimation?: '> boolean</List>
					<List label='size?: '> Size</List>
					<List label='children?: '> CSSProperties</List>
					<List label='type?: '>'submit' | 'button' | 'reset' </List>
					<List label='textTransform?: '>
						'capitalize' | 'lowercase' | 'uppercase'{' '}
					</List>
					<List label='onClick?: '> React.MouseEventHandler </List>
				</ul>
			</article>

			<article>
				<h4 className='h3'>button:</h4>
				<p className='p'>{language[lang].propButton}</p>

				<ul className={`${theme} code`}>
					<List label='button?: '>
						'normal' | 'squares' | 'beat' | 'ripple' | 'slideDown'
					</List>
				</ul>
			</article>

			<article>
				<h4 className='h3'>Colors:</h4>
				<p className='p'>{language[lang].propColor}</p>
				<ul className={`${theme} code`}>
					<List label='backgroundColor?:'> </List>
					<List label="'black-...=> "> 100,200,300,400'</List>
					<List label="'gray-... =>"> 100,200,300,400'</List>
					<List label="'blue-... => ">100,200,300,400,500,600'</List>
					<List label="'green-...=> "> 100,200,300,400,500,600'</List>
					<List label="'pink-... => ">100,200,300,400,500,600'</List>
					<List label="'purple-... => "> 100,200,300,400,500,600'</List>
					<List label="'red-... => ">100,200,300,400,500,600'</List>
					<List label="'orange-... => "> 100,200,300,400,500,600'</List>
					<List label="'yellow-... => "> 100,200,300,400,500,600'</List>
					<List label="'outline-... =>">
						|black'|blue'|gray'|green'|pink'|purple'|red'|white'|yellow
					</List>
				</ul>
			</article>
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

			<article>
				<h4 className='h3'>Size</h4>
				<p className='p'> {language[lang].propSize}</p>
				<ul className={`${theme} code`}>
					<List label='size?: ' />
					<List>| 'sm-100' | 'sm-200'| 'sm-300'</List>
					<List>| 'md-100' | 'md-200'| 'md-300'</List>
					<List>| 'lg-100' | 'lg-200'| 'lg-300'</List>
					<List>| 'vw-25' | 'vw-50' | 'vw-75' | 'vw-100' </List>
				</ul>
			</article>

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

			<article>
				<h4 className='h3'>Radius</h4>
				<p className='p'> {language[lang].propRadius}</p>
				<ul className={`${theme} code`}>
					<List label='borderRadius?: ' />

					<List>|'r-0' | 'r-1' | 'r-2' | 'r-3' | 'r-4' | 'r-5' | 'r-100'</List>
				</ul>
			</article>

			<article>
				<h4 className='h3'>spinnerType</h4>
				<p className='p'> {language[lang].propSpinnerType}</p>
				<ul className={`${theme} code`}>
					<List label='iconSpinner?: ' />
					<List>fleas' | 'squares' | 'eclipse' | 'mice' | 'dots'</List>
				</ul>
			</article>

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
		</section>
	);
}

export default ButtonSlideDownPage;

interface ListProps {
	children?: ReactNode;
	label?: ReactNode;
}

function List({ children = '', label = '' }: ListProps) {
	const { theme } = useAppOptions();
	return (
		<li className={`${theme} list-prop`}>
			{label}
			<span className={`${theme} list-value`}>{children}</span>
		</li>
	);
}
