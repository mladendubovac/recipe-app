import styled from 'styled-components';

export const ErrorWrapper = styled.div`
	grid-column: 1 / -1;
	width: 100%;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[4]};
`;
