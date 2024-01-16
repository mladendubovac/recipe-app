import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { H1, PTiny } from '../Typography';
import { Icon } from '../Icon';

export const SidebarWrapper = styled.aside`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[2]};
	width: 100%;
	height: 100%;
	grid-area: sidebar;
	${({ theme }) => theme.media.down('md')} {
		display: ${({ $hidden }) => $hidden && 'none'};
	}
`;

export const SidebarHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 120px;
	background-color: ${({ theme }) => theme.colors.black};
	padding: ${({ theme }) => `${theme.spacing[9]} ${theme.spacing[6]}`};
	gap: ${({ theme }) => theme.spacing[2]};
	border-radius: ${({ theme }) => theme.shape.borderRadius[2]};
	${({ theme }) => theme.media.down('lg')} {
		height: 100px;
	}
	${({ theme }) => theme.media.down('md')} {
		height: 80px;
	}
`;

export const SidebarHeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: ${({ theme }) => theme.spacing[3]};
`;

export const SidebarLogo = styled.img`
	height: 48px;
	width: 48px;
`;

export const SidebarTitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SidebarTitle = styled(H1)`
	color: ${({ theme }) => theme.colors['gray-50']};
	font-size: 22px;
	line-height: 20px;
`;

export const SidebarSubtitle = styled(PTiny)`
	color: ${({ theme }) => theme.colors['gray-300']};
`;

export const SidebarNav = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	background-color: ${({ theme }) => theme.colors['gray-50']};
	padding: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[7]}`};
	border-radius: ${({ theme }) => theme.shape.borderRadius[2]};
	${({ theme }) => theme.media.down('md')} {
		display: none;
	}
`;

export const SidebarNavItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[8]};
`;

export const SidebarNavItem = styled(Link)`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[3]};
	text-decoration: none;
	${PTiny} {
		transition: color 0.3s ease-in-out;
		color: ${({ theme, $active }) =>
			$active ? theme.colors['green-600'] : theme.colors['gray-600']};
	}

	${Icon} {
		fill: ${({ theme, $active }) =>
			$active ? theme.colors['green-600'] : theme.colors['gray-600']};
	}

	&:hover {
		${Icon} {
			fill: ${({ theme, $active }) => !$active && theme.colors['gray-700']};
		}
		${PTiny} {
			color: ${({ theme, $active }) => !$active && theme.colors['gray-700']};
		}
	}
`;
