import { render, screen } from '@testing-library/react';
import { CategoryCard } from '../../components/CategoryCard';
import { theme } from '../../theme';
import { ThemeProvider } from 'styled-components';

describe('CategoryCard', () => {
	it('renders without crashing', () => {
		render(
			<ThemeProvider theme={theme}>
				<CategoryCard strCategory="Recipe" strCategoryThumb="recipe.jpg" />
			</ThemeProvider>
		);
	});

	it('renders the category title correctly', () => {
		const category = 'Drinks';
		render(
			<ThemeProvider theme={theme}>
				<CategoryCard strCategory={category} strCategoryThumb="" />
			</ThemeProvider>
		);
		expect(screen.getByText(category)).toBeInTheDocument();
	});

	it('renders the category image correctly', () => {
		const category = 'Drinks';
		const thumb = 'https://example.com/image.jpg/preview';
		render(
			<ThemeProvider theme={theme}>
				<CategoryCard strCategory={category} strCategoryThumb={thumb} />
			</ThemeProvider>
		);
		const img = screen.getByRole('img');
		expect(img).toHaveAttribute('src', thumb);
		expect(img).toHaveAttribute('alt', category);
	});
});
