import { RecipesHeader, RecipesWrapper } from './styled';
import { Link } from '../Link';
import { PBase } from '../Typography';

export const Recipes = () => {
	return (
		<RecipesWrapper>
			<RecipesHeader>
				<Link to="/" iconPosition="left" icon="arrow-left" $gap="1">
					Go back
				</Link>
				<PBase>To be implemented...</PBase>
			</RecipesHeader>
		</RecipesWrapper>
	);
};
