import { ChangeEvent, useState, useRef, useCallback } from 'react';
import { useBookSearch } from '@/hooks/useBookSearch';

const InfiniteScroll = () => {
	const [query, setQuery] = useState('');
	const [pageNumber, setPageNumber] = useState(1);
	const { books, isLoading, isError, hasMore } = useBookSearch({
		query,
		pageNumber,
	});

	const observer = useRef<IntersectionObserver>();
	const lastBookElementRef = useCallback(
		(element: HTMLDivElement) => {
			if (isLoading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPageNumber((prev) => prev + 1);
				}
			});
			if (element) observer.current.observe(element);
		},
		[isLoading, hasMore],
	);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		setPageNumber(1);
	};

	return (
		<>
			<input type='text' value={query} name='' id='' onChange={handleSearch} />

			<div>
				{books.map((book, index) => {
					if (books.length === index + 1) {
						return (
							<div ref={lastBookElementRef} key={book}>
								{book}
							</div>
						);
					} else {
						return <div key={book}>{book}</div>;
					}
				})}
			</div>

			<div>{isLoading && 'Loading...'}</div>
			<div>{isError && 'Error...'}</div>
			<div>{!hasMore && 'No results'}</div>
		</>
	);
};

export default InfiniteScroll;
