import { useLocation } from 'react-router-dom';
import { Icon } from '../Icon';
import { NavbarWrapper, NavbarLink } from './styled';

const sidebarNavTopLinks = [
	{ to: '/', icon: 'home' },
	{ to: '/recipes', icon: 'recipes' },
	{ to: '/community', icon: 'community' },
	{ to: '/saved-recipes', icon: 'heart' },
	{ to: '/settings', icon: 'settings' }
];

export const Navbar = () => {
	const { pathname } = useLocation();

	return (
		<NavbarWrapper>
			{sidebarNavTopLinks.map(({ to, icon }) => (
				<NavbarLink
					key={icon}
					to={to}
					$active={to === '/' ? pathname === to : pathname.startsWith(to)}
				>
					<Icon type={icon} />
				</NavbarLink>
			))}
		</NavbarWrapper>
	);
};
