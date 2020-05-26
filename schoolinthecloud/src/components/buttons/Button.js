import React from 'react';
import Styled from 'styled-components';

const Button = (props) => {
	const Button = Styled.button`
        width: 150px;
        display: inline-block;
        padding: 8px 11px;
        font-size: 1.2rem;
        text-transform: uppercase;
        border: 0;
        border-radius: 5px;
        letter-spacing: 2px;
        outline: none;
        background-color: #4dd0e1;
        background-image: linear-gradient(to right, #4dd0e1, #1ee7e2);
        color: black;
        cursor: pointer;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        margin: ${props.margin};
        width:${props.width};
        height:${props.height};
        font-size:${props.fontSize};
        background-color: ${props.bgColor};
        bgImage: ${props.bgImage};
        color: ${props.color};

        &:hover{
            background-image: none;
            background-color: #4dd0e1;
            box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);

        }
    `;

	return (
		<Button onClick={props.clickHandler} type={props.type}>
			{props.text}
		</Button>
	);
};
export default Button;
