import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import useForm from '../../hooks/useForm';

const Form = styled.form`
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
`;

const Label = styled.label`
	width: 30%;
	padding: 10px;
`;

const Input = styled.input`width: 60%;`;

const Button = styled.button`
	background: cornflowerblue;
	height: 3em;
	color: black;
	text-transform: none;
	padding: 5px;
	margin: 10px;
`;

const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	margin-top: 10px;
`;

const CheckboxLabel = styled.label`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: baseline;
`;

export default function Volunteer() {
	const [ formState, changeHandler ] = useForm({
		name: '',
		email: '',
		phone: '',
		location: '',
		availability: '',
		bio: '',
		term: false
	});

	//const [ token, setToken ] = useAuthToken();

	//using async
	const submitHandler = async (event) => {
		event.preventDefault();
		console.log(formState);
		// making a request to server for login, sending formState contain username and password to server
		// await : make promise to resolve first then continue
		const response = await axios.post('https://build-week-school-in-the-cloud.herokuapp.com/api', formState);
		console.log(response.data);

		//setToken(response.data.payload);
		//props.history.push('/bubbles');
	};

	return (
		<div className="volunteer">
			<h1> Hello Volunteer! Please enter your information</h1>

			<Form onSubmit={submitHandler}>
				<InputWrapper>
					<Label>Name: </Label>
					<Input type="text" name="name" id="name" required value={formState.name} onChange={changeHandler} />
				</InputWrapper>
				<InputWrapper>
					<Label htmlFor="email">Email: </Label>
					<Input
						type="email"
						name="email"
						id="email"
						required
						value={formState.email}
						onChange={changeHandler}
					/>
				</InputWrapper>
				<InputWrapper>
					<Label htmlFor="phone">Phone: </Label>
					<Input
						type="phone"
						name="phone"
						id="phone"
						required
						value={formState.phone}
						onChange={changeHandler}
					/>
				</InputWrapper>
				<InputWrapper>
					<Label htmlFor="Location">Location: </Label>
					<Input
						type="text"
						name="location"
						id="Location"
						required
						value={formState.location}
						onChange={changeHandler}
					/>
				</InputWrapper>
				<InputWrapper>
					<Label htmlFor="availability">Availability: </Label>
					<Input
						type="text"
						name="availability"
						id="availability"
						required
						value={formState.availability}
						onChange={changeHandler}
					/>
				</InputWrapper>
				<InputWrapper>
					<Label htmlFor="bio">Bio: </Label>
					<Input type="text" name="bio" id="bio" required value={formState.bio} onChange={changeHandler} />
				</InputWrapper>
				<InputWrapper>
					<Label>
						<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
					</Label>
					<Input
						type="text"
						name="term"
						id="term"
						placeholder="Term and Condiditon Agreement..."
						readonly
						value={formState.term}
						onChange={changeHandler}
					/>
				</InputWrapper>
				<InputWrapper>
					<CheckboxLabel>
						<input
							type="checkbox"
							name="term"
							id="term"
							checked={formState.term}
							onChange={changeHandler}
						/>
						I agree to the terms and conditions.
					</CheckboxLabel>
				</InputWrapper>
				<ButtonWrapper>
					<Button type="submit" value="Submit">
						Submit
					</Button>
					<Button type="cancel" value="cancel">
						Cancel
					</Button>
				</ButtonWrapper>
			</Form>
		</div>
	);
}
