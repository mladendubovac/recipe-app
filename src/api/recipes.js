import { request } from '../utils';

const ENDPOINT = 'https://www.themealdb.com/api/json/v1/1';

export const getMealAreas = async () => {
	const response = await request(`${ENDPOINT}/list.php?a=list`);
	return response;
};

export const getMealById = async (id) => {
	const response = await request(`${ENDPOINT}/lookup.php?i=${id}`);
	return response.meals.at(0);
};

export const getMealCategories = async () => {
	const response = await request(`${ENDPOINT}/categories.php`);
	return response.categories;
};

export const getMealCategory = async (category) => {
	const response = await request(`${ENDPOINT}/filter.php?c=${category}`);
	return response.meals;
};

export const getMeals = async () => {
	const response = await request(`${ENDPOINT}/randomselection.php`);
	return response.meals;
};

export const getMealsByName = async (name) => {
	const response = await request(`${ENDPOINT}/search.php?s=${name}`);
	return response.meals;
};

export const getMealsByCategory = async (category) => {
	const response = await request(`${ENDPOINT}/filter.php?c=${category}`);
	return response.meals;
};
