import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./assets/styles/css/index.css";
import Header from "./components/header/Header";
import Student from "./components/Student";
import SignInForm from "./components/forms/SignInForm";
import Volunteer from "./components/Volunteer";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Header props={props} />
        <Switch>
          <Route exact path="/" />
          <PrivateRoute path="/student" component={Student} props={props} />
          <PrivateRoute path="/volunteer" component={Volunteer} props={props} />
          <Route exact path="/login" component={SignInForm} props={props} />
          {/* <Route
            path="/movies/:id"
            render={(props) => (
              <Register {...props} saveToList={addToSavedList} />
            )}
          /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
