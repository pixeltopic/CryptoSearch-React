import React, {Component} from "react";
import { Form, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

class InputForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            searchInput: "", 
            exchangeInput: "CoinBase", 
            curInput: "USD",
            fetchComponentKey: 0
        };
        // searchInput must be caps later on when performing search.

        this.onInputChange = props.onInputChange;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(event) {
        // based on event.target.name, updates corresponding state.
        const name = event.target.name;

        // changes key of fetch component to force remounting.
        this.state.fetchComponentKey === 0 ? this.setState({fetchComponentKey: 1}) : this.setState({fetchComponentKey: 0});
        // console.log(this.state.fetchComponentKey);

        // callback to force setState to update immediately in parent state (App)
        this.setState({[name]: event.target.value},() => this.onInputChange(this.state));
    }

    handleSubmit(event) {
        // uses callback from App to force-update parent (App's) state.

        // forces re-mounting
        this.state.fetchComponentKey === 0 ? this.setState({fetchComponentKey: 1}, 
            () => this.onInputChange(this.state)) : 
            this.setState({fetchComponentKey: 0}, 
                () => this.onInputChange(this.state));

        
        event.preventDefault();
    }

    exchangeInit() {
        // dynamically initializes exchange dropdown input
        let exchangeDropdown = [];

        let exchangeOptions = ["CoinBase", "GDAX", "BitTrex", "Kraken", "Gemini", "QuadrigaCX", "Binance"];

        for (let i = 0; i < exchangeOptions.length; i++) {
            let term = exchangeOptions[i];  
            exchangeDropdown.push(<option key={term} value={term}>{term}</option>);
            
        }

        return exchangeDropdown;
    }

    curInit() {
        // dynamically initializes currency dropdown input
        let curDropdown = [];

        let curOptions = ["USD", "CAD", "EUR", "USDT", "BTC", "ETH"];

        for (let i = 0; i < curOptions.length; i++) {
            let term = curOptions[i];
            curDropdown.push(<option key={term} value={term}>{term}</option>);
        }

        return curDropdown;
    }

    render() {
        // Renders an inline form via React-Bootstrap. "name" prop used for updating correct state.
        const exchangeSelection = this.exchangeInit();
        const curSelection = this.curInit();

        return (
            <Form onSubmit={this.handleSubmit} inline>
                <FormGroup controlId="formInlineName">
                    <ControlLabel>Coin Name</ControlLabel>{' '}
                    <FormControl 
                    type="text"
                    name="searchInput"
                    placeholder="e.g. btc, or bitcoin" 
                    value={this.state.searchInput} 
                    onChange={this.handleChange}
                    />
                </FormGroup>{' '}

                <FormGroup controlId="formControlsSelect1">
                    <ControlLabel>Exchange</ControlLabel>{' '}
                    <FormControl 
                    componentClass="select" 
                    name="exchangeInput"
                    value={this.state.exchangeInput} 
                    onChange={this.handleChange}>
                        {exchangeSelection}
                    </FormControl>
                </FormGroup>{' '}

                <FormGroup controlId="formControlsSelect2">
                    <ControlLabel>Currency</ControlLabel>{' '}
                    <FormControl 
                    componentClass="select" 
                    name="curInput"
                    value={this.state.curInput} 
                    onChange={this.handleChange}>
                        {curSelection}>
                    </FormControl>
                </FormGroup>{' '}

                <Button type="submit">Refresh</Button>
            </Form>
        );
    }
}

export default InputForm;