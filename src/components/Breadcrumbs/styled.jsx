import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { styledTypography } from '../Typography';

export const BreadcrumbsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	max-height: 20px;
	height: 100%;
	gap: ${({ theme }) => theme.spacing[1]};
	${Icon} {
		width: 16px;
		fill: ${({ theme }) => theme.colors['gray-300']};
	}
`;

export const BreadcrumbItem = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	gap: ${({ theme }) => theme.spacing[1]};
`;

export const BreadcrumbLink = styled(Link)`
	width: 100%;
	height: 100%;
	font-weight: 500;
	text-decoration: none;
	color: ${({ theme, $color = 'black' }) => theme.colors[$color]};
	${styledTypography.pTiny};
`;
