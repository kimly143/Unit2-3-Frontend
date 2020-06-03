import {
	GET_VOLUNTEER_DATA_SUCCESS,
	GET_VOLUNTEER_DATA_FAIL,
	CREATE_NEW_VOLUNTEER,
	UPDATE_VOLUNTEER,
	DELETE_VOLUNTEER,
	COMPLETE_VOLUNTEER_TASK
} from '../actions/volunteerActions';

// fake tasks because no way to get user id for endpoint
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
		case COMPLETE_VOLUNTEER_TASK:
			return {
				...state,
				volunteers: {
					...state.volunteer,
					taskList: state.volunteers.taskList.map((task) => {
						if (task.task_id === action.payload) {
							return {
								...task,
								completed: 1
							};
						}

						return task;
					})
				}
			};

		default:
			return state;
	}
}
