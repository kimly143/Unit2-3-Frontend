import {
	GET_VOLUNTEER_DATA_SUCCESS,
	GET_VOLUNTEER_DATA_FAIL,
	
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
		//tasklist from payload.
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
						//looking at the task which id matching with payload, and if it match, we marked it complete. if not return task unchange
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
