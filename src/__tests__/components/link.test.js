import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Link } from '../../components/Link';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

const mockRenderLink = (props = null) =>
	render(
		<ThemeProvider theme={theme}>
			<MemoryRouter initialEntries={['/recipe-details/1']}>
				<Link {...props} />
			</MemoryRouter>
		</ThemeProvider>
	);

describe('Link', () => {
	it('renders without crashing', () => {
		mockRenderLink({
			children: 'Test Link',
			to: '/test-link'
		});
	});

	it('renders the children correctly', () => {
		mockRenderLink({
			children: 'Test Link',
			to: '/test-link'
		});
		expect(screen.getByText('Test Link')).toBeInTheDocument();
	});

    it('navigates to the correct route', () => {
        mockRenderLink({
            children: 'Test Link',
            to: '/test-link'
        });
        const link = screen.getByText('Test Link');
        expect(link).toHaveAttribute('href', '/test-link');
    });
});
