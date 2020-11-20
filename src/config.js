export const apiUrl =
	process.env.NODE_ENV === 'production'
		? 'https://botanical-babble.herokuapp.com/api'
		: 'http://localhost:8000/api';
