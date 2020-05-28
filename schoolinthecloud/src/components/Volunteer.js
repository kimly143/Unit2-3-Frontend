import React from 'react';
import Register from './forms/Register';
import VolunteerForm from './forms/Volunteer';
import Header from './header/Header';
import VolunteerDashboard from './VolunteerDashboard';

const Volunteer = () => {
	return (
		<>
			{/* <Register /> */}
			<h1> Welcome to Volunteer Dashboard! </h1>

			<VolunteerDashboard />
		</>
	);
};
export default Volunteer;
