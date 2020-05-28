// Dependancies
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";

const Navigation = (props) => {
  return (
    <>
      <nav>
        <Link to="/" className="linkSt">
          Home
        </Link>
        <Link to="volunteer" className="linkSt">
          Volunteers
        </Link>
        <Link to="/student" className="linkSt">
          Students
        </Link>
        <Link to="/login" className="linkSt">
          Login
        </Link>
      </nav>
    </>
  );
};
export default Navigation;
