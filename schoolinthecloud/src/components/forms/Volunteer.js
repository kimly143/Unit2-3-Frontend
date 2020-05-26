import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	width: 70%;
	border: 1px solid gray;
	padding: 10px;
	border-radius: 5px;
`;

const InputWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
    margin-top: 10px;
    justify-content: center;

`;

const Label = styled.label`width: 35%;
padding: 10px;`;

const Input = styled.input`width: 60%;`;

const Button = styled.button`
	background: cornflowerblue;
	height: 3em;
	color: black;
	text-transform: none;
	padding: 5px;
	margin: 10px;
`;

export default function Volunteer() {
	return (
		<div class="volunteer">
			<h1> Hello Volunteer! Please enter your information</h1>

			<Form>
				<InputWrapper>
					<Label>Name: </Label>
					<Input type="text" name="name" id="name" required />
				</InputWrapper>
				<InputWrapper>
					<Label for="email">Email: </Label>
					<Input type="email" name="email" id="email" required />
				</InputWrapper>
				<InputWrapper>
					<Label for="phone">Phone: </Label>
					<Input type="phone" name="phone" id="phone" required />
				</InputWrapper>
				<InputWrapper>
					<Label for="Location">Location: </Label>
					<Input type="text" name="Location" id="Location" required />
				</InputWrapper>
				<InputWrapper>
					<Label for="availability">Availability: </Label>
					<Input type="text" name="email" id="email" required />
				</InputWrapper>
				<InputWrapper>
					<Label for="bio">Bio: </Label>
					<Input type="text" name="bio" id="bio" required />
				</InputWrapper>
				<InputWrapper>
					<Label>Terms and conditions </Label>
					<Input type="text" name="name" id="name" required />
				</InputWrapper>
				<InputWrapper>
					<Button type="submit" value="Submit!">
						Submit
					</Button>
					<Button type="cancel" value="cancel!">
						Cancel
					</Button>
				</InputWrapper>
			</Form>
		</div>
	);
}
