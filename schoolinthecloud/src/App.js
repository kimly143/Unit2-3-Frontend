import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import store from './store/store';
import Volunteer from './components/forms/Volunteer';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Volunteer />
			</div>
		</Provider>
	);
}

export default App;
