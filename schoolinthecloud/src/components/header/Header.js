// // Dependancies
import React, { useState } from "react";
import cloud from "../../assets/images/cloud.webp";
import Navigation from "./Navigation";
import { connect } from "react-redux";
import { createNewStudent } from "../../store/actions/studentActions";

// Import Styled Components
import Button from "../buttons/Buttons";
import Text from "../styled/Text";
import Image from "../styled/Image";
import SignInForm from "../forms/SignInForm";
import Register from "../forms/Register.js";

const Header = (props) => {
  // States used to manage if signin/register windows should be mounted
  const [signInState, setSignInState] = useState(false);
  const [registerState, setRegisterState] = useState(false);

  // This function will disable modal popup of sign up and register windows respectively on body click
  const bodyClicker = (e) => {
    console.log("bodyClicked");
    return e.target.className === "headliner" && signInState && !registerState
      ? setSignInState(!signInState)
      : e.target.className === "headliner" && registerState && !signInState
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
      <section className="topNav">
        {/*Left side title in header-nav*/}
        <section className="leftNav">
          <h1 className="textStyler">School in the Cloud</h1>

          {/*Image for School in the cloud logo*/}
          <Image url={cloud} margin="auto 0 auto 10px" height="40px" width="50px" />
        </section>

        {/*Right side of header used for nav links*/}
        {/* Added Navigation component for routing*/}
        <section className="rightNav">
          <Navigation />
        </section>
      </section>

      <section className="headliner" onClick={bodyClicker}>
        {/*If signin or register state is true will remove h1 text and subtext and*/}
        {/*mount signin or register window*/}
        {signInState && !registerState ? (
          <SignInForm />
        ) : !signInState && registerState ? (
          <Register />
        ) : (
          <>
            <Text

              text="Educational Mentoring Service for children who need it most "

            />

            <h4 className="subTitler">Our hope is to lighten the burden of overworked teachers and parents</h4>





            <Button
              clickHandler={registerClick}
              text="Get Started!"

            >

            </Button>
          </>
        )}
      </section>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    isLoading: state.isLoading,
    isUpdating: state.isUpdating,
    data: state.data,
  };
};
export default connect(mapStateToProps, { createNewStudent })(Header);
