// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoic3R1ZGVudCIsInBhc3N3b3JkIjoic3R1ZGVudCJ9LCJpYXQiOjE1OTAzMzg0MjB9.16VQC5aPl1HDfGLjMCMNH_qsiDAbO3sXE9Tn9fqJaiY

import axios from 'axios';

export const axiosWithAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		baseURL: 'https://build-week-school-in-the-cloud.herokuapp.com/api',
		headers: {
			authorization: token,
		},
	});
};
