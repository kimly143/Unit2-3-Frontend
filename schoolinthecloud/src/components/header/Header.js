import React, { useState } from 'react';
import cloud from '../../assets/images/cloud.webp';
import Navigation from './Navigation';

// import styled components
// import Styler from '../../assets/styles/styledComponents/styleClass';
import Button from '../buttons/Button';
import Text from '../styled/Text';
import Image from '../styled/Image';
import SignInForm from '../forms/SignInForm';
import Register from '../forms/Register.js';

export default function Header(props) {
	// const style = new Styler();

	// States used to manage if signin/register windows should be mounted
	const [signInState, setSignInState] = useState(false);
	const [registerState, setRegisterState] = useState(false);

	// This function will disable modal popup of sign up and register windows respectively on body click
	const bodyClicker = (e) => {
		console.log("bodyClicked");
		return e.target.className === 'headliner' && signInState && !registerState
			? setSignInState(!signInState)
			: e.target.className === 'headliner' && registerState && !signInState
			? setRegisterState(!registerState)
			: null;
	};

	console.log(signInState);

	// Shows the signin window and ensures the register state is set to false
	const signInClick = (e) => {
		setRegisterState(false);
		setSignInState(!signInState);
	};

	// Shows the register window and ensures the signin state is set to false
	const registerClick = (e) => {
		setSignInState(false);
		setRegisterState(!registerState);
	};

	return (
		<header>
			<nav>
				{/*Left side title in header-nav*/}
				<section className="leftNav">
					<Text
						fontSize="30px"
						height="100%"
						letterSpacing="2px"
						color="#fff"
						fontFamily="gPro"
						lineHeight="60px"
						text="School in the Cloud"
					>
						School in the Cloud{' '}
					</Text>

					{/*Image for School in the cloud logo*/}
					<Image
						url={cloud}
						margin="auto 0 auto 10px"

					/>
				</section>

				{/*Right side of header used for nav links*/}
				{/* Added Navigation compoent for routing*/}
				<section className="rightNav">
					<Navigation props={props} clickHandler={signInClick}
					signInState = {signInState}
					registerState = {registerState}
					/>
				</section>
			</nav>

			<section className="headliner" onClick={bodyClicker}>
				{/*If signin or register state is true will remove h1 text and subtext and mount signin or register window*/}
				{signInState && !registerState ? (
					<SignInForm />
				) : !signInState && registerState ? (
					<Register />
				) : (
					<>
						<Text
							margin="auto auto 0 auto"
							fontSize="40px"
							fontFamily="proxima_novaregular"
							text="Educational Mentoring Service for children who need it most "
							color="white"
						/>

						<Text
							width="100%"
							margin="0 auto"
							fontSize="25px"
							fontFamily="gProItalic"
							text="Our hope is to lighten the burden of overworked teachers and parents"
							textAlign="center"
							color="white"
						/>

						<Button
							text="Get Started"
							bgColor="#00aced"
							margin="10px auto"
							clickHandler={registerClick}
						/>
					</>
				)}
			</section>
		</header>
	);
}
