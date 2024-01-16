import styled, { css } from 'styled-components';

const typographyFontFamily = css`
	font-family: ${({ theme, $weight = 'regular' }) =>
		theme.typography.fontFamily[$weight]};
`;

const typographyColor = css`
	color: ${({ theme, $color = 'black' }) => theme.colors[$color]};
`;

const typographyStyles = {
	h1: css`
		font-size: 40px;
		line-height: 52px;
		letter-spacing: -1px;
	`,
	h2: css`
		font-size: 28px;
		line-height: 36px;
		letter-spacing: -1px;
	`,
	h3: css`
		font-size: 24px;
		line-height: 32px;
		letter-spacing: -1px;
	`,
	pLarge: css`
		font-size: 20px;
		line-height: 28px;
		letter-spacing: -1px;
	`,
	pBase: css`
		font-size: 18px;
		line-height: 24px;
		letter-spacing: -1px;
	`,
	pSmall: css`
		font-size: 16px;
		line-height: 24px;
		letter-spacing: 0;
	`,
	pTiny: css`
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0;
	`
};

export const styledTypography = Object.keys(typographyStyles).reduce(
	(acc, key) => {
		acc[key] = css`
			${typographyFontFamily}
			${typographyStyles[key]}
		`;
		return acc;
	},
	{}
);

const createStyledComponent = (tag, style) => {
	const StyledComponent = styled[tag]`
		${typographyFontFamily}
		${typographyColor}
		${style}
	`;
	return StyledComponent;
};

export const H1 = createStyledComponent('h1', typographyStyles.h1);
export const H2 = createStyledComponent('h2', typographyStyles.h2);
export const H3 = createStyledComponent('h3', typographyStyles.h3);
export const PLarge = createStyledComponent('p', typographyStyles.pLarge);
export const PBase = createStyledComponent('p', typographyStyles.pBase);
export const PSmall = createStyledComponent('p', typographyStyles.pSmall);
export const PTiny = createStyledComponent('p', typographyStyles.pTiny);
