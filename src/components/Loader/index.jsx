import { Icon } from '../Icon';
import { LoaderWrapper } from './styled';

export const Loader = () => {
	return (
		<LoaderWrapper data-testid="loader">
			<Icon type="ingredient" />
		</LoaderWrapper>
	);
};
