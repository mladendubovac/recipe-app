import { Icon } from '../Icon';
import { StyledLink } from './styled';

export const Link = ({
	children,
	icon = 'arrow-right',
	iconPosition = 'right',
	$weight = 'medium',
	...props
}) => {
	return (
		<StyledLink {...props} $weight={$weight}>
			{iconPosition === 'left' && <Icon type={icon} />}
			{children}
			{iconPosition === 'right' && <Icon type={icon} />}
		</StyledLink>
	);
};
