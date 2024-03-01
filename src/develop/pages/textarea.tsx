import { useState } from 'react';
import useAppOptions from '../hooks/context/useAppOptions';

import Highlighter from '../components/Highlighter';
import Textarea from '../../components/form/TextArea';

import { ListItems } from '../components/ListItems';

import textareaPage from '../const/textareaPage';
import language from '../lang/textarea.json';

function TextareaPage() {
	const { lang } = useAppOptions();
	const [value, setValue] = useState('');

	return (
		<section>
			<h1>Text area</h1>

			<article>
				<div
					style={{
						width: '250px',
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<Textarea
						value={value}
						placeholder='description'
						name='name'
						onChange={(e) => setValue(e.target.value)}
						totalChars={50}
					/>
				</div>
			</article>
			<p>{language[lang].p1}</p>
			<Highlighter>
				{`import { useState } from "react";
import { Textarea } from "dialui-components";
      
function MyComponent(){
      
  const [ value, setValue } = useState("");
      
  return (
		<Textarea
		 value={value}
		 placeholder='Description'
		 name='description'
		 onChange={(e) => setValue(e.target.value)}
		 totalChars={50}
	/>
  )
}`}
			</Highlighter>

			<article>
				<h4>Default Props:</h4>
				<ListItems items={textareaPage.DEFAULT_PROPS_DOM} />
			</article>

			<article>
				<h4>Props:</h4>
				<ListItems items={textareaPage.ALL_PROPS_DOM} />
			</article>

		</section>
	);
}

export default TextareaPage;
