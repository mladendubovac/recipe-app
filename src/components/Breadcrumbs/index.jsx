import { Icon } from '../Icon';
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbsWrapper } from './styled';

export const BreadCrumbs = ({ links }) => {
	return (
		<BreadcrumbsWrapper>
			{links.map(({ to, label }, index) => (
				<BreadcrumbItem key={label} data-testid="breadcrumb">
					<BreadcrumbLink to={to} $weight="medium" $color="black">
						{label}
					</BreadcrumbLink>
					{index < links.length - 1 && <Icon type="chevron-right" />}
				</BreadcrumbItem>
			))}
		</BreadcrumbsWrapper>
	);
};
