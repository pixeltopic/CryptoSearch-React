import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
// import logo from './logo.svg';
import './App.css';

import InputForm from "./input_components/input_form";

// cd C:\Users\xmobl\Documents\GitRepos\cryptosearch-react

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
            inputFormData: {searchInput: "", exchangeInput: "", curInput: ""}
        };
	}
	// add fetch class below inputform, which will pass in inputFormData as a prop.
	render() {
		// console.log(this.state.inputFormData);
		return (
			<div className="App">
				<header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
					<h1 className="App-title">CryptoSearch-React</h1>
					<h2 className="App-subtitle">React.js rewrite of CryptoSearch</h2>
				</header>
				
				<InputForm onInputChange={ 
					allInputs => this.setState({inputFormData : allInputs}, 
					() => console.log(this.state.inputFormData))}/>
					
			</div>
		);
	}
}

export default App;
