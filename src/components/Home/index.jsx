import {
	HomeWrapper,
	HomeRandomRecipeImg,
	HomeRandomRecipeTitleWrapper,
	HomeRandomRecipeTitle,
	HomeRecipesHeader,
	HomeRecipes,
	HomeRecipesTitle,
	HomeRecipesList,
	HomeRandomRecipeWrapper
} from './styled';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { RecipeCard } from '../RecipeCard';
import { Link } from '../Link';
import { Loader } from '../Loader';
import { useRecipesProvider } from '../../context';

export const Home = () => {
	const navigate = useNavigate();

	const { recipes, loading } = useRecipesProvider();

	if (loading || !recipes.length) {
		return <Loader />;
	}

	const handleRecipeClick = (id) => navigate(`/recipe-details/${id}`);

	return (
		<HomeWrapper data-testid="home">
			<HomeRandomRecipeWrapper>
				<HomeRandomRecipeTitleWrapper>
					<HomeRandomRecipeTitle $weight="bold">
						{recipes?.at(0)?.strMeal}
					</HomeRandomRecipeTitle>
					<Button onClick={() => handleRecipeClick(recipes?.at(0)?.idMeal)}>
						View Recipe
					</Button>
				</HomeRandomRecipeTitleWrapper>
				<HomeRandomRecipeImg
                    data-testid="random-recipe-img"
					src={recipes?.at(0)?.strMealThumb}
					alt={recipes?.at(0)?.strMeal}
				/>
			</HomeRandomRecipeWrapper>
			<HomeRecipes>
				<HomeRecipesHeader>
					<HomeRecipesTitle>New Recipes</HomeRecipesTitle>
					<Link to="/recipes">See all recipes</Link>
				</HomeRecipesHeader>
				<HomeRecipesList>
					{recipes.slice(1, 5).map((recipe, index) => (
						<RecipeCard key={index} onClick={handleRecipeClick} {...recipe} />
					))}
				</HomeRecipesList>
			</HomeRecipes>
		</HomeWrapper>
	);
};
