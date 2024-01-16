import { useLocation } from 'react-router-dom';
import { GridWrapper } from './styled';

export const Grid = ({ children }) => {
	const { pathname } = useLocation();

	return (
		<GridWrapper $hideHeaderOnMobile={pathname !== '/'}>{children}</GridWrapper>
	);
};
