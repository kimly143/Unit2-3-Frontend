import React from "react";
import styled from 'styled-components';

import VolunteerTask from "./VolunteerTask";

const TaskList = styled.ul`
		width: 80%;
		border-radius: 10px;
        text-align: left;
        margin: 0 auto;
        display: flex;
        flex-direction:row;
        justify-content: center;
    `;

export default function VolunteerTaskList(props){
    console.log(props);
    return (
        <div>
            <TaskList> {props.tasks.map((task) => <VolunteerTask task={task} key={task.id}/>)}</TaskList>
        </div>
    )
}