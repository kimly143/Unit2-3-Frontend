import axios from 'axios';

export const apiAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		baseURL: 'https://build-week-school-in-the-cloud.herokuapp.com/api',
		headers: {
			authorization: token,
		},
	});
};
