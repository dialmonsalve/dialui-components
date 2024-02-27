import Highlighter from '../components/Highlighter';
import useAppOptions from '../hooks/context/useAppOptions';

import language from '../lang/home.json';

function HomePage() {
	const { lang } = useAppOptions();
	return (

		<section>
			<h1 >{language[lang].h1}</h1>
			<div>
				<p>{language[lang].p0}</p>
				<Highlighter language='bash'>npm i dialui-components</Highlighter>
			</div>

			<p>{language[lang].p1}</p>
			<p>{language[lang].p2}</p>
			<p>{language[lang].p3}</p>

			<ul >
				<li className='list'>{language[lang].li1}</li>
				<li className='list'>{language[lang].li2}</li>
				<li className='list'>{language[lang].li3}</li>
				<li className='list'>{language[lang].li4}</li>
				<li className='list'>{language[lang].li5}</li>
			</ul>
			<p>{language[lang].p4}</p>
		</section>
	);
}

export default HomePage;
