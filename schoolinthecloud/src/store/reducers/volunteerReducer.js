import {
	GET_VOLUNTEER_DATA_SUCCESS,
	GET_VOLUNTEER_DATA_FAIL,
	CREATE_NEW_VOLUNTEER,
	UPDATE_VOLUNTEER,
	DELETE_VOLUNTEER
} from '../actions/volunteerActions';

const initialState = {
	taskList: []
};

export default function volunteerReducer(state, action) {
	if (!state.volunteers) {
		state = {
			...state,
			volunteers: initialState
		};
	}

	switch (action.type) {
		case GET_VOLUNTEER_DATA_SUCCESS:
			return {
				...state,
				volunteers: {
					...state.volunteers,
					taskList: action.payload
				}
			};

		case GET_VOLUNTEER_DATA_FAIL:
			return {
				...state,
				isLoading: false,
				error: 'something wrong...'
			};
		case CREATE_NEW_VOLUNTEER:
			return {
				...state,
				volunteer: [ ...state, action.payload ]
			};
		case UPDATE_VOLUNTEER:
			return {
				...state,
				volunteer: [ ...state.volunteer, action.payload ]
			};
		case DELETE_VOLUNTEER:
			return {
				...state,
				volunteer: [ ...state.volunteer, action.payload ]
			};

		default:
			return state;
	}
}
