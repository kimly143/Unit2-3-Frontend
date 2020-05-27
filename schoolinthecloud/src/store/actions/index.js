import axios from 'axios';

export const GET_DATA_START = 'GET_DATA_START';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAIL = 'GET_DATA_FAIL';

export const ADDED_NEW_STUDENT = 'ADDED_NEW_STUDENT';
// export const REMOVE_STUDENT = 'REMOVE_STUDENT';
// export const UPDATE_STUDENT = 'UPDATE_STUDENT';

export const getData = () => (dispatch) => {
	dispatch({ type: GET_DATA_START });
	axios
		.get('/student')
		.then((res) => {
			console.log(res);
			dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
		})
		.catch((err) => dispatch({ type: GET_DATA_FAIL, payload: err }));
};

export const addNewStudent = (student) => (dispatch) => {
	dispatch({ type: ADDED_NEW_STUDENT, payload: student });
};

// export const removeStudent = (student) => (dispatch) => {
// 	dispatch({ type: REMOVE_STUDENT, payload: student });
// };

// export const updateStudent = (student) => (dispatch) => {
// 	dispatch({ type: UPDATE_STUDENT, payload: student });
// };
