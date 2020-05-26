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

				<Link to="/" className="linkSt">Home</Link>


				<Link to="/protected" className="linkSt">Volunteers</Link>

				<Link to="/protected" className="linkSt">Students</Link>

				<Link to="/login" className="linkSt" onClick={props.clickHandler}>Login</Link>


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
						{/*<Route exact path="/login" component={SignInForm} props={props}	/>*/}
						<Route exact path="/login" >

							<SignInForm props={props} signInState = {props.signInState}/>

						</Route>
					</Switch>

			</Router>
		</>
	);
};
export default Navigation;
