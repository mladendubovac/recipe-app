import styled from 'styled-components';
import { PLarge } from '../Typography';

export const CategoryCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	border-radius: ${({ theme }) => theme.shape.borderRadius[2]};
	background-color: ${({ theme }) => theme.colors['gray-50']};
	padding: ${({ theme }) => theme.spacing[3]};
	cursor: pointer;
`;
export const CategoryCardImg = styled.img`
	width: 160px;
	height: 100px;
	object-fit: fill;
`;
export const CategoryCardTitle = styled(PLarge)`
	font-weight: 500;
	color: ${({ theme }) => theme.colors.black};
`;
