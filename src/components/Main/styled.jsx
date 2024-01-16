import styled, { css } from 'styled-components';
import { H1, PTiny, styledTypography } from '../Typography';
import { hexToRgb } from '../../utils';
import { Icon } from '../Icon';

export const MainWrapper = styled.main`
	grid-area: main;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding-top: ${({ theme }) => theme.spacing[10]};
	padding-bottom: ${({ theme }) => theme.spacing[10]};
	${({ theme }) => theme.media.down('lg')} {
		padding-inline: ${({ theme }) => theme.spacing[10]};
		padding-top: 0;
		padding-bottom: ${({ theme }) => theme.spacing[8]};
	}
	${({ theme }) => theme.media.down('md')} {
		padding-inline: ${({ theme }) => theme.spacing[2]};
	}
`;

export const MainInnerWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	gap: ${({ theme }) => theme.spacing[6]};
	grid-template-rows: 56px auto;
	width: 100%;
	max-width: 920px;
	height: 100%;
	${({ theme }) => theme.media.down('lg')} {
		grid-template-rows: auto;
		gap: ${({ theme }) => theme.spacing[8]};
		max-width: 100%;
	}
`;

export const MainHeader = styled.header`
	grid-column: 1 / -1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	align-self: baseline;
	${({ $expanded }) =>
		$expanded &&
		css`
			&::before {
				content: '';
				position: absolute;
				inset: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(
					${({ theme }) => hexToRgb(theme.colors.black)},
					0.5
				);
				z-index: 5;
			}
		`}
	${({ theme }) => theme.media.down('lg')} {
		flex-direction: column;
		gap: ${({ theme }) => theme.spacing[3]};
	}
	${({ theme }) => theme.media.down('md')} {
		display: ${({ $hidden }) => $hidden && 'none'};
	}
`;

export const MainTitle = styled(H1)`
	color: ${({ theme }) => theme.colors.black};
	display: ${({ $hidden }) => ($hidden ? 'none' : 'initial')};
	font-weight: 100;
	${({ theme }) => theme.media.down('lg')} {
		${styledTypography.h2};
	}
	${({ theme }) => theme.media.down('md')} {
		display: none;
	}
`;

export const MainSearchBarIconButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	padding-inline: ${({ theme }) => theme.spacing[5]};
	background-color: inherit;
	border: none;
	cursor: pointer;
	${Icon} {
		fill: ${({ theme }) => theme.colors['gray-500']};
	}
	&:focus-visible {
		outline: none;
		${Icon} {
			outline: 2px solid ${({ theme }) => theme.colors['green-500']};
		}
	}
`;

export const MainSearchBar = styled.input`
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
	padding: ${({ theme }) =>
		`${theme.spacing[4]} 0 ${theme.spacing[4]} ${theme.spacing[5]}`};
	background-color: inherit;
	&::placeholder {
		color: ${({ theme }) => theme.colors['gray-400']};
	}
`;

export const MainSearchBarWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[2]};
	width: ${({ $expanded }) => ($expanded ? '100%' : 'auto')};
	${({ theme }) => theme.media.down('lg')} {
		width: 100%;
	}
`;

export const MainSearchBarForm = styled.form`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[2]};
	height: 52px;
	width: ${({ $expanded }) => ($expanded ? '100%' : '448px')};
	border-radius: ${({ theme }) => theme.shape.borderRadius[2]};
	border: 1px solid ${({ theme }) => theme.colors['gray-200']};
	outline: 4px solid transparent;
	${styledTypography.pBase};
	overflow: hidden;
	background-color: ${({ theme }) => theme.colors.white};
	transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out,
		outline-color 0.3s ease-in-out;
	z-index: 10;
	&:hover {
		background-color: ${({ theme }) => theme.colors['gray-50']};
		${Icon} {
			fill: ${({ theme }) => theme.colors['gray-700']};
		}
	}
	&:focus-within {
		border-color: ${({ theme }) => theme.colors['green-500']};
		outline-color: rgba(
			${({ theme }) => hexToRgb(theme.colors['green-500'])},
			0.27
		);
	}
	${({ theme }) => theme.media.down('lg')} {
		width: 100%;
	}
`;

export const MainExpandedSearchOverlay = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	padding: ${({ theme }) => theme.spacing[6]};
	border-radius: ${({ theme }) => theme.shape.borderRadius[2]};
	z-index: 10;
	display: ${({ $expanded }) => ($expanded ? 'flex' : 'none')};
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[6]};
	max-height: ${({ $activeTab }) =>
		$activeTab === 'category' ? '600px' : '404px'};
`;

export const MainExpandedSearchOverlayTabs = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[3]};
`;

export const MainExpandedSearchOverlaySearchResults = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: 140px;
	gap: ${({ theme }) => theme.spacing[4]};
	overflow-y: auto;
	&::-webkit-scrollbar {
		width: 0;
	}
	${({ $activeTab }) =>
		$activeTab === 'category' &&
		css`
			grid-template-columns: repeat(4, minmax(auto, 200px));
			grid-auto-rows: minmax(180px, auto);
			gap: ${({ theme }) => theme.spacing[6]};
		`}
	${({ theme }) => theme.media.down('lg')} {
		grid-template-columns: 1fr;
		grid-auto-rows: 120px;
	}
`;

export const MainExpandedSearchOverlaySearchResultsEmpty = styled.div`
	grid-column: 1 / -1;
	grid-row: span 2;
	background-color: ${({ theme }) => theme.colors['gray-50']};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: ${({ theme }) => theme.spacing[4]};
	border-radius: ${({ theme }) => theme.shape.borderRadius[1]};
	height: 100%;
	width: 100%;
	${PTiny} {
		color: ${({ theme, $black }) =>
			$black ? theme.colors.black : theme.colors['gray-500']};
	}
`;

export const MainExpandedSearchOverlaySearchResultsEmptyImage = styled.img`
	width: 112px;
	height: 112px;
`;
