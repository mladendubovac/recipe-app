import { render, screen } from '@testing-library/react';
import { RecipeCard } from '../../components/RecipeCard';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

// Mock the Tag and MetaInfo components
// jest.mock('../../components/Tag', () => () => <div data-testid="mock-tag" />);
// jest.mock('../../components/MetaInfo', () => () => <div data-testid="mock-meta-info" />);

jest.mock('../../components/MetaInfo', () => ({
	MetaInfo: () => <div data-testid="mock-meta-info" />
}));

describe('RecipeCard', () => {
	it('renders without crashing', () => {
		render(
			<ThemeProvider theme={theme}>
				<RecipeCard />
			</ThemeProvider>
		);
	});

	it('renders the meal thumbnail correctly', () => {
		render(
			<ThemeProvider theme={theme}>
				<RecipeCard strMealThumb="test.jpg" />
			</ThemeProvider>
		);
		const imageElement = screen.getByRole('img');
		expect(imageElement).toHaveAttribute('src', 'test.jpg/preview');
	});

	it('renders the meal title correctly', () => {
		render(
			<ThemeProvider theme={theme}>
				<RecipeCard strMeal="Test Meal" />
			</ThemeProvider>
		);
		expect(screen.getByText('Test Meal')).toBeInTheDocument();
	});

	it('renders the category and area tags correctly', () => {
		render(
			<ThemeProvider theme={theme}>
				<RecipeCard strCategory="Test Category" strArea="Test Area" />
			</ThemeProvider>
		);
		expect(screen.getByText('Test Category')).toBeInTheDocument();
		expect(screen.getByText('Test Area')).toBeInTheDocument();
	});

	it('renders the meta info correctly', () => {
		render(
			<ThemeProvider theme={theme}>
				<RecipeCard />
			</ThemeProvider>
		);
        expect(screen.getAllByTestId('mock-meta-info')).toHaveLength(2);
	});
});
