import { useEffect, useRef, useState } from 'react';

type SingleSelectProps = {
	multiple?: false;
	valueState?: string;
	onChange: (value: string | undefined) => void;
};
type MultipleSelectProps = {
	multiple: true;
	valueState: string[];
	onChange: (value: string[]) => void;
};
type SelectProps = {
	options: string[];
} & (SingleSelectProps | MultipleSelectProps);


export const Select = ({ multiple, valueState, options, onChange }: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [highlightedIndex, setHighlightedIndex] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);


	useEffect(() => {
		if (isOpen) setHighlightedIndex(0);
	}, [isOpen]);

	useEffect(() => {
		const ulElement = containerRef.current?.querySelector(
			'.select-container__options',
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
			if (valueState.includes(option)) {
				onChange(valueState.filter((o) => o !== option));
			} else {
				onChange([...valueState, option]);
			}
		} else {
			if (option !== valueState) onChange(option);
		}
	};

	const isOptionSelected = (option: string) => {
		return multiple ? valueState?.includes(option) : option === valueState;
	};

	return (
		<div
			onBlur={() => setIsOpen(false)}
			onClick={() => setIsOpen((prev) => !prev)}
			tabIndex={0}
			className='select-container'
			ref={containerRef}
		>
			<span className='select-container__span'>
				{multiple
					? valueState?.map((v) => (
							<button
								key={v}
								onClick={(e) => {
									e.stopPropagation();
									selectOption(v);
								}}
								className='select-container__span--option-badge'
								type='button'
							>
								{' '}
								{v} <span className='remove-btn'>&times;</span>{' '}
							</button>
					  ))
					: valueState}
			</span>

			<button
				type='button'
				onClick={(e) => {
					e.stopPropagation();
					clearOptions();
				}}
				className='select-container__clear-btn'
			>
				&times;
			</button>
			<div className='select-container__caret' />
			<ul
				className={`select-container__options ${
					isOpen ? 'select-container__show' : ''
				}`}
			>
				{options.map((option, index) => (
					<li
						onClick={(e) => {
							e.stopPropagation();
							selectOption(option);
							setIsOpen(false);
						}}
						className={`select-container__options--option ${
							isOptionSelected(option)
								? 'select-container__options--selected'
								: ''
						} 
                ${
									index === highlightedIndex
										? 'select-container__options--highlighted'
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
