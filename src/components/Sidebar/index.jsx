import { useLocation } from 'react-router-dom';
import {
	SidebarHeader,
	SidebarWrapper,
	SidebarHeaderWrapper,
	SidebarLogo,
	SidebarTitleWrapper,
	SidebarTitle,
	SidebarSubtitle,
	SidebarNav,
	SidebarNavItemWrapper,
	SidebarNavItem as SidebarNavItemLink
} from './styled';
import { Icon } from '../Icon';
import { PTiny } from '../Typography';

const sidebarNavTopLinks = [
	{ to: '/', icon: 'home', text: 'Homepage' },
	{ to: '/recipes', icon: 'recipes', text: 'Recipes' },
	{ to: '/community', icon: 'community', text: 'Community' },
	{ to: '/saved-recipes', icon: 'heart', text: 'Saved recipes' }
];

const sidebarNavBottomLinks = [
	{ to: '/settings', icon: 'settings', text: 'Settings' }
];

export const Sidebar = () => {
	const { pathname } = useLocation();

	return (
		<SidebarWrapper $hidden={pathname !== '/'}>
			<SidebarHeader>
				<SidebarHeaderWrapper>
					<SidebarLogo src="/assets/images/logo.svg" alt="logo" />
					<SidebarTitleWrapper>
						<SidebarTitle $weight="bold">Meal Deal</SidebarTitle>
						<SidebarSubtitle>Recipes for healthy life</SidebarSubtitle>
					</SidebarTitleWrapper>
				</SidebarHeaderWrapper>
			</SidebarHeader>
			<SidebarNav>
				<SidebarNavItemWrapper>
					{sidebarNavTopLinks.map(({ to, icon, text }) => (
						<SidebarNavItemLink
							key={text}
							to={to}
							$active={to === '/' ? pathname === to : pathname.startsWith(to)}
						>
							<Icon type={icon} />
							<PTiny $weight="medium">{text}</PTiny>
						</SidebarNavItemLink>
					))}
				</SidebarNavItemWrapper>
				<SidebarNavItemWrapper>
					{sidebarNavBottomLinks.map(({ to, icon, text }) => (
						<SidebarNavItemLink key={text} to={to} $active={pathname === to}>
							<Icon type={icon} />
							<PTiny $weight="medium">{text}</PTiny>
						</SidebarNavItemLink>
					))}
				</SidebarNavItemWrapper>
			</SidebarNav>
		</SidebarWrapper>
	);
};
