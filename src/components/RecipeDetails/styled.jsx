import styled from 'styled-components';
import { H2, PSmall, styledTypography } from '../Typography';

export const RecipeDetailsWrapper = styled.div`
	grid-column: 1 / -1;
	background-color: ${({ theme }) => theme.colors.white};
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[20]};
`;

export const RecipeDetailsHeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: ${({ theme }) => theme.spacing[6]};
	height: 100%;
`;

export const RecipeDetailsHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	align-items: center;
	max-height: 291px;
	gap: ${({ theme }) => theme.spacing[6]};
	border-radius: ${({ theme }) => theme.shape.borderRadius[3]};
	${({ theme }) => theme.media.down('lg')} {
		flex-direction: column;
		align-items: center;
		max-height: 100%;
	}
`;

export const RecipeCardMainInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	${({ theme }) => theme.media.down('lg')} {
		gap: ${({ theme }) => theme.spacing[6]};
	}
`;

export const RecipeCardMainInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: ${({ theme }) => theme.spacing[3]};
	height: 100%;
`;

export const RecipeCardMainMetaInfoWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[5]};
`;

export const RecipeCardMainInfoDescription = styled(PSmall)`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	text-overflow: ellipsis;
	overflow: hidden;
	color: ${({ theme }) => theme.colors['gray-700']};
	font-weight: 400;
`;

export const RecipeCardMainTagsWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[1]};
`;

export const RecipeCardButtonsWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[3]};
`;

export const RecipeDetailsDescriptionWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[6]};
	width: 100%;
	${({ theme }) => theme.media.down('lg')} {
		flex-direction: column;
		align-items: center;
		gap: ${({ theme }) => theme.spacing[10]};
	}
`;

export const RecipeDetailsIngredientsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[6]};
	width: 100%;
	max-width: 291px;
	height: 100%;
	${({ theme }) => theme.media.down('lg')} {
		max-width: 100%;
	}
`;

export const RecipeDetailsTitle = styled(H2)`
	font-weight: 400;
    ${styledTypography.h3};
`;

export const RecipeDetailsIngredients = styled.div`
	display: flex;
	flex-direction: column;
`;

export const RecipeDetailsIngredient = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[2]};
`;

export const RecipeDetailsInstructionsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[6]};
	width: 100%;
`;

export const RecipeDetailsInstructions = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[6]};
	width: 100%;
`;

export const SimiliarRecipesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[6]};
	width: 100%;
`;

export const SimiliarRecipesHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

export const SimiliarRecipes = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-items: center;
	gap: ${({ theme }) => theme.spacing[6]};
	${({ theme }) => theme.media.down('lg')} {
		grid-template-columns: 1fr;
	}
`;
