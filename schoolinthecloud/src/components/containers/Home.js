import React from 'react';
import Register from '../forms/Register';
import Header from '../header/Header';

const Home = (props) => {
	return (
		<>
			<Header props={props} />
			<Register props={props} />
		</>
	);
};
export default Home;
