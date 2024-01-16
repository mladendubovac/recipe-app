import styled from 'styled-components';
import { H1, H2, styledTypography } from '../Typography';

export const HomeWrapper = styled.div`
	grid-column: 1 / -1;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[30]};
	${({ theme }) => theme.media.down('lg')} {
		gap: ${({ theme }) => theme.spacing[20]};
	}
`;

export const HomeRandomRecipeWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 256px;
	background-color: ${({ theme }) => theme.colors['gray-100']};
	border-radius: ${({ theme }) => theme.shape.borderRadius[3]};
	padding: ${({ theme }) => theme.spacing[10]};
	position: relative;
	${({ theme }) => theme.media.down('lg')} {
		height: 176px;
	}
`;

export const HomeRandomRecipeTitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	max-width: 410px;
`;

export const HomeRandomRecipeTitle = styled(H1)`
	${({ theme }) => theme.media.down('lg')} {
		${styledTypography.h3}
	}
`;

export const HomeRandomRecipeImg = styled.img`
	object-fit: fill;
	height: 302px;
	width: 348px;
	border-radius: ${({ theme }) => theme.shape.borderRadius[3]};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
	${({ theme }) => theme.media.down('lg')} {
		height: 164px;
        width: 188px;
	}
	${({ theme }) => theme.media.down('md')} {
		height: 110px;
		width: 126px;
		position: absolute;
		bottom: -15%;
		right: 5%;
	}
`;

export const HomeRecipes = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: ${({ theme }) => theme.spacing[6]};
	width: 100%;
`;

export const HomeRecipesHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const HomeRecipesTitle = styled(H2)`
	color: ${({ theme }) => theme.colors.black};
	font-weight: 500;
	${({ theme }) => theme.media.down('lg')} {
		${styledTypography.h3}
	}
`;

export const HomeRecipesList = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-items: center;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[6]};
	width: 100%;
	${({ theme }) => theme.media.down('lg')} {
		grid-template-columns: 1fr;
	}
	${({ theme }) => theme.media.down('md')} {
		grid-auto-rows: minmax(auto, 120px);
	}
`;
