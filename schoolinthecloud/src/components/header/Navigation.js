// Dependancies
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';

// Components
import Home from '../containers/Home';
import Volunteer from '../Volunteer';
import Student from '../Student';
import SignInForm from '../forms/SignInForm';

const Navigation = (props) => {
	return (
		<>
			<Router>
				<div>
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
					<Switch>
						<Route exact path="/" component={Home} />
						<PrivateRoute path="/student" component={Student} props={props} />
						<PrivateRoute
							path="/volunteer"
							component={Volunteer}
							props={props}
						/>
						<Route exact path="/login" component={SignInForm} props={props} />
						{/* <Route exact path="/login">
							<SignInForm props={props} signInState={props.signInState} />
						</Route> */}
					</Switch>
				</div>
			</Router>
		</>
	);
};
export default Navigation;
