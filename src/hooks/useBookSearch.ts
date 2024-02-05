import { useEffect, useState } from 'react';

interface Props {
	query: string;
	pageNumber: number;
}

interface ApiBooks {
	docs: Docs[];
}

interface Docs {
	title: string;
}

type TypeBooks = string[]

const searchBooks = async ({ query, pageNumber }: Props): Promise<ApiBooks> => {
	const url = `https://openlibrary.org/search.json?q=${query}&page=${pageNumber}`;
	const resp = await fetch(url);
	const data = await resp.json();

	return data;
};

export const useBookSearch = ({ query, pageNumber }: Props) => {
	const [books, setBooks] = useState<TypeBooks>([]);
	const [isLoading, setLoading] = useState(false);
	const [isError, setError] = useState(false);
	const [hasMore, setHasMore] = useState(false);

	const debouncedQuery = useDebounce({ value: query, delay: 1000 });

	useEffect(() => {
		setBooks([]);
	}, [debouncedQuery]);

	useEffect(() => {
		if (debouncedQuery === '') return;
		setLoading(true);
		setError(false);
		searchBooks({ query: debouncedQuery, pageNumber })
			.then((resp) => {
				setBooks((prevBooks) => {
					return [...new Set([...prevBooks, ...resp.docs.map((b) => b.title)])];
				});
				setHasMore(resp.docs.length > 0);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);

				setError(true);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [debouncedQuery, pageNumber]);

	return { books, isLoading, isError, hasMore };
};

export function useDebounce<T>({
	value,
	delay = 500,
}: { value: T; delay: number }) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => clearTimeout(timer);
	}, [value, delay]);

	return debouncedValue;
}
