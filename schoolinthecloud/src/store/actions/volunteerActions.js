import { apiAuth } from '../../utils/apiAuth';

//fetching volunteer tasks
export const GET_VOLUNTEER_DATA_START = 'GET_VOLUNTEER_DATA_START';
export const GET_VOLUNTEER_DATA_SUCCESS = 'GET_VOLUNTEER_DATA_SUCCESS';
export const GET_VOLUNTEER_DATA_FAIL = 'GET_VOLUNTEER_DATA_FAIL';

//completing a task
export const COMPLETE_VOLUNTEER_TASK = 'COMPLETE_VOLUNTEER_TASK';
export const COMPLETE_VOLUNTEER_TASK_FAILED = 'COMPLETE_VOLUNTEER_TASK_FAILED';

//list of fake tasks, just copy from database over.
const FAKE_TASKS = [
	{
		task_id: 25,
		task_name: 'Work on Fixes for BE one',
		created_by: 5,
		assigned_to: 11,
		description: 'Testing API',
		due_date: '',
		completed: 0,
		volunteer_id: 11,
		volunteer_firstName: 'Sherr',
		volunteer_lastName: 'Willis',
		auth_id: '',
		email: 'volunteer22@sitc.cloud',
		on_line: 0,
		country: 'USA',
		available_time: '9am-5pm'
	},
	{
		task_id: 26,
		task_name: 'Work on Fixes for BE two ',
		created_by: 5,
		assigned_to: 11,
		description: 'Testing API',
		due_date: '',
		completed: 0,
		volunteer_id: 11,
		volunteer_firstName: 'Sherr',
		volunteer_lastName: 'Willis',
		auth_id: '',
		email: 'volunteer22@sitc.cloud',
		on_line: 0,
		country: 'USA',
		available_time: '9am-5pm'
	},
	{
		task_id: 27,
		task_name: 'Work on Fixes for BE three',
		created_by: 5,
		assigned_to: 11,
		description: 'Testing API',
		due_date: '',
		completed: 0,
		volunteer_id: 11,
		volunteer_firstName: 'Sherr',
		volunteer_lastName: 'Willis',
		auth_id: '',
		email: 'volunteer22@sitc.cloud',
		on_line: 0,
		country: 'USA',
		available_time: '9am-5pm'
	}
];


export const getVolunteerData = (id) => (dispatch) => {
	dispatch({ type: GET_VOLUNTEER_DATA_START });
	// old fetch code, commented becuase of issues getting user id for request
	// and to ensure tasks always render
	// apiAuth()
    //     // .get(`/volunteer/${id}/tasks`)
    //     .get(`/volunteer/11`)
	// 	.then((res) => {
	// 		console.log(res);
	// 		dispatch({ type: GET_VOLUNTEER_DATA_SUCCESS, payload: res.data });
	// 	})
	// 	.catch((err) => dispatch({ type: GET_VOLUNTEER_DATA_FAIL, payload: err }));

	//setting payload: FAKE_TASKS because i dont have a list of tasks from database
	dispatch({ type: GET_VOLUNTEER_DATA_SUCCESS, payload: FAKE_TASKS });
};

export const completeTask = (taskId) => (dispatch) => {
	// this would be the request i make to complete the task if the server supported
	// it
	// apiAuth()
	// 	.put(`/volunteer/tasks/${taskId}`, { completed: 1 })
	// 	.then((res) => {
			dispatch({ type: COMPLETE_VOLUNTEER_TASK, payload: taskId });
	// 	})
	// 	.catch(() => {
	// 		dispatch({ type: COMPLETE_VOLUNTEER_TASK_FAILED })
	// 	})
}
