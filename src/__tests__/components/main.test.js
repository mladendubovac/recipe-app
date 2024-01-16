import { render, screen, fireEvent } from '@testing-library/react';
import { Main } from '../../components/Main';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

jest.mock('react-router-dom', () => ({
	useNavigate: () => jest.fn(),
	useLocation: () => ({ pathname: '/' })
}));

jest.mock('../../hooks/recipes', () => ({
	useSearchMeals: () => ({
		searchResults: [],
		searchHandler: jest.fn(),
		setSearchResults: jest.fn()
	})
}));

jest.mock('../../context', () => ({
	useCategoriesProvider: () => []
}));

describe('Main', () => {
	it('renders without crashing', () => {
		render(
			<ThemeProvider theme={theme}>
				<Main />
			</ThemeProvider>
		);
	});

	it('renders the children correctly', () => {
		render(
			<ThemeProvider theme={theme}>
				<Main>Test Child</Main>
			</ThemeProvider>
		);
		expect(screen.getByText('Test Child')).toBeInTheDocument();
	});

	it('renders the search bar', () => {
		render(
			<ThemeProvider theme={theme}>
				<Main />
			</ThemeProvider>
		);
		const searchBar = screen.getByPlaceholderText('Search for any recipe');
		expect(searchBar).toBeInTheDocument();
	});

	it('handles search input correctly', () => {
		render(
			<ThemeProvider theme={theme}>
				<Main>Test Child</Main>
			</ThemeProvider>
		);
		const searchBar = screen.getByPlaceholderText('Search for any recipe');
		fireEvent.change(searchBar, { target: { value: 'test' } });
		expect(searchBar.value).toBe('test');
	});
});
