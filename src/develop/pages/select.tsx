import { useState } from 'react';

import Highlighter from '../components/Highlighter';
import { Select } from '../../';

import useAppOptions from '../hooks/context/useAppOptions';
import { ListItems } from '../components/ListItems';

import selectPage from '../constants/selectPage';
import language from '../lang/select.json';

const simpleOptions = [
	'Helen Palmer Geisel',
	'Patricia Neal',
	'Dr Seuss',
	'Roald Dahl',
];
const multiOptions = [
	'Helen',
	'Palmer',
	'Geisel',
	'Patricia',
	'Neal',
	'Dr Seuss',
	'Roald Dahl',
];

function SelectPage() {
	const [simpleSelect, handleSimple] = useState('');
	const [multiSelect, handleMultiSelect] = useState<string[]>([]);
	const { lang } = useAppOptions();
	return (
		<section>
			<h1>select - multiselect</h1>

			<article>
				<h2>Select</h2>
				<p>{language[lang].p1}</p>
				<p>{language[lang].p2}</p>
				<p>{language[lang].p3}</p>
				<p>{language[lang].p4}</p>

				<div style={{ width: '250px' }}>
					<Select
						options={simpleOptions}
						onChange={handleSimple}
						selectState={simpleSelect}
					/>
				</div>
				<Highlighter>
					{`import { Select } from "dialui-components";
import { useState } from "react";

const options = ['Helen Palmer Geisel', 'Patricia Neal', 'Dr Seuss', 'Roald Dahl'];

export const MyComponent = () => {
  const [ select, setSelect ] = useState("");

  return (
    <Select
      options={options}
      selectState={select}
      onChange={setSelect}
    />
  )
};`}
				</Highlighter>
			</article>

			<article>
				<h4>Default Props:</h4>
				<ListItems items={selectPage.SELECT_DEFAULT_PROPS_DOM} />
			</article>

			<article>
				<h4>Props:</h4>
				<ListItems items={selectPage.SELECT_ALL_PROPS_DOM} />
			</article>

			<article>
				<h2>MultiSelect</h2>
				<p>{language[lang].p5}</p>
				<p>{language[lang].p6}</p>
				<p>{language[lang].p7}</p>

				<div style={{ width: '280px' }}>
					<Select
						multiple
						options={multiOptions}
						onChange={handleMultiSelect}
						selectState={multiSelect}
						zIndex={2}
					/>
				</div>
				<Highlighter>
					{`import { Select } from "dialui-components";
import { useState } from "react";

const options = ['Helen Palmer Geisel', 'Patricia Neal', 'Dr Seuss', 'Roald Dahl'];

function MyComponent(){

  const [ multiSelect, setMultiSelect ] = useState<string[]>([]);

  return (
    <Select
      multiple
      options={options}
      onChange={setMultiSelect}
      selectState={multiSelect}
    />
  )
}`}
				</Highlighter>
			</article>

			<article>
				<h4>Default Props:</h4>
				<ListItems items={selectPage.MULTI_SELECT_DEFAULT_PROPS_DOM} />
			</article>

			<article>
				<h4>Props:</h4>
				<ListItems items={selectPage.MULTI_SELECT_ALL_PROPS_DOM} />
			</article>
		</section>
	);
}

export default SelectPage;
