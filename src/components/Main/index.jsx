import { useRef, useState } from 'react';
import {
	MainWrapper,
	MainHeader,
	MainTitle,
	MainSearchBarWrapper,
	MainSearchBar,
	MainSearchBarIconButton,
	MainExpandedSearchOverlay,
	MainExpandedSearchOverlayTabs,
	MainSearchBarForm,
	MainExpandedSearchOverlaySearchResults,
	MainExpandedSearchOverlaySearchResultsEmpty,
	MainExpandedSearchOverlaySearchResultsEmptyImage,
	MainInnerWrapper
} from './styled';
import { Tab } from '../Tab';
import { PTiny } from '../Typography';
import { RecipeCard } from '../RecipeCard';
import { useClickOutside } from '../../hooks';
import { CategoryCard } from '../CategoryCard';
import { Icon } from '../Icon';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearchMeals } from '../../hooks/recipes';
import { useCategoriesProvider } from '../../context';

const tabs = [
	{
		value: 'recipes',
		label: 'Recipes',
		icon: 'recipes'
	},
	{
		value: 'category',
		label: 'Category',
		icon: 'category'
	},
	{
		value: 'area',
		label: 'Area',
		icon: 'area'
	},
	{
		value: 'ingredient',
		label: 'Ingredient',
		icon: 'ingredient'
	}
];

const CategoryCards = ({ categories, search }) =>
	categories
		.filter(({ strCategory }) =>
			strCategory.toLowerCase().includes(search.toLowerCase())
		)
		.map((category) => (
			<CategoryCard
				key={category.idCategory}
				strCategory={category.strCategory}
				strCategoryThumb={category.strCategoryThumb}
				strCategoryDescription={category.strCategoryDescription}
			/>
		));

const RecipeCards = ({ searchResults, handleRecipeClick }) =>
	searchResults.map((recipe) => (
		<RecipeCard
			key={recipe.idMeal}
			idMeal={recipe.idMeal}
			strMealThumb={recipe.strMealThumb}
			strMeal={recipe.strMeal}
			strCategory={recipe.strCategory}
			strArea={recipe.strArea}
			onClick={handleRecipeClick}
		/>
	));

const EmptySearchResults = ({ search }) => (
	<MainExpandedSearchOverlaySearchResultsEmpty $black={search}>
		{search ? (
			<>
				<MainExpandedSearchOverlaySearchResultsEmptyImage
					src="/assets/images/empty.svg"
					alt="empty"
				/>
				<PTiny>Sorry, there are no recipes like that</PTiny>
			</>
		) : (
			<PTiny>Start Searching for your recipe</PTiny>
		)}
	</MainExpandedSearchOverlaySearchResultsEmpty>
);

export const Main = ({ children }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const searchBarWrapperRef = useRef(null);
	const searchBarInputRef = useRef(null);

	const [search, setSearch] = useState('');
	const [expandedSearchOverlay, setExpandedSearchOverlay] = useState(false);
	const [tab, setTab] = useState('recipes');

	useClickOutside(searchBarWrapperRef, () => handleResetSearch());

	const categories = useCategoriesProvider();
	const { searchResults, searchHandler, setSearchResults } =
		useSearchMeals(250);

	const handleSearchInput = ({ target: { value } }) => {
		setSearch(value);
		setExpandedSearchOverlay(value !== '' || expandedSearchOverlay);
		if (tab === 'recipes') {
			searchHandler(value);
		}
	};

	const handleSearchBarIconButtonClick = (e) => {
		e.stopPropagation();
		if (!search && !expandedSearchOverlay) {
			searchBarInputRef.current.focus();
			setExpandedSearchOverlay(true);
		} else if (expandedSearchOverlay) {
			handleResetSearch();
		}
	};

	const handleResetSearch = () => {
		setSearch('');
		setExpandedSearchOverlay(false);
		setSearchResults([]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setExpandedSearchOverlay(true);
	};

	const handleRecipeClick = (id) => {
		handleResetSearch();
		navigate(`/recipe-details/${id}`);
	};

	return (
		<MainWrapper>
			<MainInnerWrapper>
				<MainHeader
					$expanded={expandedSearchOverlay}
					$hidden={pathname !== '/'}
				>
					<MainTitle $hidden={expandedSearchOverlay}>
						Discover Recipes
					</MainTitle>
					<MainSearchBarWrapper
						ref={searchBarWrapperRef}
						$expanded={expandedSearchOverlay}
					>
						<MainSearchBarForm
							onSubmit={handleSubmit}
							$expanded={expandedSearchOverlay}
						>
							<MainSearchBar
								ref={searchBarInputRef}
								type="text"
								placeholder="Search for any recipe"
								value={search}
								onChange={handleSearchInput}
							/>
							<MainSearchBarIconButton
								type="button"
								onClick={handleSearchBarIconButtonClick}
							>
								<Icon
									type={search || expandedSearchOverlay ? 'close' : 'search'}
								/>
							</MainSearchBarIconButton>
						</MainSearchBarForm>
						<MainExpandedSearchOverlay
							$expanded={expandedSearchOverlay}
							$activeTab={tab}
						>
							<MainExpandedSearchOverlayTabs>
								{tabs.map(({ value, label, icon }) => (
									<Tab
										key={value}
										active={value === tab}
										onClick={() => setTab(value)}
									>
										<Icon type={icon} />
										{label}
									</Tab>
								))}
							</MainExpandedSearchOverlayTabs>
							<MainExpandedSearchOverlaySearchResults $activeTab={tab}>
								{tab === 'category' ? (
									<CategoryCards categories={categories} search={search} />
								) : searchResults?.length > 0 ? (
									<RecipeCards
										searchResults={searchResults}
										handleRecipeClick={handleRecipeClick}
									/>
								) : (
									<EmptySearchResults search={search} />
								)}
							</MainExpandedSearchOverlaySearchResults>
						</MainExpandedSearchOverlay>
					</MainSearchBarWrapper>
				</MainHeader>
				{children}
			</MainInnerWrapper>
		</MainWrapper>
	);
};
