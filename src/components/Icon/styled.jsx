import styled from 'styled-components';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as RecipesIcon } from '../../assets/icons/recipes.svg';
import { ReactComponent as CommunityIcon } from '../../assets/icons/community.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';
import { ReactComponent as HeartOutlineIcon } from '../../assets/icons/heart-outline.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow-right.svg';
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrow-down.svg';
import { ReactComponent as ArrowLeftIcon } from '../../assets/icons/arrow-left.svg';
import { ReactComponent as TimeIcon } from '../../assets/icons/time.svg';
import { ReactComponent as DifficultyIcon } from '../../assets/icons/difficulty.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as CategoryIcon } from '../../assets/icons/list.svg';
import { ReactComponent as AreaIcon } from '../../assets/icons/area.svg';
import { ReactComponent as IngredientIcon } from '../../assets/icons/ingredient.svg';
import { ReactComponent as ChevronRightIcon } from '../../assets/icons/chevron-right.svg';

const icons = {
	'arrow-down': ArrowDownIcon,
	'arrow-left': ArrowLeftIcon,
	'arrow-right': ArrowRightIcon,
	area: AreaIcon,
	category: CategoryIcon,
	close: CloseIcon,
	community: CommunityIcon,
	difficulty: DifficultyIcon,
	heart: HeartIcon,
	'heart-outline': HeartOutlineIcon,
	home: HomeIcon,
	ingredient: IngredientIcon,
	'chevron-right': ChevronRightIcon,
	menu: MenuIcon,
	recipes: RecipesIcon,
	search: SearchIcon,
	settings: SettingsIcon,
	time: TimeIcon
};

export const Icon = styled(({ type, width = '20px', height = '20px', ...props }) => {
	const IconComponent = icons[type];

	return <IconComponent {...props} />;
})`
	width: ${({ width  }) => width};
	height: ${({ height  }) => height};
	transition: fill 0.3s ease-in-out;
`;
