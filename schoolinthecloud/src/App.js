import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';
import Volunteer from './components/forms/Volunteer';
import './assets/styles/css/index.css';
import Header from './components/header/Header';



function App() {
	return (
		<Provider store={store}>
			<div className="App">
			<Header props={props} />
				<Volunteer />
			</div>
		</Provider>

	);
}

export default App;
