import React from 'react';

import { useMealCategories } from '../hooks/recipes';

const CategoriesContext = React.createContext();

export const useCategoriesProvider = () => {
	const context = React.useContext(CategoriesContext);
	if (context === undefined) {
		throw new Error(
			'useCategoriesProvider must be used within a CategoriesProvider'
		);
	}
	return context;
};

export const CategoriesProvider = ({ children }) => {
	const categories = useMealCategories();

	return (
		<CategoriesContext.Provider value={categories}>
			{children}
		</CategoriesContext.Provider>
	);
};
