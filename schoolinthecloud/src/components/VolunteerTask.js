import React from "react";
import styled from 'styled-components';


const VTask = styled.div`
        width: 40%;
        border: 1px solid gray;
		border-radius: 10px;
        text-align: left;
        padding: 10px;
    `;

export default function VolunteerTask(props){
    return (
        <VTask>
            <h3>Task name : {props.task.task_name}</h3>
            <p>Created by : {props.task.created_by}</p>
            <p>Assigned to : {props.task.assigned_to}</p>
            <p>Description : {props.task.description}</p>
            <p>Due date : {props.task.due_date}</p>
            <p>Completed: {props.task.completed}</p>
        </VTask>
    );
}