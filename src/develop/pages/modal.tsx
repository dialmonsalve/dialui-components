import Button from '../../components/UI/buttons/Button';
import Select from '../../components/form/Select';

import Highlighter from '../components/Highlighter';
import { ListItems } from '../components/ListItems';

import modalPage from '../const/modalPage';
import language from '../lang/modal.json';
import { useButtonPage } from '../hooks/useButtonPage';

function ModalPage() {
	const {
		animation,
		lang,
		response,
		typeModal,
		handleModal,
		setAnimation,
		setTypeModal,
	} = useButtonPage();

	return (
		<section>
			<h1 className='h1'>modal</h1>

			<article className='article'>
				<p className='p'>{language[lang].p1}</p>

				<h3 style={{ fontSize: '24px' }}>DEMO</h3>

				<p className='p'>
					Resp. :{' '}
					<span
						style={{
							backgroundColor: 'red',
							fontSize: '14px',
							color: 'white',
							padding: '0.5rem',
							borderRadius: '5px',
							fontWeight: 700,
						}}
					>
						'{response}'
					</span>
				</p>

				<div style={{ zIndex: 2, width: '18rem' }}>
					<Select
						options={modalPage.ANIMATIONS}
						onChange={setAnimation}
						selectState={animation}
					/>
				</div>

				<div style={{ zIndex: 1, width: '18rem' }}>
					<Select
						options={modalPage.MODAL_TYPE}
						onChange={setTypeModal}
						selectState={typeModal}
					/>
				</div>

				<Button
					backgroundColor='pink-400'
					borderRadius='r-4'
					textTransform='uppercase'
					onClick={handleModal}
				>
					click
				</Button>
			</article>

			<article className='article'>
				<Highlighter>
					{`import { openAlert } from "dialui-components"

function MyComponent(){

const handleClick = () => {
	openModal({
		description: 'Do you want to delete?',
		title: 'Delete task',
		type: 'warning',
	});
}

return (
		<Button onClick={ handleClick } >	click </Button>
	)
}`}
				</Highlighter>
			</article>

			<article>
				<h4 className='h3'>Default Props:</h4>
				<ListItems items={modalPage.DEFAULT_PROPS_DOM} />
			</article>

			<article>
				<h4 className='h3'>Props:</h4>
				<ListItems items={modalPage.ALL_PROPS_DOM} />
			</article>

			<article>
				<h4 className='h3'>MessageType:</h4>
				<p className='p'>{language[lang].propMessageType}</p>
				<ListItems items={modalPage.MESSAGE_TYPE_DOM} />
			</article>

			<article>
				<h4 className='h3'>Animation:</h4>
				<p className='p'>{language[lang].propAnimation}</p>
				<ListItems items={modalPage.ANIMATION_DOM} />
			</article>

			<article>
				<h4 className='h3'>{language[lang].h41}</h4>
				<p className='p'>{language[lang].p2}</p>
			</article>

			<article>
				<h4 className='h3'>{language[lang].h42}</h4>
				<p className='p'>{language[lang].localState}</p>
				<Highlighter>
					{`import { useState } from "react";
import { openAlert } from "dialui-components";

type Response = | 'yes' | 'no' | 'ok' |'cancel'

function MyComponent(){

	const [response, handleResponse] = useState("" as Response);

const handleClick = () => {
	openModal({
		description: 'Do you want to delete?',
		title: 'Delete task',
		type: 'warning',
		handleModalResponse:{handleResponse}
	});
};

return (
		<Button onClick={ handleClick } >	click </Button>
	)
}`}
				</Highlighter>
			</article>

			<article>
				<h4 className='h3'>{language[lang].h43}</h4>
				<p className='p'>{language[lang].globalState}</p>
				<Highlighter>
					{` //main.tsx					
import React from 'react';
import ReactDOM from 'react-dom/client';
import { UIProvider } from 'dialui-components/dist/provider';
...
	ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
		<React.StrictMode>
			<UIProvider>
				<App/>
			</UIProvider>
		</React.StrictMode>,
	);
}`}
				</Highlighter>

				<Highlighter>
					{`import { useModal } from "dialui-components/dist/hooks";
import { openAlert } from "dialui-components";

function MyComponent(){

	const { modalResponse, handleModalResponse } = useModal();

	const handleClick = () => {
		openModal({
			description: 'Do you want to delete?',
			title: 'Delete task',
			type: 'warning',
			handleModalResponse:{handleModalResponse}
		});
	};

return (
		<Button onClick={ handleClick } >	click </Button>
	)
}`}
				</Highlighter>
			</article>
		</section>
	);
}

export default ModalPage;
