import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { styledTypography } from '../Typography';

export const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	gap: ${({ theme, $gap = 2 }) => theme.spacing[$gap]};
	max-height: 24px;
    ${styledTypography.pBase};
	color: ${({ theme }) => theme.colors['green-600']};
	text-decoration: none;
	position: relative;
	${Icon} {
		fill: ${({ theme }) => theme.colors['green-600']};
		width: 16px;
		height: 16px;
	}
	&:focus-visible {
		outline: none;
	}
	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 1px;
		background: ${({ theme }) => theme.colors['green-600']};
		transition: width 0.3s ease-in-out;
	}
	&:hover::after {
		width: 100%;
	}
`;
