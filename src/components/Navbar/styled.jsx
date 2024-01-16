import styled from 'styled-components';
import { Icon } from '../Icon';
import { Link } from 'react-router-dom';

export const NavbarWrapper = styled.div`
	${({ theme }) => theme.media.up('md')} {
		display: none;
	}
	position: sticky;
	bottom: ${({ theme }) => theme.spacing[2]};
	width: 100%;
	height: 72px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.colors['gray-50']};
	border-radius: ${({ theme }) => theme.shape.borderRadius[8]};
	padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[5]}`};
`;

export const NavbarLink = styled(Link)`
	width: 48px;
	height: 48px;
	display: flex;
	align-items: center;
	justify-content: center;
	${Icon} {
		width: 24px;
		height: 24px;
		fill: ${({ theme, $active }) =>
			$active ? theme.colors['green-600'] : theme.colors['gray-300']};
	}
`;
