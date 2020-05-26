import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Home from '../containers/Home';
import Volunteer from '../Volunteer';
import Student from '../Student';
import SignInForm from '../forms/SignInForm';
import Linked from './Linked';

const Navigation = (props) => {
	return (
		<>
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/protected">Volunteers</Link>
							</li>
							<li>
								<Link to="/protected">Students</Link>
							</li>
							<li>
								<Link to="/login">Login</Link>
							</li>
						</ul>
					</nav>
					<Switch>
						<PrivateRoute exact path="/" component={Home} />
						<PrivateRoute
							exact
							path="/protected"
							component={Student}
							props={props}
						/>
						<PrivateRoute
							exact
							path="/protected"
							component={Volunteer}
							props={props}
						/>
						<Route exact path="/login" component={SignInForm} props={props} />
					</Switch>
				</div>
			</Router>
		</>
	);
};
export default Navigation;
