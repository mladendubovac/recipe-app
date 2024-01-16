import styled from 'styled-components';
import { PLarge, styledTypography } from '../Typography';

export const RecipeCardWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.shape.borderRadius[2]};
	border: 1px solid ${({ theme }) => theme.colors['gray-100']};
	overflow: hidden;
	cursor: pointer;
	transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
	&:hover {
		background-color: ${({ theme }) => theme.colors['gray-50']};
		border-color: ${({ theme }) => theme.colors['gray-200']};
	}
`;

export const RecipeCardImg = styled.img`
	max-width: ${({ $maxWidth = '140px' }) => `${$maxWidth}`};
	max-height: ${({ $maxHeight = '140px' }) => `${$maxHeight}`};
	border-radius: ${({ theme, $rounded = null }) =>
		$rounded && theme.shape.borderRadius[$rounded]};
	object-fit: fill;
    ${({ theme }) => theme.media.down('md')} {
        max-width: 100%;
        max-height: 100%;
	}
`;

export const RecipeCardInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[5]}`};
	${({ theme }) => theme.media.down('md')} {
		padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
	}
`;

export const RecipeCardMeta = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	gap: ${({ theme }) => theme.spacing[1]};
`;

export const RecipeCardTitle = styled(PLarge)`
	color: ${({ theme }) => theme.colors.black};
	font-weight: 500;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	text-overflow: ellipsis;
	overflow: hidden;
	${({ theme }) => theme.media.down('md')} {
		${styledTypography.pBase};
	}
`;

export const RecipeCardMetaInfoWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[5]};
    ${({ theme }) => theme.media.down('md')} {
    	gap: ${({ theme }) => theme.spacing[1]};
	}
`;

export const RecipeCardAtributes = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[1]};
`;

export const RecipeCardTags = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[1]};
`;
