import { HTMLAttributes, ReactNode, TableHTMLAttributes } from 'react';

import { BasicColors } from '../types';
import styles from './table.module.css';

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
	children: ReactNode;
	width?:string
	height?:string
}

interface THeadProps extends HTMLAttributes<HTMLTableSectionElement> {
	children: ReactNode;
}

interface TdProps extends HTMLAttributes<HTMLTableCellElement> {
	colSpan?: number;
	children: ReactNode;
}

interface RowProps extends HTMLAttributes<HTMLTableRowElement> {
	children: ReactNode;
	backgroundColor?: BasicColors | 'black';
}

const Table = ({ children, width="fit-contain", height, ...props }: TableProps) => {
	return (
		<div
		style={{
			width,
			overflow: 'auto',
			height,
		}}
		>

		<table {...props} className={styles.table}>
			{children}
		</table>
		</div>
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

export const Row = ({ backgroundColor= "white", children, ...props }: RowProps) => {
	return (
		<tr
			{...props}
			className={`${styles.tr} ${styles[backgroundColor]}`}
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
