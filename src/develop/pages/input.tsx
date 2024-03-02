import { useState } from 'react';

import useAppOptions from '../hooks/context/useAppOptions';
import Highlighter from '../components/Highlighter';
import Input from '../../components/form/Input';
import { ListItems } from '../components/ListItems';

import inputPage from '../const/inputPage';
import language from '../lang/input.json';

function InputPage() {
	const { lang } = useAppOptions();
	const [name, setName] = useState('');

	return (
		<section>
			<h1>Input</h1>

			<article>
				<div
					style={{
						width: '250px',
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<Input
						type='text'
						value={name}
						placeholder='Name'
						name='name'
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
			</article>

			<p>{language[lang].p1}</p>
			<p>{language[lang].p2}</p>
			<p>{language[lang].p3}</p>
			<p>{language[lang].p4}</p>
			<p>{language[lang].p5}</p>

			<Highlighter>
				{`import { useInput } from "dialui-components/dist/hooks";
import { Input } from "dialui-components";

const initialForm = {
  name: "",
  phone: 0,
};

export const MyComponent = () => {
  const { inputState, handleInputChange } = useInput({ initialInput: initialForm });
  // Alternative :
  // const { name, phone , handleInputChange } = useInput({ initialInput: initialForm });

  return (
    <>
      <Input
        type="text"
        value={inputState.name} /*or {name}*/
        placeholder="Name"
        name="name"
        onChange={handleInputChange}
      />
      <Input
        type="phone"
        value={inputState.phone} /*or {phone}*/
        placeholder="Phone"
        name="phone"
        onChange={handleInputChange}
      />
    </>
  );
};`}
			</Highlighter>

			<article>
				<h4>Default Props:</h4>
				<ListItems items={inputPage.DEFAULT_PROPS_DOM} />
			</article>

			<article>
				<h4>Props:</h4>
				<ListItems items={inputPage.ALL_PROPS_DOM} />
				<p>{language[lang].p6}</p>
			</article>

			<article>
				<p>{language[lang].p7}</p>

				<Highlighter>
					{`import { useState } from "react";
import { Input } from "dialui-components";

export const MyComponent = () => {
  const [ name, setName ] = useState("");

  return (
    <Input
      type="text"
      value={name}
      placeholder="Name"
      name="name"
      onChange={(e) => setName(e.target.value)}
    />
  );
};`}
				</Highlighter>
			</article>
		</section>
	);
}

export default InputPage;
