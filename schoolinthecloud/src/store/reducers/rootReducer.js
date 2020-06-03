import { compose, combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';

import volunteerReducer from './volunteerReducer';

import { GET_DATA_START, GET_DATA_FAIL, GET_DATA_SUCCESS } from '../actions/index';

const initialState = {
	data: [],
	isLoading: false,
	isUpdating: false,
	error: ''
};

// Reducer needs Action & Copy of Current State - Amber Chunn
// renamed it to legacyReducer so i can use the name rootReducer - Kim Buck
const legacyReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DATA_START:
			return {
				...state,
				isLoading: true,
				error: ''
			};
		case GET_DATA_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: [ ...state.data, action.payload ],
				error: ''
			};
		case GET_DATA_FAIL:
			return {
				...state,
				isLoading: false,
				error: 'I am GROOT'
			};
		default:
			return state;
	}
};

//using reduceReducers to compose the reducer so i can build a normal slice reducer for volunteer
export const rootReducer = reduceReducers(legacyReducer, volunteerReducer);
