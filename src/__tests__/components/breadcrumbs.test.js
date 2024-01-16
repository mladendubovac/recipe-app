import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BreadCrumbs } from '../../components/Breadcrumbs';
import { theme } from '../../theme';
import { MemoryRouter } from 'react-router-dom';

const links = [
	{ to: '/', label: 'Home' },
	{ to: '/category', label: 'Category' },
	{ to: '/recipe', label: 'Recipe' }
];

const mockBreadcrumbsRender = (links = []) =>
	render(
		<ThemeProvider theme={theme}>
			<MemoryRouter initialEntries={['/recipe-details/1']}>
				<BreadCrumbs links={links} />
			</MemoryRouter>
		</ThemeProvider>
	);

describe('BreadCrumbs', () => {
	it('renders without crashing', () => {
		mockBreadcrumbsRender();
	});

	it('renders the correct number of links', () => {
		mockBreadcrumbsRender(links);

		links.forEach(({ label }) => {
			expect(screen.getByText(label)).toBeInTheDocument();
		});

		expect(screen.getAllByTestId('breadcrumb')).toHaveLength(links.length);
	});
});
