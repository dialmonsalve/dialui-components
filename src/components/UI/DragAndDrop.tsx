import { CSSProperties, DragEvent, ReactNode } from 'react';

import styles from '../../styles/components/UI/dragAndDrop.module.css';
import { BasicColors } from '@/types';

interface DragAndDropProps {
	entry: { id: number };
	dragOverItem: number | undefined;
	handleDragStart: (index: number) => void;
	handleDragOver: (event: DragEvent) => void;
	handleDrop: () => void;
	handleDragEnter: (index?: number) => void;
	handleDragLeave: () => void;
	handleDragEnd: () => void;
	index: number;
	children: ReactNode;
	sx?: CSSProperties;
	backgroundColor?: BasicColors;
}

const DragAndDrop = ({
	entry,
	index,
	dragOverItem,
	handleDragEnd,
	handleDragEnter,
	handleDragLeave,
	handleDragOver,
	handleDragStart,
	handleDrop,
	backgroundColor = 'blue',
	sx,
	children,
}: DragAndDropProps) => {
	return (
		<div
			key={entry.id}
			className={`${
				dragOverItem === index
					? `${styles['list-item']} ${styles['next-position']}`
					: styles['list-item']
			} ${styles[`list-${backgroundColor}`]}`}
			draggable
			onDragStart={() => handleDragStart(index)}
			onDragOver={handleDragOver}
			onDrop={() => handleDrop()}
			onDragEnter={() => handleDragEnter(index)}
			onDragLeave={handleDragLeave}
			onDragEnd={handleDragEnd}
			style={sx}
		>
			{children}
		</div>
	);
};

export default DragAndDrop;
