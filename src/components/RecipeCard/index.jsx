import { useMemo } from 'react';
import {
	RecipeCardImg,
	RecipeCardInfoWrapper,
	RecipeCardMeta,
	RecipeCardMetaInfoWrapper,
	RecipeCardTags,
	RecipeCardTitle,
	RecipeCardWrapper
} from './styled';
import { Tag } from '../Tag';
import { MetaInfo } from '../MetaInfo';

export * from './styled';

export const RecipeCard = ({
	idMeal,
	strMealThumb,
	strMeal,
	strCategory,
	strArea,
	onClick
}) => {
	const handleOnClick = () => onClick(idMeal);

	const randomTime = useMemo(() => {
		const hours = Math.floor(Math.random() * 3);
		const minutes = Math.floor(Math.random() * 3 + 1) * 15;
		return `${hours > 0 ? `${hours}h` : ''} ${minutes}m`;
	}, []);

	const randomDifficulty = useMemo(() => {
		const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
		return difficulties[Math.floor(Math.random() * difficulties.length)];
	}, []);

	return (
		<RecipeCardWrapper onClick={handleOnClick} data-testid="recipe-card">
			<RecipeCardImg src={`${strMealThumb}/preview`} alt={strMeal} />
			<RecipeCardInfoWrapper>
				<RecipeCardMeta>
					<RecipeCardTitle $weight="medium">{strMeal}</RecipeCardTitle>
					<RecipeCardMetaInfoWrapper>
						<MetaInfo text={randomTime} icon="time" />
						<MetaInfo text={randomDifficulty} icon="difficulty" />
					</RecipeCardMetaInfoWrapper>
				</RecipeCardMeta>
				<RecipeCardTags>
					<Tag text={strCategory} />
					<Tag text={strArea} />
				</RecipeCardTags>
			</RecipeCardInfoWrapper>
		</RecipeCardWrapper>
	);
};
