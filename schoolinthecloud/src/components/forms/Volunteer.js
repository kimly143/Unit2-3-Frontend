import React from 'react';
import styled from 'styled-components';

const Form= styled.form`
    background: lightblue;
`;

const 
const Button = styled.button`
	background: tomato;
	color: blue;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;



export default function Volunteer() {
	return (
		<div>
			<h1> Hi Volunteer!</h1>
            {/* 1. Name
		2. Email
		3. Parent phone/Volunteer phone
		4. Location/address
		5. Day/Time availability
		6. Terms and conditions agreement
        7. Text field for bio/prompt for statement */}
            <Form>

            </Form>
			<Button> Submit </Button>
			<Button>Cancel</Button>
		</div>
	);
}
