import {
	GET_DATA_START,
	GET_DATA_FAIL,
	GET_DATA_SUCCESS,
	ADDED_NEW_STUDENT,
} from '../actions/index';

const initialState = {
	data: [],
	isLoading: false,
	isUpdating: false,
	error: '',
};

// Reducer needs Action & Copy of Current State
export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DATA_START:
			return {
				...state,
				isLoading: true,
				error: '',
			};
		case GET_DATA_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: [...state.data, action.payload],
				error: '',
			};
		case GET_DATA_FAIL:
			return {
				...state,
				isLoading: false,
				error: 'oops',
			};
		case ADDED_NEW_STUDENT:
			return {
				...state,
				student: [...state.student, action.payload],
			};
		default:
			return state;
	}
};
