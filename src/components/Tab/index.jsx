import { TabWrapper } from './styled';

export const Tab = ({ children, active, onClick, $weight = 'medium' }) => (
	<TabWrapper $active={active} onClick={onClick} $weight={$weight}>
		{children}
	</TabWrapper>
);
