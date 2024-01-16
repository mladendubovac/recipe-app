export const request = async (
	url,
	method = 'GET',
	body = null,
	headers = {}
) => {
	try {
		if (body) {
			body = JSON.stringify(body);
			headers['Content-Type'] = 'application/json';
		}

		const response = await fetch(url, { method, body, headers });

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};
