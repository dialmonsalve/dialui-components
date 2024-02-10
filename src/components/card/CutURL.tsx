import { ReactNode, useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Props {
	children: ReactNode;
}

interface State {
	items: Items[];
}
interface Items {
	url: string;
	views: number;
	shortUrl: string;
}

type Actions =
	| { type: 'ADD'; payload: string }
	| { type: 'LOAD' }
	| { type: 'ADD_VIEW'; payload: string };

function reducer(state: State, action: Actions): State {
	switch (action.type) {
		case 'ADD':
			return add(state, action);

		case 'LOAD':
			return load();

		case 'ADD_VIEW':
			return addView(action);
		default:
			return state;
	}
}

function getRandomURL() {
	const randomString =
		Math.random().toString(32).substring(2, 5) +
		Math.random().toString(32).substring(2, 5);

	return randomString;
}

function add(state: State, action: { type: 'ADD'; payload: string }) {
	const url = action.payload;
	const shortUrl = getRandomURL();
	const temp = [...state.items];
	const newItem = {
		url: url.toString(),
		shortUrl,
		views: 0,
	};
	temp.unshift(newItem);
	localStorage.setItem('urls', JSON.stringify(temp));
	return { items: [...temp] };
}

function load() {
	const data = localStorage.getItem('urls');

	if (data) {
		const temp = JSON.parse(data);
		return { items: [...temp] };
	}
	return { items: [] };
}

function addView(action: { type: 'ADD_VIEW'; payload: string }) {
	const data = localStorage.getItem('urls');
	if (data) {
		const items = JSON.parse(data);
		const item = items.find((i: Items) => i.shortUrl === action.payload);
		if (item) {
			item.views++;
			localStorage.setItem('urls', JSON.stringify(items));
			return { items: [...items] };
		}
	}
	return { items: [] };
}

function useReducerApp() {
	return useReducer(reducer, { items: [] });
}

function MainContainer({ children }: Props) {
	return <div>{children}</div>;
}

interface CreateFormProps {
	dispatch: React.Dispatch<Actions>;
}

function CreateForm({ dispatch }: CreateFormProps) {
	const [url, setUrl] = useState('');

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		dispatch({ type: 'ADD', payload: url });
		setUrl('');
	}
	return (
		<form onSubmit={handleSubmit}>
			<input type='text' value={url} onChange={(e) => setUrl(e.target.value)} />
			<button type='button'>Crear url</button>
		</form>
	);
}

export function Redirect() {
	const [_, dispatch] = useReducerApp();
	const params = useParams();

	useEffect(() => {
		const data = localStorage.getItem('urls');
		if (data) {
			const items = JSON.parse(data);
			const id = params.id;

			const item = items.find((i: Items) => i.shortUrl === id);

			if (item) {
				dispatch({ type: 'ADD_VIEW', payload: id || '' });
				setTimeout(() => {
					window.location.href = item.url;
				}, 2000);
			}
		}
	}, []);

	return <div>Redirect</div>;
}
