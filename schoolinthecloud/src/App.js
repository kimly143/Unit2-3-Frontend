import React, { useState } from 'react';
import './assets/styles/css/index.css';

// import components
import Header from './components/header/Header';

function App(props) {
	return (
		<div className="App">
			<Header props={props} />
		</div>
	);
}

export default App;
