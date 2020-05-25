import React,{useState} from 'react';
import './assets/styles/css/index.css';

// import components

import Header from "./components/headers/header";

import Styler from "./assets/styles/styledComponents/styleClass";

function App() {

const style = new Styler();

	return <div className="App">

		<Header />

		<style.Text
		fontFamily="proxima_novaregular"
		color="black"
		text='proxima_novaregular'
		fontSize="30px"
		/>

	</div>;
}

export default App;
