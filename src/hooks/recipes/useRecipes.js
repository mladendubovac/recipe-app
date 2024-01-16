import { useState, useEffect } from 'react';
import { getMealsByName } from '../../api/recipes';

export const useRecipes = () => {
	const [name, setName] = useState('chicken');
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchRecipes = async () => {
			const response = await getMealsByName(name);
			setRecipes(response);
			setLoading(false);
		};
		fetchRecipes();
	}, [name]);

	return { name, setName, recipes, loading };
};
