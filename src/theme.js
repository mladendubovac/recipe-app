export const theme = {
	breakpoints: {
		xs: '0px',
        sm: '480px',
		md: '768px',
		lg: '1024px',
		xl: '1440px'
	},
	media: {
		up: (breakpoint) => `@media (min-width: ${theme.breakpoints[breakpoint]})`,
		down: (breakpoint) => `@media (max-width: ${theme.breakpoints[breakpoint]})`
	},
	typography: {
		fontFamily: {
			regular: 'DM Sans, sans-serif',
			medium: 'DM Sans Medium, sans-serif',
			bold: 'DM Sans Bold, sans-serif'
		}
	},
	spacing: {
		0.5: '2px',
		1: '4px',
		2: '8px',
		3: '12px',
		4: '16px',
		5: '20px',
		6: '24px',
		7: '28px',
		8: '32px',
		9: '36px',
		10: '40px',
		12: '48px',
		15: '60px',
		16: '64px',
		20: '80px',
		30: '120px',
		32: '128px'
	},
	shape: {
		borderRadius: {
			1: '4px',
			2: '8px',
			3: '12px',
			4: '16px',
			8: '32px'
		}
	},
	colors: {
		white: '#ffffff',
		black: '#080f1d',
		'green-500': '#15c421',
		'green-600': '#089b12',
		'blue-100': '#e6eefe',
		'blue-600': '#2851a3',
		'gray-50': '#f4f5f6',
		'gray-100': '#e3e5e8',
		'gray-200': '#c7cbd1',
		'gray-300': '#aab1bb',
		'gray-400': '#8e97a4',
		'gray-500': '#727e8d',
		'gray-600': '#647181',
		'gray-700': '#44505f',
		'gray-800': '#2a3646',
		'gray-900': '#141d2a'
	}
};
