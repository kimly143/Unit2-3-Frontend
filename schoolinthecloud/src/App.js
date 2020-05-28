import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';
import './assets/styles/css/index.css';
import Header from './components/header/Header';



function App(props) {
	return (
		<Provider store={store}>
			<div className="App">
				<Header props={props} />
			</div>
		</Provider>

	);
}

export default App;
