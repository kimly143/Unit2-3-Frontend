import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { completeTask } from '../store/actions/volunteerActions';

const TaskContainer = styled.div`
	width: 40%;
	border: 1px solid gray;
	display: flex;
	flex-direction: column;
    border-radius: 10px;
    margin: 10px;
`;

const VTask = styled.div`
	text-align: left;
	padding: 10px;
`;

const ButtonToolbar = styled.div`
    padding: 5px;
    margin:0 auto;
    font-size: 0.5em;
`;

export default function VolunteerTask(props) {
    const dispatch = useDispatch();

    const completeHandler = () => {
        dispatch(completeTask(props.task.task_id));
    };

	return (
		<TaskContainer>
			<VTask>
				<h3>Task name : {props.task.task_name}</h3>
				<p>Created by : {props.task.created_by}</p>
				<p>Assigned to : {props.task.assigned_to}</p>
				<p>Description : {props.task.description}</p>
				<p>Due date : {props.task.due_date}</p>
				<p>Completed : {props.task.completed}</p>
			</VTask>
			<ButtonToolbar>
				<button onClick={completeHandler}>Complete Task</button>
			</ButtonToolbar>
		</TaskContainer>
	);
}
