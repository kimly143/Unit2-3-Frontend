import React,{useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';

// import styler class for styled components
import Styler from "../../assets/styles/styledComponents/styleClass";

export default function SignInForm(props){

    // create new instance of styler class
    const style = new Styler();

    // set up yup validation
    const formSchema = yup.object().shape({

        userName: yup
            .string()
            .required("Please enter your username")
            .min(4,"Username should be longer than 4 characters"),
        password: yup
            .string()
            .required("Please enter your password")
            .min(3,"Password should be longer than 3 characters")

    });

    // Form state and error state respectively
    const [formState, setFormState] = useState({
        userName:"",
        password:""
    });

    const [errorState, setErrorState] = useState({
        userName:"",
        password: ""
    });

    // validation on input change
    const validate = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrorState({
                    ...errorState,[e.target.name]:""
                });
            })
            .catch(err => {
                setErrorState({
                    ...errorState,[e.target.name]:err.errors[0]
                });
        })
    }

    const formSubmit = e => {
        console.log('submit');
        console.log(formState);
        e.preventDefault();
        axios
            .post("")
            .then(response => {
                console.log(response)
            })
            .catch( err => {
                console.log(err)
            })
    }

    const inputChange = e =>{
        e.persist();
        console.log(e.target.value);
        validate(e);
        setFormState({...formState, [e.target.name]:e.target.value})
    }



    return (

        <form onSubmit={formSubmit} className="signInForm">

            <h2 className="signInTitle">Sign In</h2>

            <label htmlFor="userName">

                Username:

                <input
                    className="signInInput"
                    type="text"
                    name="userName"
                    id = "userName"
                    value = {formState.userName}
                    onChange={inputChange}
                />

            </label>

            {errorState.userName.length > 0 ? (
                <p className="error">{errorState.userName}</p>
            ) : null}

            <label htmlFor="password">

                Password:

                <input
                    className="signInInput"
                    type="password"
                    name="password"
                    id="password"
                    value={formState.password}
                    onChange={inputChange}
                    />

            </label>

            {errorState.password.length > 0 ? (
                <p className="error">{errorState.password}</p>
            ) : null}

            <style.Button
            text="login"
            type = "submit"
            margin="10px auto"
            />

        </form>




    )

}