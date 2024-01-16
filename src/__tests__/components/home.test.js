import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { RecipesProvider } from '../../context';
import { Home } from '../../components/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

jest.mock('../../hooks/recipes', () => ({
	useRecipes: () => ({
		recipes: [
			{
				idMeal: '1',
				strMeal: 'Test Recipe',
				strMealThumb: 'test.jpg'
			},
			{
				idMeal: '2',
				strMeal: 'Test Recipe 2',
				strMealThumb: 'test2.jpg'
			},
			{
				idMeal: '3',
				strMeal: 'Test Recipe 3',
				strMealThumb: 'test3.jpg'
			},
			{
				idMeal: '4',
				strMeal: 'Test Recipe 4',
				strMealThumb: 'test4.jpg'
			},
			{
				idMeal: '5',
				strMeal: 'Test Recipe 5',
				strMealThumb: 'test5.jpg'
			}
		],
		name: 'test',
		setName: jest.fn(),
		loading: false
	})
}));

const mockHomeRender = () =>
	render(
		<ThemeProvider theme={theme}>
			<MemoryRouter initialEntries={['/recipe-details/1']}>
				<RecipesProvider>
					<Home />
				</RecipesProvider>
			</MemoryRouter>
		</ThemeProvider>
	);

describe('Home component', () => {
	it('renders and displays recipe title', () => {
		mockHomeRender();
		const titleElement = screen.getByText('Test Recipe');
		expect(titleElement).toBeInTheDocument();
	});

	it('renders and displays recipe image', () => {
		mockHomeRender();
		const imageElement = screen.getByTestId('random-recipe-img');
		expect(imageElement).toHaveAttribute('src', 'test.jpg');
	});

	it('renders and displays recipe cards', () => {
		mockHomeRender();
		const recipeCards = screen.getAllByTestId('recipe-card');
		expect(recipeCards).toHaveLength(4);
	});
});
