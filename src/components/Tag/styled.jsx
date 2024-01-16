import styled from 'styled-components';
import { styledTypography } from '../Typography';

export const TagWrapper = styled.div`
	${styledTypography.pTiny};
	color: ${({ theme }) => theme.colors['blue-600']};
	background-color: ${({ theme }) => theme.colors['blue-100']};
	padding: ${({ theme }) => `${theme.spacing[0.5]} ${theme.spacing[2]}`};
	border-radius: ${({ theme }) => theme.shape.borderRadius[1]};
`;
