import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './global-style';

import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { CategoriesProvider, RecipesProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<RecipesProvider>
			<CategoriesProvider>
				<RouterProvider router={router} />
			</CategoriesProvider>
		</RecipesProvider>
	</ThemeProvider>
);
