import {
	HTMLAttributes,
	ReactNode,
	TableHTMLAttributes,
	TdHTMLAttributes,
} from 'react';

import styles from '../../styles/components/UI/table.module.css';

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
	children: ReactNode;
}

interface THeadProps extends HTMLAttributes<HTMLTableSectionElement> {
	children: ReactNode;
}

interface TdProps extends TdHTMLAttributes<HTMLTableDataCellElement> {
	colSpan?: number;
}

interface RowProps extends HTMLAttributes<HTMLTableRowElement> {
	children: ReactNode;
	backgroundColor:
		| 'yellow'
		| 'blue'
		| 'red'
		| 'green'
		| 'gray'
		| 'white'
		| 'black'
		| 'purple'
		| 'pink';
}

const Table = ({ children, ...props }: TableProps) => {
	return (
		<table {...props} className={styles.table}>
			{children}
		</table>
	);
};

export const TableHead = ({ children, ...props }: THeadProps) => {
	return (
		<thead {...props} className={styles.thead}>
			{children}
		</thead>
	);
};

export const TableBody = ({ children, ...props }: THeadProps) => {
	return (
		<tbody {...props} className={styles.body}>
			{children}
		</tbody>
	);
};

export const Row = ({ backgroundColor, children, ...props }: RowProps) => {
	return (
		<tr
			{...props}
			className={`${styles.tr} ${styles[`tr-${backgroundColor}`]}`}
		>
			{children}
		</tr>
	);
};

export const Title = ({ children, colSpan = 1, ...props }: TdProps) => {
	return (
		<td {...props} colSpan={colSpan} className={styles.th}>
			{children}
		</td>
	);
};

export const Cell = ({ children, colSpan = 1, ...props }: TdProps) => {
	return (
		<td {...props} colSpan={colSpan} className={styles.td}>
			{children}
		</td>
	);
};

export default Table;
