import * as styled from 'styled-components';

export const GlobalStyle = styled.createGlobalStyle`
	@font-face {
		font-family: 'DM Sans';
		src: url('/assets/fonts/DMSans-Regular.ttf') format('truetype');
		font-weight: 400;
		font-style: normal;
		font-display: swap;
	}
	@font-face {
		font-family: 'DM Sans Medium';
		src: url('/assets/fonts/DMSans-Medium.ttf') format('truetype');
		font-weight: 500;
		font-style: normal;
		font-display: swap;
	}
	@font-face {
		font-family: 'DM Sans Bold';
		src: url('/assets/fonts/DMSans-Bold.ttf') format('truetype');
		font-weight: 700;
		font-style: normal;
		font-display: swap;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	* {
		margin: 0;
	}

	body {
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;
	}

	img,
	picture,
	video,
	canvas,
	svg {
		display: block;
		max-width: 100%;
	}

	input,
	button,
	textarea,
	select {
		font: inherit;
	}

	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		overflow-wrap: break-word;
	}

	#root {
		isolation: isolate;
	}
`;
