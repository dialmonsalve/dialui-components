import { useState, DragEvent } from 'react';

interface Props {
	content: string;
	id:string
}

function Card({ content, id }: Props) {
	const [isDragging, setIsDragging] = useState(false);

	function handleDragStart(e: DragEvent<HTMLDivElement>) {
		setIsDragging(true);
		const data = JSON.stringify({ type: id });
		e.dataTransfer.setData('text/plain', data);
	}

	function handleDragEnd(e: DragEvent<HTMLDivElement>) {
		setIsDragging(false);
		e.dataTransfer.clearData();
	}

	return (
		<div
			className='card'
			style={{
				backgroundColor: isDragging ? '#fbb' : 'palegoldenrod',
			}}
			draggable
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
		>
			{content}
		</div>
	);
}

const allEntries = [
	{
		id: '1',
		content: 'hola',
		status: 'complete',
	},
	{
		id: '2',
		content: 'mundo',
		status: 'complete',
	},
	{
		id: '3',
		content: 'a todos asdfasdf sdaf ds fasd',
		status: 'complete',
	},
];

interface BoxProps {
	card: boolean;
	moveCard: (value?: number) => void;
}

function Box({ card, moveCard }: BoxProps) {
	const [isOver, setIsOver] = useState(false);

	function handleDragOver(e: DragEvent<HTMLDivElement>) {
		if (e.dataTransfer?.types[0] === 'text/plain') {
			setIsOver(true);
			e.preventDefault();
		}
	}

	function handleDrop(e: DragEvent) {
		const dataJSON = e.dataTransfer?.getData('text/plain');



		let data;
		try {
			data = JSON.parse(dataJSON || '');
		} catch {}
		if (data && data.type === "2") {
			moveCard();
		}
	}

	function handleDragLeave() {
		setIsOver(false);
	}

	return (
		<div
			className='box'
			style={{ backgroundColor: isOver ? '#bbf' : 'rgba(0,0,0,.12)' }}
			onDragOver={handleDragOver}
			onDrop={handleDrop}
			onDragLeave={handleDragLeave}
		>
			{card
				? allEntries.map((entry) => (
						<Card id={entry.id} key={entry.id} content={entry.content} />
				  ))
				: 'Box'}
		</div>
	);
}

function Drag() {
	const [index, setIndex] = useState(1);

	function moveCard(i: number) {
		setIndex(i);
	}

	return (
		<div className='app'>
			<Box card={index === 1} moveCard={() => moveCard(1)} />
			<Box card={index === 2} moveCard={() => moveCard(2)} />
			<Box card={index === 3} moveCard={() => moveCard(3)} />
		</div>
	);
}

export default Drag;
