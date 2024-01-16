import React from 'react';

import { useRecipes } from '../hooks/recipes';

const RecipesContext = React.createContext();

export const useRecipesProvider = () => {
	const context = React.useContext(RecipesContext);
	if (context === undefined) {
		throw new Error('useRecipesProvider must be used within a RecipesProvider');
	}
	return context;
};

export const RecipesProvider = ({ children }) => {
	const { name, setName, recipes, loading } = useRecipes();

	return (
		<RecipesContext.Provider value={{ name, setName, recipes, loading }}>
			{children}
		</RecipesContext.Provider>
	);
};
