import React, {Component} from 'react';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = props.onInputChange;
        this.state = {searchInput: "", exchangeInput: "CoinBase", curInput: "USD"};
        // searchInput must be caps later on when performing search.

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(event) {
        // based on event.target.name, updates corresponding state.
        const name = event.target.name;
        // callback to force setState to update immediately in parent state (App)
        this.setState({[name]: event.target.value},() => this.onInputChange(this.state));
    }

    handleSubmit(event) {
        // uses callback from App to force-update parent (App's) state.

        this.onInputChange(this.state);
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

    // TODO: use bootstrap to turn it into an inline form.
    render() {
        const exchangeSelection = this.exchangeInit();
        const curSelection = this.curInit();

        return (
            <form
            onSubmit={this.handleSubmit}>
                <label>
                    Enter Coin Name
                    <input
                    name="searchInput"
                    value={this.state.searchInput} 
                    onChange={this.handleChange} />
                </label>

                <label>
                    Select Exchange
                    <select className="exchange_input" 
                    name="exchangeInput"
                    value={this.state.exchangeInput} 
                    onChange={this.handleChange}>
                        {exchangeSelection}
                    </select>
                </label>

                <label>
                    Select Currency
                    <select className="cur_input" 
                    name="curInput"
                    value={this.state.curInput} 
                    onChange={this.handleChange}>
                        {curSelection}
                    </select>
                </label>
            <input type="submit" value="Refresh" />
            </form>
           
        );
    }
}

export default InputForm;