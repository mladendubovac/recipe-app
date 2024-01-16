import styled from 'styled-components';
import { PTiny } from '../Typography';
import { Icon } from '../Icon';

export const MetaInfoWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[1]};
	${Icon} {
		fill: ${({ theme }) => theme.colors['gray-300']};
	}
`;

export const MetaInfoText = styled(PTiny)`
	color: ${({ theme }) => theme.colors['gray-700']};
	font-weight: 400;
`;
