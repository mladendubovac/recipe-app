import { render } from '@testing-library/react';
import { useLocation } from 'react-router-dom';
import { Grid } from '../../components/Grid';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useLocation: jest.fn()
}));

describe('Grid', () => {
	it('renders without crashing', () => {
		useLocation.mockReturnValue({ pathname: '/' });

		render(
			<ThemeProvider theme={theme}>
				<Grid />
			</ThemeProvider>
		);
	});
});
