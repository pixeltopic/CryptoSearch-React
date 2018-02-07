import React, {Component} from "react";
import UpdatePicture from "../view_components/update_picture";

class Fetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureData: null,
            searchDetailData: null,
            statDetailsData: null // null so make sure to display nothing in table until typing starts
        }; 
        // will be set by fetch helper funcs.
        // dumb components will be rendered on the render()
        // remember to color code.

        this.getInputFormData = props.getInputFormData;
    }


    fetchAverage(coin, exchange, cur) {
        
        let apiURL = `https://min-api.cryptocompare.com/data/generateAvg?fsym=${coin}&tsym=${cur}&e=${exchange}`;
        
        fetch(apiURL, {mode:"cors"}).then(response => {
            return response.json();
        }).then(response => {
            if (response.Response === "Error") {
                console.log("fetchAverage: API Url was Invalid, likely no exchange for that currency.");
                
                return -1;
            } else {
                console.log("Fetched Averages");
                // console.log(response);
                
                let statDetail = response.DISPLAY;
                
                return {
                    PRICE: statDetail.PRICE,
                    CHANGE24HOUR: statDetail.CHANGE24HOUR,
                    CHANGEPCT24HOUR: statDetail.CHANGEPCT24HOUR,
                    VOLUME24HOUR: statDetail.VOLUME24HOUR,
                    VOLUME24HOURTO: statDetail.VOLUME24HOURTO,
                    OPEN24HOUR: statDetail.OPEN24HOUR,
                    LOW24HOUR: statDetail.LOW24HOUR,
                    HIGH24HOUR: statDetail.HIGH24HOUR
                }
            }
            
//            console.log(response.Display);
        }).then(obj => {
            if (obj !== -1) {
                console.log("Update Stat Detail Views here");
                // updateStatsDetails(obj);
                this.setState({statDetailsData: obj});
                
            } else {
                const invalidSearchObj = {
                    PRICE: "N/A",
                    CHANGE24HOUR: "N/A",
                    CHANGEPCT24HOUR: 0,
                    VOLUME24HOUR: "N/A",
                    VOLUME24HOURTO: 0,
                    OPEN24HOUR: "N/A",
                    LOW24HOUR: 0,
                    HIGH24HOUR: 0
                }
                //updateStatsDetails(invalidSearchObj);
                this.setState({statDetailsData: invalidSearchObj});
                console.log("Exchange is nonexistent");
            }
            
        }).catch(err => {
            console.log(err);
        });
    }

    fetchDescription(coinName, exchangeInput, curInput) {
        
        let apiURL = "https://min-api.cryptocompare.com/data/all/coinlist";
        
        fetch(apiURL, {mode:"cors"}).then(function(response) { // mode:"cors" required for https links
            return response.json();
        }).then(response => {
            console.log("fetchDescription: Fetched");

            // iterate though response.Data for the .CoinName or .Symbol that matches coinName attr.
            for (let DataEntry in response.Data) {
                let dataObj = response.Data[DataEntry];
                if (dataObj.CoinName.toUpperCase() === coinName || dataObj.Symbol === coinName) {
                    
                    return {
                        BaseImageUrl: response.BaseImageUrl,
                        CoinName: dataObj.CoinName,
                        FullName: dataObj.FullName,
                        ImageUrl: dataObj.ImageUrl,
                        Symbol: dataObj.Symbol,
                        
                    };
                }
            }
            
            return -1; // JSON fetched successfully, but Response was an error (maybe because search was invalid)
            
        }).then(obj => {
            if (obj !== -1) {
                // updatePicture(obj.BaseImageUrl, obj.ImageUrl);
                // updateSearchDetails(obj.CoinName, obj.Symbol, exchangeInput, curInput);
                this.setState({
                    pictureData: obj.BaseImageUrl + obj.ImageUrl,
                    searchDetailData: {coinName: obj.CoinName, 
                        exchangeInput: exchangeInput, 
                        curInput: curInput}
                });
                this.fetchAverage(obj.Symbol, exchangeInput, curInput);
            } else {
                console.log("fetchDescription: Invalid CoinName or Symbol");
            }
            
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        // recommended react method to make network requests. note that it will re-render
        // each time the fetch component key is changed.
        const inputFormData = this.getInputFormData();

        const coinName = inputFormData.searchInput.toUpperCase();
        const exchangeInput = inputFormData.exchangeInput;
        const curInput = inputFormData.curInput;

        this.fetchDescription(coinName, exchangeInput, curInput);

        // console.log(this.state);


    }

    render() {
        return (
            <div>
                Fetched Data Views
                <UpdatePicture pictureData={this.state.pictureData}/>
            </div>
        );
    }

}

export default Fetch;