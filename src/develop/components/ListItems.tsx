import { ReactNode } from 'react';
import useAppOptions from '../hooks/context/useAppOptions';

interface ListProps {
	children?: ReactNode;
	label?: ReactNode;
}

interface Items {
	items: ListProps[];
}

export const ListItems = ({ items }: Items) => {
	const { theme } = useAppOptions();
	return (
		<ul className={`${theme} code`}>
			{items.map((item, index) => (
				<li key={`${index}`} className={`${theme} list-prop`}>
					{item.label}
					<span className={`${theme} list-value`}>{item.children}</span>
				</li>
			))}
		</ul>
	);
};
