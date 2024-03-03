import { useModalPage } from '../hooks/useModalPage';
import Button from '../../components/button/Button';
import Select from '../../components/Select';
import Highlighter from '../components/Highlighter';
import { ListItems } from '../components/ListItems';

import modalPage from '../const/modalPage';
import language from '../lang/modal.json';

function ModalPage() {
	const {
		animation,
		lang,
		modalAnswer,
		typeModal,
		handleClickModal,
		setAnimation,
		setTypeModal,
	} = useModalPage();

	return (
		<section>
			<h1>modal</h1>

			<article>
				<p>{language[lang].p1}</p>

				<h2>DEMO</h2>

				<div style={{ width: '18rem' }}>
					<p>animation</p>
					<Select
						options={modalPage.ANIMATIONS}
						onChange={setAnimation}
						selectState={animation}
						zIndex={2}
					/>
				</div>

				<div style={{ width: '18rem' }}>
					<p>type</p>
					<Select
						options={modalPage.MODAL_TYPE}
						onChange={setTypeModal}
						selectState={typeModal}
					/>
				</div>
				<Button
					backgroundColor='pink-200'
					borderRadius='r-4'
					textTransform='uppercase'
					onClick={handleClickModal}
				>
					click
				</Button>

				<p>
					Resp. : <span className='resp'>'{modalAnswer}'</span>
				</p>
			</article>

			<article>
				<Highlighter>
					{`import { Button, openModal } from "dialui-components";

export const MyComponent = () => {
  const handleClick = () => {
    openModal({
      description: "Do you want to delete?",
      title: "Delete task",
    });
  };

  return (
    <Button onClick={handleClick}> click </Button>
  );
};`}
				</Highlighter>
			</article>

			<article>
				<h4>Default Props:</h4>
				<ListItems items={modalPage.DEFAULT_PROPS_DOM} />
			</article>

			<article>
				<h4>Props:</h4>
				<ListItems items={modalPage.ALL_PROPS_DOM} />
			</article>

			<article>
				<h4>MessageType:</h4>
				<p>{language[lang].propMessageType}</p>
				<ListItems items={modalPage.MESSAGE_TYPE_DOM} />
			</article>

			<article>
				<h4>Animation:</h4>
				<p>{language[lang].propAnimation}</p>
				<ListItems items={modalPage.ANIMATION_DOM} />
			</article>

			<article>
				<h4>{language[lang].h41}</h4>
				<p>{language[lang].p2}</p>
			</article>

			<article>
				<h4>{language[lang].h42}</h4>
				<p>{language[lang].localState}</p>
				<Highlighter>
					{`import { useState } from "react";
import { openModal, Button } from "dialui-components";

export const MyComponent = () => {
  const [ modalAnswer, setModalAnswer ] = useState("");

  const handleClick = () => {
    openModal({
      description: "Do you want to delete?",
      title: "Delete task",
      type: "warning",
      handleModalAnswer: setModalAnswer,
    });
  };
    return (
		<Button onClick={ handleClick } >	click </Button>
	)
};`}
				</Highlighter>
			</article>

			<article>
				<h4>{language[lang].h43}</h4>
				<p>{language[lang].globalState}</p>
				<Highlighter>
					{` //main.tsx					
 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import { UIProvider } from 'dialui-components/dist/providers';
 
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UIProvider>
      <App/>
    </UIProvider>
  </React.StrictMode>,
);`}
				</Highlighter>

				<Highlighter>
					{`import { useModal } from "dialui-components/dist/hooks";
import { openModal, Button } from "dialui-components";

export const MyComponent = () => {
  const { modalAnswer, handleModalAnswer } = useModal();

  const handleClick = () => {
    openModal({
      description: "Do you want to delete?",
      title: "Delete task",
      type: "warning",
      handleModalAnswer: handleModalAnswer ,
    });
  };

  return (
		<Button onClick={ handleClick } >	click </Button>
	)
};`}
				</Highlighter>
			</article>
		</section>
	);
}

export default ModalPage;
