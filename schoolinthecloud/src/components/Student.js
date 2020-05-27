import React, { useState, useEffect } from "react";
import { apiAuth } from "../utils/apiAuth";
import { updateStudent } from "./actions/index";
import { connect } from "react-redux";

const Student = (props) => {
  const [student, setStudent] = useState([]);
  const [volunteer, setVolunteer] = useState([]);

  useEffect(() => {
    apiAuth()
      .get("/student")
      .then((res) => {
        console.log(res);
        setStudent(res.data);
      })
      .get("/volunteer")
      .then((res) => {
        console.log(res);
        setVolunteer(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const updateStudent = (e) => {
    e.preventDefault();
    console.log(props);
    props.updateStudent(props.student);
  };
  return (
    <div>
      <div>{student.name}</div>
      <button onClick={updateStudent}>Update Profile</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ...state,
    isUpdating: state.isUpdating,
  };
};

export default connect(mapStateToProps, { updateStudent })(Student);
