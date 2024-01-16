import styled from 'styled-components';
import { Icon } from '../Icon';
import { styledTypography } from '../Typography';

export const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: ${({ theme }) => theme.spacing[2]};
	height: 100%;
	border-radius: ${({ theme }) => theme.shape.borderRadius[2]};
	cursor: pointer;
	transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
	font-family: ${({ theme, $weight }) => theme.typography.fontFamily[$weight]};
	${styledTypography.pBase};
	padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
	max-width: fit-content;
	max-height: 48px;
	text-decoration: none;

	background-color: ${({ theme, $variant }) =>
		$variant === 'primary' ? theme.colors['green-500'] : theme.colors.white};
	color: ${({ theme, $variant }) =>
		$variant === 'primary' ? theme.colors.white : theme.colors['green-600']};
	border: ${({ theme, $variant }) =>
		$variant === 'primary' ? 'none' : `1px solid ${theme.colors['green-500']}`};

	${Icon} {
		fill: ${({ theme, $variant }) =>
			$variant === 'secondary' && theme.colors['green-600']};
	}

	&:hover {
		background-color: ${({ theme, $variant }) =>
			$variant === 'primary'
				? theme.colors['green-600']
				: theme.colors['green-500']};
		color: ${({ theme }) => theme.colors.white};
		${Icon} {
			fill: ${({ theme, $variant }) =>
				$variant === 'secondary' && theme.colors.white};
		}
	}

	&:focus-visible {
		outline: none;
	}

	${({ theme }) => theme.media.down('md')} {
		max-height: 40px;
		padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[5]}`};
		${styledTypography.pSmall};
	}
`;
