import React, { useState, useEffect } from "react";
import { apiAuth } from "../utils/apiAuth";
import { updateStudent } from "../store/actions/studentActions";
import { connect } from "react-redux";

const Student = (props) => {
  const [students, setStudents] = useState([]);
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    apiAuth()
      .get("/student/view")
      .then((res) => {
        console.log(res);
        setStudents(res.data);
      })
      .catch((err) => console.log(err, "Can't find student"));
  }, []);
  useEffect(() => {
    apiAuth()
      .get("/volunteer")
      .then((res) => {
        console.log(res);
        setVolunteers(res.data);
      })
      .catch((err) => console.log(err, "No volunteers for you"));
  }, []);
  const updateStudent = (e) => {
    e.preventDefault();
    console.log(props);
    props.updateStudent(props.student);
  };
  return (
    <>
      <div>
        {students.map((student) => {
          return (
            <li key={student.id}>
              {`${student.firstName} ${student.lastName}`}
            </li>
          );
        })}
        <button onClick={updateStudent}>Update Profile</button>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    ...state,
    isUpdating: state.isUpdating,
  };
};

export default connect(mapStateToProps, { updateStudent })(Student);
