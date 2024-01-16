import { useMemo, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BreadCrumbs } from '../Breadcrumbs';
import { HorizontalRule } from '../HorizontalRule';
import { Icon } from '../Icon';
import { Link } from '../Link';
import { RecipeCard, RecipeCardImg } from '../RecipeCard';
import {
	RecipeCardButtonsWrapper,
	RecipeCardMainInfo,
	RecipeCardMainInfoDescription,
	RecipeCardMainInfoWrapper,
	RecipeCardMainMetaInfoWrapper,
	RecipeCardMainTagsWrapper,
	RecipeDetailsDescriptionWrapper,
	RecipeDetailsHeader,
	RecipeDetailsHeaderWrapper,
	RecipeDetailsIngredient,
	RecipeDetailsIngredients,
	RecipeDetailsIngredientsWrapper,
	RecipeDetailsInstructions,
	RecipeDetailsInstructionsWrapper,
	RecipeDetailsTitle,
	RecipeDetailsWrapper,
	SimiliarRecipes,
	SimiliarRecipesHeader,
	SimiliarRecipesWrapper
} from './styled';
import { MetaInfo } from '../MetaInfo';
import { Tag } from '../Tag';
import { H1, PSmall } from '../Typography';
import { Button } from '../Button';
import { useRecipeDetails } from '../../hooks/recipes';
import { Loader } from '../Loader';

export const formatMeasure = (measure) => {
	if (!measure) return null;

	const fractions = {
		'1/2': '½',
		'1/3': '⅓',
		'2/3': '⅔',
		'1/4': '¼',
		'3/4': '¾',
		'1/5': '⅕',
		'2/5': '⅖',
		'3/5': '⅗',
		'4/5': '⅘',
		'1/6': '⅙',
		'5/6': '⅚',
		'1/8': '⅛',
		'3/8': '⅜',
		'5/8': '⅝',
		'7/8': '⅞'
	};

	return measure.replace(/(\d+\/\d+)/g, (match) => fractions[match] || match);
};

export const RecipeDetails = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const recipeDetailsRef = useRef(null);

	const { recipe, similarRecipes, loading } = useRecipeDetails(id);

	const ingredientsWithMeasures = useMemo(
		() =>
			recipe &&
			Object.entries(recipe)
				.filter(([key, value]) => key.includes('strIngredient') && value)
				.map(([_, value], index) => ({
					measure: formatMeasure(recipe[`strMeasure${index + 1}`]),
					ingredient: value
				})),
		[recipe]
	);

	const recipeInstructions = useMemo(
		() =>
			recipe &&
			recipe.strInstructions
				.split('\r')
				.filter((item) => item !== '\n')
				.map((item) => item.trim()),

		[recipe]
	);

	const handleGoToRecipeClick = () =>
		recipeDetailsRef.current.scrollIntoView({ behavior: 'smooth' });

	const handleRecipeClick = (id) => navigate(`/recipe-details/${id}`);

	if (loading || !recipe) {
		return <Loader />;
	}

	return (
		<RecipeDetailsWrapper>
			<RecipeDetailsHeaderWrapper>
				<BreadCrumbs
					links={[
						{ label: 'Home', to: '/' },
						{
							label: recipe.strCategory,
							to: `/categories/${recipe.strCategory}`
						},
						{ label: recipe.strMeal, to: `/recipe-details/${recipe.idMeal}` }
					]}
				/>
				<HorizontalRule />
				<Link to="/" iconPosition="left" icon="arrow-left" $gap="1">
					Go back
				</Link>
				<RecipeDetailsHeader>
					<RecipeCardImg
						src={recipe?.strMealThumb}
						$maxWidth="100%"
						$maxHeight="100%"
						$rounded="3"
					/>
					<RecipeCardMainInfoWrapper>
						<RecipeCardMainInfo>
							<RecipeCardMainMetaInfoWrapper>
								<MetaInfo icon="time" text="30m" />
								<MetaInfo icon="difficulty" text="Beginner" />
							</RecipeCardMainMetaInfoWrapper>
							<H1 $weight="bold" data-testid="recipe-title">
								{recipe?.strMeal}
							</H1>
							<RecipeCardMainInfoDescription>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Praesentium esse dolores dignissimos dicta natus repellat et
								mollitia, nihil ullam illo? Quaerat sapiente ducimus ab sequi,
								eum consequuntur! Quisquam, consectetur similique. Voluptatem
								blanditiis ullam quae veritatis ipsa hic maxime ea molestiae.
							</RecipeCardMainInfoDescription>
							<RecipeCardMainTagsWrapper>
								<Tag text={recipe?.strCategory} />
								<Tag text={recipe?.strArea} />
							</RecipeCardMainTagsWrapper>
						</RecipeCardMainInfo>
						<RecipeCardButtonsWrapper>
							<Button onClick={handleGoToRecipeClick}>
								Go to recipe
								<Icon type="arrow-down" width="16" height="16" />
							</Button>
							<Button $variant="secondary">
								Save recipe
								<Icon type="heart-outline" width="16" height="16" />
							</Button>
						</RecipeCardButtonsWrapper>
					</RecipeCardMainInfoWrapper>
				</RecipeDetailsHeader>
			</RecipeDetailsHeaderWrapper>
			<RecipeDetailsDescriptionWrapper ref={recipeDetailsRef}>
				<RecipeDetailsIngredientsWrapper>
					<RecipeDetailsTitle>Ingredients</RecipeDetailsTitle>
					<RecipeDetailsIngredients>
						{ingredientsWithMeasures?.map(({ ingredient, measure }, index) => (
							<RecipeDetailsIngredient key={`${ingredient}${measure}${index}`}>
								<PSmall $weight="bold">{measure}</PSmall>
								<PSmall $color="gray-700">{ingredient}</PSmall>
							</RecipeDetailsIngredient>
						))}
					</RecipeDetailsIngredients>
				</RecipeDetailsIngredientsWrapper>
				<RecipeDetailsInstructionsWrapper>
					<RecipeDetailsTitle>Instructions</RecipeDetailsTitle>
					<RecipeDetailsInstructions>
						{recipeInstructions?.map((item) => (
							<PSmall key={item} $color="gray-700">
								{item}
							</PSmall>
						))}
					</RecipeDetailsInstructions>
				</RecipeDetailsInstructionsWrapper>
			</RecipeDetailsDescriptionWrapper>
			<HorizontalRule />
			<SimiliarRecipesWrapper>
				<SimiliarRecipesHeader>
					<RecipeDetailsTitle>
						More {recipe?.strCategory} Recipes
					</RecipeDetailsTitle>
					<Link to="/recipes" $gap="1">
						See all
					</Link>
				</SimiliarRecipesHeader>
				<SimiliarRecipes>
					{similarRecipes.map((recipe) => (
						<RecipeCard
							key={recipe.idMeal}
							idMeal={recipe.idMeal}
							strMealThumb={recipe.strMealThumb}
							strMeal={recipe.strMeal}
							strCategory={recipe.strCategory}
							strArea={recipe.strArea}
							onClick={handleRecipeClick}
						/>
					))}
				</SimiliarRecipes>
			</SimiliarRecipesWrapper>
		</RecipeDetailsWrapper>
	);
};
