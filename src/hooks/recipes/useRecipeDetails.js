import { useState, useEffect } from 'react';
import { getMealById, getMealsByName } from '../../api/recipes';

export const useRecipeDetails = (id) => {
	const [recipe, setRecipe] = useState(null);
	const [similarRecipes, setSimilarRecipes] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchRecipeAndSimilar = async () => {
			setLoading(true);
			try {
				const recipeResponse = await getMealById(id);
				setRecipe(recipeResponse);
				if (recipeResponse) {
					const similarRecipesResponse = await getMealsByName(
						recipeResponse.strCategory
					);
					setSimilarRecipes(
						similarRecipesResponse
							? similarRecipesResponse
									.sort(() => Math.random() - Math.random())
									.slice(0, 2)
							: []
					);
				}
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};
		fetchRecipeAndSimilar();
		return () => {
			setRecipe(null);
			setSimilarRecipes([]);
		};
	}, [id]);

	return { recipe, similarRecipes, loading };
};
