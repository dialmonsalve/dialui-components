import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/components/form/select.module.scss';

type SingleSelectProps = {
	multiple?: false;
	selectState?: string;
	onChange: (selectState: string | undefined) => void;
};
type MultipleSelectProps = {
	multiple: true;
	selectState: string[];
	onChange: (value: string[]) => void;
};
type SelectProps = {
	options: string[];
} & (SingleSelectProps | MultipleSelectProps);

export const Select = ({
	multiple,
	selectState,
	options,
	onChange,
}: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [highlightedIndex, setHighlightedIndex] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isOpen) setHighlightedIndex(0);
	}, [isOpen]);

	useEffect(() => {
		const ulElement = containerRef.current?.querySelector(
			`.${styles.select__options}`,
		);
		const handler = (e: KeyboardEvent) => {
			if (e.target !== containerRef.current) return;
			if (ulElement === null || ulElement === undefined) return;

			switch (e.code) {
				case 'Enter':
				case 'Space':
					setIsOpen((prev) => !prev);
					if (isOpen) selectOption(options[highlightedIndex]);
					break;
				case 'ArrowUp':
				case 'ArrowDown': {
					if (!isOpen) {
						setIsOpen(true);
						break;
					}
					const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
					if (newValue >= 0 && newValue < options.length) {
						setHighlightedIndex(newValue);

						const element = ulElement.children[newValue] as HTMLUListElement;
						if (element) {
							const scrollTop = ulElement.scrollTop;

							const elementTop = element.offsetTop;
							const elementHeight = element.clientHeight;
							if (elementTop < scrollTop) {
								ulElement.scrollTop = elementTop;
							} else if (
								elementTop + elementHeight >
								scrollTop + ulElement.clientHeight
							) {
								ulElement.scrollTop =
									elementTop + elementHeight - ulElement.clientHeight;
							}
						}
					}
				}
				break;
				case 'Escape':
					setIsOpen(false);
					break;

				default:
					break;
			}
		};
		containerRef.current?.addEventListener('keydown', handler);

		return () => {
			containerRef.current?.removeEventListener('keydown', handler);
		};
	}, [isOpen, highlightedIndex, options]);

	const clearOptions = () => {
		multiple ? onChange([]) : onChange(undefined);
	};

	const selectOption = (option: string) => {
		if (multiple) {
			if (selectState.includes(option)) {
				onChange(selectState.filter((o) => o !== option));
			} else {
				onChange([...selectState, option]);
			}
		} else {
			if (option !== selectState) onChange(option);
		}
	};

	const isOptionSelected = (option: string) => {
		return multiple ? selectState?.includes(option) : option === selectState;
	};

	return (
		<div
			onBlur={() => setIsOpen(false)}
			onClick={() => setIsOpen((prev) => !prev)}
			tabIndex={0}
			className={styles['select']}
			ref={containerRef}
		>
			<span className={styles['select__span']}>
				{multiple
					? selectState?.map((v) => (
							<span
								key={v}
								onClick={(e) => {
									e.stopPropagation();
									selectOption(v);
								}}
								className={styles['select__span--option-badge']}
							>
								{' '}
								{v} <span>&times;</span>{' '}
							</span>
					  ))
					: selectState}
			</span>

			<button
				type='button'
				onClick={(e) => {
					e.stopPropagation();
					clearOptions();
				}}
				className={styles['select__clear']}
			>
				&times;
			</button>
			<div className={styles['select__caret']} />
			<ul
				className={`${styles['select__options']} ${
					isOpen ? styles['select__show'] : ''
				}`}
			>
				<li className={styles['select__options--option']}>{''}</li>
				{options.map((option, index) => (
					<li
						onClick={(e) => {
							e.stopPropagation();
							selectOption(option);
							setIsOpen(false);
						}}
						className={`${styles['select__options--option']} ${
							isOptionSelected(option)
								? styles['select__options--selected']
								: ''
						} 
                ${
									index === highlightedIndex
										? styles['select__options--highlighted']
										: ''
								}`}
						key={option}
						onMouseEnter={() => setHighlightedIndex(index)}
					>
						{option}
					</li>
				))}
			</ul>
		</div>
	);
};
export default Select;
