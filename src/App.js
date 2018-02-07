import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
// import logo from './logo.svg';
import './App.css';

import _ from "lodash";
import InputForm from "./input_components/input_form";
import Fetch from "./body_components/fetch";

// cd C:\Users\xmobl\Documents\GitRepos\cryptosearch-react

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputFormData: {searchInput: "", exchangeInput: "", curInput: "", fetchComponentKey: -1}
        };
    }
    
    updateFormData(allInputs) {
        // updates inputFormData in this.state
        this.setState({inputFormData : allInputs}, () => console.log(this.state.inputFormData));
    }


    render() {
        // console.log(this.state.inputFormData);
        const updateFormData = _.debounce(allInputs => this.updateFormData(allInputs), 300);

        return (
            <div className="App">
                <header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h1 className="App-title">CryptoSearch-React</h1>
                    <h2 className="App-subtitle">React.js rewrite of CryptoSearch</h2>
                </header>
                
                <InputForm onInputChange={updateFormData}/>

                <Fetch 
                key={this.state.inputFormData.fetchComponentKey} 
                getInputFormData={
                    () => {return this.state.inputFormData}
                }/>
                    
            </div>
        );
    }
}

export default App;
