import styled from 'styled-components';

export const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: minmax(auto, 260px) 1fr;
	grid-template-areas: 'sidebar main';
	justify-items: center;
	gap: ${({ theme }) => theme.spacing[2]};
	height: 100dvh;
	padding: ${({ theme }) => theme.spacing[2]};
	${({ theme }) => theme.media.down('lg')} {
		grid-template-columns: minmax(auto, 256px) 1fr;
	}
	${({ theme }) => theme.media.down('md')} {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		grid-template-areas:
			'sidebar'
			'main';
		${({ $hideHeaderOnMobile }) =>
			$hideHeaderOnMobile &&
			`
            grid-template-areas:
                'main';
        `};
		gap: ${({ theme }) => theme.spacing[3]};
	}
`;
