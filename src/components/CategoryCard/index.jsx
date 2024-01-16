import {
	CategoryCardImg,
	CategoryCardTitle,
	CategoryCardWrapper
} from './styled';

export const CategoryCard = ({ strCategory, strCategoryThumb }) => {
	return (
		<CategoryCardWrapper>
			<CategoryCardImg src={`${strCategoryThumb}`} alt={strCategory} />
			<CategoryCardTitle>{strCategory}</CategoryCardTitle>
		</CategoryCardWrapper>
	);
};
