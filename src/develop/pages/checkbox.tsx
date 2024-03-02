import { useState } from 'react';

import useAppOptions from '../hooks/context/useAppOptions';
import Highlighter from '../components/Highlighter';
import Checkbox from '../../components/form/Checkbox';
import { ListItems } from '../components/ListItems';

import checkboxPage from '../const/checkboxPage';
import language from '../lang/checkbox.json';

function CheckboxPage() {
	const [checkboxState, handleCheckboxChange] = useState(false);
	const { lang } = useAppOptions();

	return (
		<section>
			<h1>Checkbox</h1>

			<article>
				<Checkbox
					checkboxFormState={checkboxState}
					handleCheck={() => handleCheckboxChange(!checkboxState)}
					name='checkA'
				/>

				<p>{language[lang].p1}</p>
				<p>{language[lang].p2}</p>
				<p>{language[lang].p3}</p>
				<p>{language[lang].p4}</p>
				<p>{language[lang].p5}</p>

				<Highlighter>
					{`import { useCheckbox } from "dialui-components/dist/hooks";
import { Checkbox } from "dialui-components";

const initialCheckbox = {
  checkA: false,
  checkB: true,
};

export const MyComponent = () => {
  const { checkboxState, handleCheckboxChange } = useCheckbox({ initialCheckbox });
  // Alternative:
  // const { checkA, checkB, handleCheckboxChange } = useCheckbox({ initialCheckbox });

  return (
    <>
      <Checkbox
        checkboxFormState={checkboxState}
        handleCheck={handleCheckboxChange}
        name="checkA"
      />
      <Checkbox
        checkboxFormState={checkboxState}
        handleCheck={handleCheckboxChange}
        name="checkB"
      />
    </>
  );
};`}
				</Highlighter>
			</article>

			<article>
				<h4>Default Props:</h4>
				<ListItems items={checkboxPage.DEFAULT_PROPS_DOM} />
			</article>

			<article>
				<h4>Props:</h4>
				<ListItems items={checkboxPage.ALL_PROPS_DOM} />
			</article>

			<article>
				<p>{language[lang].p6}</p>

				<Highlighter>
					{`import { useState } from "react";
import { Checkbox } from "dialui-components";

export const MyComponent = () => {
  const [checkboxState, handleCheckboxChange] = useState(false);

  return (
    <Checkbox
      checkboxFormState={checkboxState}
      handleCheck={() => handleCheckboxChange(!checkboxState)}
      name="check"
    />
  );
};
`}
				</Highlighter>
			</article>
		</section>
	);
}

export default CheckboxPage;
