import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { RecipeDetails } from '../../components/RecipeDetails';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { useRecipeDetails } from '../../hooks/recipes';

jest.mock('../../hooks/recipes', () => ({
	useRecipeDetails: jest.fn()
}));

const mockRecipeDetailsRender = () =>
    render(
        <ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={['/recipe-details/1']}>
                <RecipeDetails />
            </MemoryRouter>
        </ThemeProvider>
    );

describe('RecipeDetails', () => {
	afterEach(() => {
		useRecipeDetails.mockReset();
	});

	it('displays a loader while loading', () => {
		useRecipeDetails.mockReturnValue({
			recipe: null,
			similarRecipes: [],
			loading: true
		});

		mockRecipeDetailsRender();

		expect(screen.getByTestId('loader')).toBeInTheDocument();
	});

	it('displays recipe details when loaded', () => {
		useRecipeDetails.mockReturnValue({
			recipe: {
				idMeal: '1',
				strMeal: 'Test Recipe',
				strInstructions: 'Test Instructions\r\n',
				strIngredient1: 'Test Ingredient',
				strMeasure1: '1 cup',
				strCategory: 'Test Category 1'
			},
			similarRecipes: [],
			loading: false
		});

		mockRecipeDetailsRender();

		expect(screen.getByTestId('recipe-title')).toHaveTextContent('Test Recipe');
		expect(screen.getByText('Test Instructions')).toBeInTheDocument();
		expect(screen.getByText('Test Ingredient')).toBeInTheDocument();
		expect(screen.getByText('1 cup')).toBeInTheDocument();
	});

	it('displays similar recipes in a list', async () => {
		useRecipeDetails.mockReturnValue({
			recipe: {
				idMeal: '1',
				strMeal: 'Test Recipe',
				strInstructions: 'Test Instructions\r\n',
				strIngredient1: 'Test Ingredient',
				strMeasure1: '1 cup',
				strCategory: 'Test Category 1'
			},
			similarRecipes: [
				{
					idMeal: '2',
					strMeal: 'Test Similar Recipe 2'
				},
				{
					idMeal: '3',
					strMeal: 'Test Similar Recipe 3'
				}
			],
			loading: false
		});

		mockRecipeDetailsRender();

		expect(screen.getAllByTestId('recipe-card')).toHaveLength(2);
	});
});
