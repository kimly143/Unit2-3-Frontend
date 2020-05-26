import React, {useState} from "react";
import * as yup from 'yup';
import axios from 'axios';

// import styler class for styled components
import Styler from "../../assets/styles/styledComponents/styleClass";
import Button from "../buttons/Button";

export default function Register(props){

    // create new instance of styler class
    const style = new Styler();



    // set up yup validation
    const formSchema_Student = yup.object().shape({

        selector: yup
            .string(),
        userName: yup
            .string()
            .required("Username is required")
            .min(4, "Username must be longer than 4 characters"),
            // .test('username-availability',"Username is unavailable",
            //     function(testerFieldForUsernameAvailability){
            //         testerFieldForUsernameAvailability.map(item=>{
            //             item !== userName;
            //         })
            //     })
        password: yup
            .string()
            .required("Please enter a password")
            .min(3,"Password must be longer than 3 characters"),
        nameFirst: yup
            .string()
            .required("Please enter your first name"),
        nameLast: yup
            .string()
            .required("Please enter your last name"),
        email: yup
            .string()
            .email("Please enter a valid email address")
            .required("Email address required"),
        phone: yup
            .number()
            .typeError("Please enter a valid phone number")
            .required()
            .min(10,"Please enter a valid phone number with area code first"),
        address: yup
            .string()
            .required('Please enter your address'),
        time: yup
            .string()
            .required("Please select a time slot"),
        terms: yup
            .bool()
            .required("Please confirm our terms and conditions")
            .oneOf([true],"Please agree to our terms and conditions")
    });

    const formSchema_Volunteer = yup.object().shape({
        selector: yup
            .string(),
        userName: yup
            .string()
            .required("Username is required")
            .min(4, "Username must be longer than 4 characters"),
            // .test('username-availability',"Username is unavailable",
            //     function(testerFieldForUsernameAvailability){
            //         testerFieldForUsernameAvailability.map(item=>{
            //             item !== userName;
            //         })
            //     }),
        password:yup
            .string()
            .required("Please enter your password")
            .min(5,"Password must be at least 5 characters long"),
        nameFirst: yup
            .string()
            .required("Please enter your first name"),
        nameLast: yup
            .string()
            .required("Please enter your last name"),
        email: yup
            .string()
            .email("Please enter your email address")
            .required("Email address required"),
        phone: yup
            .number()
            .typeError("Please enter a valid phone number")
            .required()
            .min(10,"Please enter a valid phone number with area code first"),
        address: yup
            .string()
            .required('Please enter your address'),
        time: yup
            .string()
            .required("Please select a time slot"),
        terms: yup
            .bool()
            .required("Please confirm our terms and conditions")
            .oneOf([true],"Please agree to our terms and conditions")
    });
    // Form state and error state respectively
    const [formState, setFormState] = useState({
        selector:"",
        userName:"",
        password:"",
        nameFirst:"",
        nameLast:"",
        email:"",
        phone:"",
        address:"",
        time:"",
        terms:false
    });

    const [errorState, setErrorState] = useState({
        selector:"",
        userName:"",
        password:"",
        nameFirst:"",
        nameLast:"",
        email:"",
        phone:"",
        address:"",
        time:"",
        terms:false
    });
    // validation on input change
    const validate = e => {
        yup
            .reach(formSchema_Student, e.target.name)
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
    };

    const formSubmit = e => {
        e.preventDefault();
        // If volunteer is selected post to volunteer api else submit to student api
        formState.selector === 'volunteer'?
            axios
                .post("")
                .then(response => {
                    console.log(response)
                })
                .catch( err => {
                    console.log(err)
                })
        :
            axios
                .post("")
                .then(response => {
                    console.log(response)
                })
                .catch( err => {
                    console.log(err)
                })
    };

    const inputChange = e =>{
        e.persist();
        validate(e);
        let value = e.target.type === "checkbox" ? e.target.checked:e.target.value
        setFormState({...formState, [e.target.name]:value})
    };

    return (

        <form onSubmit={formSubmit} className="registerForm">

            <h2 className="signInTitle">Register</h2>

            <label htmlFor="selector" className="registerLabel">

                Student or Volunteer?

                <select
                    name="selector"
                    id="selector"
                    onChange={inputChange}
                    value={formState.selector}
                >

                    <option value="student">Student</option>

                    <option value="volunteer">Volunteer</option>

                </select>

            </label>

            <label></label>

            <label htmlFor="userName" className="registerLabel">

                <p>Username:</p>

                <input
                    className="signInInput"
                    type="text"
                    name="userName"
                    id = "userName"
                    value = {formState.userName}
                    onChange={inputChange}
                />

                {errorState.userName.length > 0 ? (
                    <p className="error">{errorState.userName}</p>
                ) : null}

            </label>

            <label htmlFor="password" className="registerLabel">

                <p>Password:</p>

                <input
                    className="signInInput"
                    type="password"
                    name="password"
                    id="password"
                    value={formState.password}
                    onChange={inputChange}
                />

                {errorState.password.length > 0 ? (
                    <p className="error">{errorState.password}</p>
                ) : null}

            </label>

            <label htmlFor="nameFirst" className="registerLabel">

                <p>First Name:</p>

                <input
                    className="signInInput"
                    type="text"
                    name="nameFirst"
                    id = "nameFirst"
                    value = {formState.nameFirst}
                    onChange={inputChange}
                />

                {errorState.nameFirst.length > 0 ? (
                    <p className="error">{errorState.nameFirst}</p>
                ) : null}

            </label>

            <label htmlFor="nameLast" className="registerLabel">

                <p>Last Name:</p>

                <input
                    className="signInInput"
                    type="text"
                    name="nameLast"
                    id = "nameLast"
                    value = {formState.nameLast}
                    onChange={inputChange}
                />

                {errorState.nameLast.length > 0 ? (
                    <p className="error">{errorState.nameLast}</p>
                ) : null}

            </label>

            <label htmlFor="email" className="registerLabel">

                <p>Email:</p>

                <input
                    className="signInInput"
                    type="email"
                    name="email"
                    id = "email"
                    value = {formState.email}
                    onChange={inputChange}
                />

                {errorState.email.length > 0 ? (
                    <p className="error">{errorState.email}</p>
                ) : null}

            </label>

            <label htmlFor="phone" className="registerLabel">

                <p>Phone Number:</p>

                <input
                    className="signInInput"
                    type="number"
                    name="phone"
                    id = "phone"
                    value = {formState.phone}
                    onChange={inputChange}
                />

                {errorState.phone.length > 0 ? (
                    <p className="error">{errorState.phone}</p>
                ) : null}

            </label>

            <label htmlFor="address" className="registerLabel">

                <p>Address:</p>

                <input
                    className="signInInput"
                    type="address"
                    name="address"
                    id = "address"
                    value = {formState.address}
                    onChange={inputChange}
                />

                {errorState.address.length > 0 ? (
                    <p className="error">{errorState.address}</p>
                ) : null}

            </label>

            <label htmlFor="time" className="registerLabel">

                <p>Time Available:</p>

                <select
                    name="time"
                    id="time"
                    onChange={inputChange}
                    value={formState.time}
                >

                    <option value="6am">6:00AM - 9:00AM</option>

                    <option value="9am">9:00AM - 12:00PM</option>

                    <option value="12pm">12:00PM - 3:00PM</option>

                    <option value="3pm">3:00PM - 6:00PM</option>

                    <option value="6pm">6:00PM - 9:00PM</option>

                </select>

            </label>

            <label htmlFor="terms">

                <input
                    type ="checkbox"
                    id = "terms"
                    name = "terms"
                    checked ={formState.terms}
                    onChange={inputChange}
                />

                Terms Of Service

            </label>

            <Button
                text="Register"
                type = "submit"
                margin="10px auto"
            />

        </form>

    )

}