import styled from 'styled-components';

export const RecipesWrapper = styled.div`
	grid-column: 1 / -1;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[10]};
	${({ theme }) => theme.media.down('lg')} {
		gap: ${({ theme }) => theme.spacing[20]};
	}
`;

export const RecipesHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: ${({ theme }) => theme.spacing[6]};
`;
