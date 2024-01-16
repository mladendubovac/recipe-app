import { createBrowserRouter } from 'react-router-dom';
import { HomePage, RecipeDetailsPage, RecipesPage } from './pages';
import { ErrorLayout, Layout } from './layout';

export const routes = [
	{
		element: <Layout />,
		errorElement: <ErrorLayout />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/recipes', element: <RecipesPage /> },
			{ path: 'recipe-details/:id?', element: <RecipeDetailsPage /> }
		]
	}
];

export const router = createBrowserRouter(routes);
