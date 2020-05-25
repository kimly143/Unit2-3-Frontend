import react from 'React';
import * as yup from 'yup';
import axios from 'axios';

import Styler from "../../assets/styles/styledComponents/styleClass";

export default function Register(props){

    const style = new Styler();

    //Used to test field validation with taken username values from backend.
    const testerFieldForUsernameAvailability = ['thisss','isaaa','tester'];

    const formSchema_Student = yup.object().shape({
        userName: yup
            .string()
            .required("Username is required")
            .min(4, "Username must be longer than 4 characters")
            .test('username-availability',"Username is unavailable",
                function(testerFieldForUsernameAvailability){
                    testerFieldForUsernameAvailability.map(item=>{
                        item !== userName;
                    })
                })
    })

}