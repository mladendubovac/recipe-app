import styled from 'styled-components';
import { Icon } from '../Icon';
import { styledTypography } from '../Typography';

export const TabWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: ${({ theme }) => theme.spacing[1]};
	background-color: ${({ theme, $active }) =>
		$active ? theme.colors['green-500'] : theme.colors['gray-50']};
	border: 1px solid ${({ theme }) => theme.colors['gray-100']};
	border-radius: ${({ theme }) => theme.shape.borderRadius[1]};
	padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
	height: 28px;
	${styledTypography.pTiny};
	color: ${({ theme, $active }) =>
		$active ? theme.colors.white : theme.colors['gray-600']};
	cursor: pointer;
	transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
	${Icon} {
		height: 16px;
		width: 16px;
		fill: ${({ theme, $active }) =>
			$active ? theme.colors.white : theme.colors['gray-600']};
	}
	&:hover {
		${Icon} {
			fill: ${({ theme, $active }) =>
				$active ? theme.colors.white : theme.colors['gray-700']};
		}
		color: ${({ theme, $active }) => !$active && theme.colors['gray-700']};
		background-color: ${({ theme, $active }) =>
			!$active && theme.colors['gray-100']};
	}
`;
