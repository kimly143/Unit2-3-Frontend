import React, { useState } from 'react';
import './assets/styles/css/index.css';

// import components
import Header from './components/header/Header';
// import Navigation from './components/header/Navigation';

function App(props) {
	return (
		<div className="App">
			{/* <h1>Welcome to School in the Cloud</h1> */}
			<Header props={props} />
		</div>
	);
}

export default App;
