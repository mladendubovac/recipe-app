import { useState, useEffect } from 'react';
import { useDebounce } from '../useDebounce';
import { getMealCategories, getMealsByName } from '../../api/recipes';

export const useMealCategories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			const response = await getMealCategories();
			setCategories(response);
		};
		fetchCategories();
	}, []);

	return categories;
};

export const useSearchMeals = (delay) => {
	const [searchResults, setSearchResults] = useState([]);

	const searchHandler = useDebounce(async (search) => {
		const trimmedSearch = search.trim();
		if (trimmedSearch) {
			const response = await getMealsByName(trimmedSearch);
			setSearchResults(response || []);
		} else {
			setSearchResults([]);
		}
	}, delay);

	return { searchResults, searchHandler, setSearchResults };
};
