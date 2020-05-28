import React from 'react';
import styled from 'styled-components';

import VolunteerTaskList from './VolunteerTaskList';

export default function VolunteerDashboard() {
	const VolunteerDBoard = styled.div`
		position: absolute;
		left: 50%;
		top: 50%;
		width: 90vw;
		height: 80vh;
		display: flex;
		flex-wrap: wrap;
		justify-content: begin;
		align-content: left;
		transform: translate(-50%, -50%);
		background-color: #fff;
		padding: 15px;
		border-radius: 10px;
		text-align: center;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
	`;

	const tasks = [
		{
			task_id: 16,
			task_name: 'Zoom Session',
			created_by: 2,
			assigned_to: 1,
			description: 'Prepare the PVD and DB Schema',
			due_date: '',
			completed: 1
		},
		{
			task_id: 17,
			task_name: 'Study Session',
			created_by: 2,
			assigned_to: 4,
			description: 'Prepare the PVD and DB Schema',
			due_date: '',
			completed: 1
		},
		{
			task_id: 18,
			task_name: 'Study Session',
			created_by: 2,
			assigned_to: 8,
			description: 'Prepare the PVD and DB Schema',
			due_date: '',
			completed: 0
		}
	];

	return (
		<VolunteerDBoard>
			<h1> Welcome to Volunteer Dashboard! </h1>

			<VolunteerTaskList tasks={tasks} />
		</VolunteerDBoard>
	);
}
