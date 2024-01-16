import styled, { keyframes } from 'styled-components';
import { Icon } from '../Icon';
import { hexToRgb } from '../../utils';

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }`;

export const LoaderWrapper = styled.div`
	position: absolute;
	inset: 0;
	background-color: rgba(
		${({ theme }) => hexToRgb(theme.colors['green-500'])},
		0.37
	);
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	z-index: 1000;
	${Icon} {
		width: 150px;
		height: 150px;
		animation: ${spin} 2s linear infinite;
	}
`;
