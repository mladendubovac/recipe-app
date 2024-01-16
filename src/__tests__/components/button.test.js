import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { theme } from '../../theme';
import { Button } from '../../components/Button';
import { ThemeProvider } from 'styled-components';

describe('Button', () => {
	it('renders without crashing', () => {
		render(
			<ThemeProvider theme={theme}>
				<Button />
			</ThemeProvider>
		);
	});

	it('renders children correctly', () => {
		const buttonText = 'Click me';

		render(
			<ThemeProvider theme={theme}>
				<Button>{buttonText}</Button>
			</ThemeProvider>
		);

		expect(screen.getByText(buttonText)).toBeInTheDocument();
	});

	it('has the correct type', () => {
		const buttonText = 'Click me';

		render(
			<ThemeProvider theme={theme}>
				<Button type="button">{buttonText}</Button>
			</ThemeProvider>
		);

		const button = screen.getByText(buttonText);
		expect(button).toHaveAttribute('type', 'button');
	});

	it('triggers a function when clicked', () => {
		const buttonText = 'Click me';
		const handleClick = jest.fn();

		render(
			<ThemeProvider theme={theme}>
				<Button onClick={handleClick}>{buttonText}</Button>
			</ThemeProvider>
		);

		const button = screen.getByText(buttonText);
		userEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
