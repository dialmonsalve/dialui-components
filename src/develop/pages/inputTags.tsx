import Highlighter from "../components/Highlighter"

import InputTags from '../../components/form/InputTags';
import { useState } from "react";

import useAppOptions from '../hooks/context/useAppOptions';
import language from "../lang/input-tags.json"
import { ListItems } from "../components/ListItems";

import inputTagsPage from "../const/inputTagsPage";

const hola = [
  "hello", "world"
]

function InputTagsPage  () {

  	const [tagsState, handleInputTagsChange] = useState(hola);

    const { lang } = useAppOptions();

  return (
    <section>
      <h1>Input Tags</h1>

      <article >

        <div style={{width:"38rem", display:"flex", flexDirection:"column", gap:"1rem"}} >

      <InputTags
				placeholder='Tags'
				tags={tagsState}
				setTags={handleInputTagsChange}
			/>
        </div>

        <p>{language[lang].p1}</p>
        <p>{language[lang].p2}</p>
        <p>{language[lang].p3}</p>

        <ul>
          <li className='list' >1. {language[lang].li1}</li>
          <li className='list' >2. {language[lang].li2}</li>
          <li className='list' >3. {language[lang].li3}</li>
        </ul>
				
				<Highlighter>
					{`import { useState } from "react";
import { InputTags } from "dialui-components";

function MyComponent(){

  const{ tagsState , setTags } = useState([]);

  return (
    <InputTags
      placeholder='Tags'
      tags={tagsState}
      setTags={setTags}
    />
  )
}`}
				</Highlighter>
			</article>


			<article>
				<h4>Default Props:</h4>
				<ListItems items={inputTagsPage.DEFAULT_PROPS_DOM} />
			</article>


			<article>
				<h4>Props:</h4>
				<ListItems items={inputTagsPage.ALL_PROPS_DOM} />
			</article>

    </section>


  )
}

export default InputTagsPage